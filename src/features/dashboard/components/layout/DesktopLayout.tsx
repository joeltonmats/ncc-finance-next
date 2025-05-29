"use client";

import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";
import NewTransaction from "../newTransaction/newTransaction";
import React, { useState } from "react";
import TransactionList from "@/components/Transactions/TransactionList/TransactionList";

interface DesktopLayoutProps {
  userName: string;
  userBalance: number;
}

export default function DesktopLayout({
  userName,
  userBalance,
}: DesktopLayoutProps) {
  const [balance, setBalance] = useState(userBalance);
  return (
    <div className="min-h-screen w-full bg-neutral-100 font-sans">
      {/* Wrapper to apply outer spacing as shown in the design spec */}
      <div className="mx-auto max-w-[1440px] px-10 py-6">
        <main className="grid grid-cols-[220px_1fr_320px] gap-6">
          {/* Sidebar */}
          <aside className="rounded-md bg-white p-4 shadow-md">
            <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-900">
              <span className="text-brand-primary">Início</span>
            </nav>
          </aside>

          {/* Center */}
          <section className="flex flex-col gap-6">
            <WelcomeCard name={userName} date={new Date()} balance={balance} />

            {/* Card for making transactions */}
            <NewTransaction balance={balance} setBalance={setBalance} />
          </section>

          {/* Extract */}
          <aside className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
            <TransactionList balanceId="" userId="" />
          </aside>
        </main>
      </div>
    </div>
  );
}
