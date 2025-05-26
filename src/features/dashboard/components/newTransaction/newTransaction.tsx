"use client";

import React, { useState } from "react";
import "./newTransaction.css"; // Import the CSS file for styling
import { NumericFormat, NumberFormatValues } from "react-number-format";
interface NewTransactionProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const NewTransaction: React.FC<NewTransactionProps> = ({
  balance,
  setBalance,
}) => {
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

  const handleSubmit = () => {
    const valueNumber = parseFloat(valor);
    if (!transactionType || !valueNumber) {
      alert("Selecione o tipo e informe um valor válido.");
      return;
    }
    let newBalance = balance;
    if (transactionType === "Deposito") {
      newBalance += valueNumber;
    } else if (
      transactionType === "Saque" ||
      transactionType === "Transferencia"
    ) {
      newBalance -= valueNumber;
    }
    setBalance(newBalance);
    alert(
      `Nova transação: ${transactionType} de R$ ${Number(valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
    );
    setTransactionType("");
    setValor("");
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
            <option value="Deposito">Depósito</option>
            <option value="Saque">Saque</option>
            <option value="Transferencia">Transferência</option>
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
