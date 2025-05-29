"use client";
import React, { useState } from "react";
import { Balance } from "@/models/balance";
import { useEffect } from "react";

interface TransactionListProps {
  balance: Balance;
}
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

export default function TransactionList({ balance }: TransactionListProps) {
  const [userBalance] = useState(balance);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchTransactions() {
      if (!userBalance || !userBalance.id) {
        console.error("Saldo do usuário não encontrado.");
        return;
      }
      const response = await fetch(`/api/back/transactions/${userBalance.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Erro ao buscar transações:", response.statusText);
        return;
      }

      const data: RawTransaction[] = await response.json();

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
  }, [balance?.id, userBalance]);

  return (
    <>
      <h2 className="text-lg font-semibold">Extrato</h2>
      <div className="text-sm text-[--color-neutral-900]">
        {transactions.length === 0 ? (
          <p>Nenhuma transação encontrada.</p>
        ) : (
          transactions.map((tx, idx) => (
            <div key={tx.id || idx} className="relative mb-2 flex items-center">
              <div className="flex flex-1 flex-col">
                <div className="text-brand-secondary text-xs font-medium">
                  {tx.month || "Mês"}
                </div>
                <div className="text-brand-primary text-sm font-medium">
                  {tx.type || "Tipo"}
                </div>
                <div
                  className={`dark:text-dark-5 truncate text-sm font-medium xl:max-w-[8rem] ${
                    tx.type === "Transferencia" || tx.type === "Saque"
                      ? "text-orange-800"
                      : ""
                  }`}
                >
                  {(() => {
                    const amountNumber = Number(tx.amount);
                    const formatted = amountNumber.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    });
                    return tx.type === "Transferencia" || tx.type === "Saque"
                      ? `-${formatted}`
                      : formatted;
                  })()}
                </div>
                <hr
                  className="border-brand-secondary mt-2 w-full border-t"
                  style={{ height: 1 }}
                />
              </div>

              <time
                className="ml-4 flex h-full items-center self-center text-xs text-gray-500"
                dateTime={tx.date}
                style={{ minWidth: 70, textAlign: "right" }}
              >
                {tx.date}
              </time>
            </div>
          ))
        )}
      </div>
    </>
  );
}
