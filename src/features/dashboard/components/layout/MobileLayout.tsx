"use client";
import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";
import NewTransaction from "../newTransaction/newTransaction";
import React, { useState } from "react";
import { Balance } from "@/models/balance";

interface TabletLayoutProps {
  userName: string;
  balance: Balance;
}

export default function MobileLayout({ userName, balance }: TabletLayoutProps) {
  const [userBalance, setBalance] = useState(balance);

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      {/* Content */}
      <main className="flex flex-col gap-4 p-4">
        <div className="bg-brand-primary rounded-md p-4 text-white shadow-md">
          <WelcomeCard
            name={userName}
            date={new Date()}
            balance={userBalance.amount}
          />
        </div>

        {/* Card for making transactions */}
        <NewTransaction balance={userBalance} setBalance={setBalance} />

        <div className="rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Extrato</h2>
          <div className="mt-2 text-sm text-neutral-900">
            <p>Novembro - Depósito - R$ 150</p>
            <p>Novembro - Transferência - -R$ 500</p>
          </div>
        </div>
      </main>
    </div>
  );
}
