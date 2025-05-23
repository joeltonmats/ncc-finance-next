"use client";
import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";
interface DesktopLayoutProps {
  userName: string;
  userBalance: number;
}

export default function DesktopLayout({
  userName,
  userBalance,
}: DesktopLayoutProps) {
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
            <WelcomeCard
              name={userName}
              date={new Date()}
              balance={userBalance}
            />

            <div className="rounded-md bg-neutral-500/10 p-6 text-sm shadow-md">
              <h2 className="mb-4 font-semibold text-neutral-900">
                Nova transação
              </h2>
              <div className="mb-4">
                <label className="block pb-1">
                  Selecione o tipo de transação
                </label>
                <div className="rounded border px-2 py-1">Dropdown here</div>
              </div>
              <div className="mb-4">
                <label className="block pb-1">Valor</label>
                <div className="rounded border px-2 py-1">00,00</div>
              </div>
              <button className="bg-brand-primary rounded px-4 py-2 text-white hover:opacity-90">
                Concluir transação
              </button>
            </div>
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
