"use client";

import NewTransaction from "../newTransaction/newTransaction";
import React, { useState } from "react";

export default function DesktopLayout() {
  const [saldo, setSaldo] = useState(2500);
  return (
    <div className="min-h-screen w-full bg-neutral-100 font-sans">
      {/* Wrapper to apply outer spacing as shown in the design spec */}
      <div className="mx-auto max-w-[1440px] px-10 py-6">
        <main className="grid grid-cols-[220px_1fr_320px] gap-6">
          {/* Sidebar */}
          <aside className="rounded-md bg-white p-4 shadow-md">
            <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-900">
              <span className="text-brand-primary">Início</span>
              <span className="hover:text-brand-primary">Transferências</span>
              <span className="hover:text-brand-primary">Investimentos</span>
              <span className="hover:text-brand-primary">Outros serviços</span>
            </nav>
          </aside>

          {/* Center */}
          <section className="flex flex-col gap-6">
            <div className="bg-brand-primary rounded-md p-6 text-white shadow-md">
              <h1 className="text-lg font-semibold">Olá, Joana! :)</h1>
              <p className="text-sm">Quinta-feira, 03/09/2024</p>
              <div className="mt-4 text-right text-sm">
                <span className="mr-2">Saldo</span>
                <div className="mt-1 border-t border-neutral-100 pt-1 text-xl font-bold">
                  Conta Corrente R$ 2.500,00
                </div>
              </div>
            </div>

            {/* <div className="rounded-md bg-neutral-500/10 p-6 text-sm shadow-md"> */}
            <NewTransaction saldo={saldo} setSaldo={setSaldo} />
            {/* </div> */}
          </section>

          {/* Extract */}
          <aside className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
            <h2 className="text-lg font-semibold">Extrato</h2>
            <div className="text-sm text-[--color-neutral-900]">
              <p>Novembro - Depósito - R$ 150 - 18/11/2022</p>
              <p>Novembro - Depósito - R$ 100 - 21/11/2022</p>
              <p>Novembro - Depósito - R$ 50 - 21/11/2022</p>
              <p>Novembro - Transferência - -R$ 500 - 21/11/2022</p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
