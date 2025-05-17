import NewTransaction from "../newTransaction/newTransaction";

export default function MobileLayout() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      {/* Content */}
      <main className="flex flex-col gap-4 p-4">
        <div className="bg-brand-primary rounded-md p-4 text-white shadow-md">
          <h1 className="text-base font-semibold">Olá, Joana! :)</h1>
          <p className="text-sm">Quinta-feira, 03/09/2024</p>
          <div className="mt-2 text-right text-sm">
            <span className="mr-2">Saldo</span>
            <div className="mt-1 border-t border-white pt-1 text-lg font-bold">
              Conta Corrente R$ 2.500,00
            </div>
          </div>
        </div>

        <NewTransaction />

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
