import NewTransaction from "../newTransaction/newTransaction";

export default function TabletLayout() {
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
            <h1 className="text-base font-semibold">Olá, Joana! :)</h1>
            <p className="text-sm">Quinta-feira, 03/09/2024</p>
            <div className="mt-2 text-right text-sm">
              <span className="mr-2">Saldo</span>
              <div className="mt-1 border-t border-neutral-100 pt-1 text-xl font-bold">
                Conta Corrente R$ 2.500,00
              </div>
            </div>
          </div>

          <NewTransaction />
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
