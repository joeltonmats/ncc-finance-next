"use client";
import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";
interface TabletLayoutProps {
  userName: string;
  userBalance: number;
}

export default function TabletLayout({
  userName,
  userBalance,
}: TabletLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      {/* Top navigation */}
      <nav className="flex justify-around border-b bg-white py-2 text-sm font-medium text-[--color-neutral-900]">
        <span className="text-brand-primary underline">Início</span>
        <span className="hover:underline">Transferências</span>
        <span className="hover:underline">Investimentos</span>
        <span className="hover:underline">Outros serviços</span>
      </nav>

      {/* Content */}
      <main className="grid grid-cols-2 gap-4 p-4">
        <section className="col-span-2 flex flex-col gap-4">
          <div className="bg-brand-primary rounded-md p-4 text-white shadow-md">
            <WelcomeCard
              name={userName}
              date={new Date()}
              balance={userBalance}
            />
          </div>

          <div className="rounded-md bg-white p-4 shadow-md">
            <h2 className="mb-2 text-neutral-900">Nova transação</h2>
            <div className="mb-2">
              <label className="block text-sm">Tipo</label>
              <div className="rounded border px-2 py-1">Dropdown</div>
            </div>
            <div className="mb-2">
              <label className="block text-sm">Valor</label>
              <div className="rounded border px-2 py-1">00,00</div>
            </div>
            <button className="bg-brand-primary mt-2 rounded px-4 py-2 text-white hover:opacity-90">
              Concluir transação
            </button>
          </div>
        </section>

        <aside className="col-span-2 rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Extrato</h2>
          <div className="mt-2 text-sm text-neutral-900">
            <p>Novembro - Depósito - R$ 150 - 18/11/2022</p>
            <p>Novembro - Transferência - -R$ 500 - 21/11/2022</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
