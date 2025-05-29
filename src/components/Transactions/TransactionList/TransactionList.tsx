"use client";
import React, { useState } from "react";
import { Balance } from "@/models/balance";
import { useEffect } from "react";
import { getTransactionsByBalanceId } from "@/service/transactionService";

interface TransactionListProps {
  balance: Balance;
}

const TransactionList: React.FC<TransactionListProps> = ({ balance }) => {
  interface Transaction {
    id: string;
    month: string;
    type: string;
    amount: string;
    date: string;
  }

  interface RawTransaction {
    id: string;
    balanceId: string;
    type: string;
    amount: number;
    timestamp: Date;
    description: string | null;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchTransactions() {
      const data = await getTransactionsByBalanceId(balance.id);
      if (data instanceof Error) {
        console.error("Erro ao buscar transações:", data.message);
        return;
      }
      if (!Array.isArray(data)) {
        console.error("Dados de transações inválidos:", data);
        return;
      }

      const formattedData: Transaction[] = data.map((tx: RawTransaction) => ({
        id: tx.id,
        month: new Date(tx.timestamp).toLocaleString("pt-BR", {
          month: "long",
        }),
        type: tx.type,
        amount: tx.amount.toFixed(2),
        date: new Date(tx.timestamp).toLocaleDateString("pt-BR"),
      }));

      setTransactions(formattedData);
    }
    if (balance?.id) {
      fetchTransactions();
    }
  }, [balance?.id]);

  return (
    <>
      <h2 className="text-lg font-semibold">Extrato</h2>
      <div className="text-sm text-[--color-neutral-900]">
        {transactions.length === 0 ? (
          <p>Nenhuma transação encontrada.</p>
        ) : (
          transactions.map((tx, idx) => (
            <div key={tx.id || idx} className="relative mb-2 flex-grow">
              <h3 className="text-brand-primary font-medium">
                {tx.month || "Mês"}
              </h3>
              <h4 className="text-brand-primary font-medium">
                {tx.type || "Tipo"}
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                <span className="dark:text-dark-5 truncate text-sm font-medium xl:max-w-[8rem]">
                  R$ {tx.amount}
                </span>
                <time className="text-xs" dateTime={tx.date}>
                  {tx.date}
                </time>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TransactionList;
