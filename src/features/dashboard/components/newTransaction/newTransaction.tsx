"use client";

import React, { useState } from "react";
import "./newTransaction.css"; // Import the CSS file for styling

const NewTransaction: React.FC = () => {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransactionType(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Nova transação: ${transactionType}`);
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
        <label htmlFor="transactionValue" className="subtitle-card mb-2">
          Valor
        </label>
        <input
          id="transactionValue"
          type="number"
          placeholder="00,00"
          className="dropdown-decor focus:border-brand-primary focus:ring-brand-primary w-70 rounded-md border p-2 shadow-sm sm:text-sm"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-brand-primary hover:bg-brand-primary-dark w-30 rounded-md py-2 font-semibold text-white"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default NewTransaction;
