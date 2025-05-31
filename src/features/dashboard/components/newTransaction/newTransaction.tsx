"use client";
import React, { useState } from "react";
import "./newTransaction.css"; // Import the CSS file for styling
import { NumericFormat, NumberFormatValues } from "react-number-format";
import { Balance } from "@/types/balance";
import { TransactionTypeEnum, TransactionTypeLabels } from "@/types";
import { translateTransactionType } from "@/helpers";
import toast from "react-hot-toast";
interface NewTransactionProps {
  balance: Balance;
  setBalance: React.Dispatch<React.SetStateAction<Balance>>;
}

const NewTransaction: React.FC<NewTransactionProps> = ({
  balance,
  setBalance,
}) => {
  const [userBalance] = useState(balance);
  const [transactionType, setTransactionType] = useState("");
  const [valor, setValor] = useState("");

  const handleTransactionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransactionType(event.target.value);
  };

  const handleValueChange = (values: NumberFormatValues) => {
    setValor(values.value);
  };

  const handleSubmit = async () => {
    const valueNumber = parseFloat(valor);
    if (!transactionType || !valueNumber) {
      toast.error("Selecione o tipo de transação e um valor válido.");
      return;
    }
    try {
      await createTransaction(userBalance, transactionType, valueNumber);

      if (transactionType === TransactionTypeEnum.deposit) {
        await increaseBalanceValue(userBalance, valueNumber);
      } else if (
        transactionType === TransactionTypeEnum.withdrawal ||
        transactionType === TransactionTypeEnum.transfer
      ) {
        await deductBalanceAmount(userBalance, valueNumber);
      }
      const updatedBalance = await fetchUpdatedBalance(userBalance);
      setBalance(updatedBalance ?? balance);
      toast.success(
        `Sucesso! ${translateTransactionType(transactionType)} de R$ ${Number(valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
      );
      setTransactionType("");
      setValor("");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Erro ao criar transação:", error);
      toast.error("Error! Erro ao criar transação.");
    }
  };

  return (
    <div className="tw-card-background card-decor rounded-md p-4 shadow-md">
      <div className="title-card mb-4">Nova Transação</div>
      <div className="flex flex-col gap-4">
        {/* Dropdown */}
        <div>
          <select
            id="transactionType"
            value={transactionType}
            onChange={handleTransactionChange}
            className="dropdown-decor focus:border-brand-primary focus:ring-brand-primary mt-1 block w-70 rounded-md shadow-sm sm:text-sm"
          >
            <option value="" disabled>
              Selecione o tipo de transação
            </option>
            <option value={TransactionTypeEnum.deposit}>
              {TransactionTypeLabels.deposit}
            </option>
            <option value={TransactionTypeEnum.withdrawal}>
              {TransactionTypeLabels.withdrawal}
            </option>
            <option value={TransactionTypeEnum.transfer}>
              {TransactionTypeLabels.transfer}
            </option>
          </select>
        </div>

        {/* Input */}
        <label htmlFor="transactionValue" className="subtitle-card">
          Valor
        </label>
        <NumericFormat
          id="transactionValue"
          value={valor}
          onValueChange={handleValueChange}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          placeholder="R$ 0,00"
          className="dropdown-decor focus:border-brand-primary focus:ring-brand-primary w-70 rounded-md border p-2 shadow-sm sm:text-sm"
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-brand-primary hover:bg-brand-primary-dark w-30 rounded-md py-2 text-center font-semibold text-white"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default NewTransaction;

async function createTransaction(
  userBalance: Balance,
  transactionType: string,
  valueNumber: number
) {
  await fetch(`/api/back/transactions/${userBalance.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      transactionType,
      amount: valueNumber,
      description: `${transactionType} no valor de R$ ${valueNumber.toFixed(2)}`,
    }),
  });
}

async function increaseBalanceValue(userBalance: Balance, valueNumber: number) {
  await fetch(`/api/back/balance/${userBalance.id}/add`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: valueNumber }),
  });
}

async function deductBalanceAmount(userBalance: Balance, valueNumber: number) {
  await fetch(`/api/back/balance/${userBalance.id}/subtract`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: valueNumber }),
  });
}

async function fetchUpdatedBalance(userBalance: Balance) {
  const response = await fetch(`/api/back/balance/${userBalance.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const updatedBalance = await response.json();
  return updatedBalance;
}
