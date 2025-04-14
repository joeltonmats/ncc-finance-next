export default function HomeLayout() {
  return (
    <div className="min-h-screen w-full bg-[--color-neutral-100] font-sans">
      {/* Header */}
      <header className="flex h-16 items-center justify-between bg-[--color-primary] px-8 text-[--color-neutral-100]">
        <div className="text-lg font-bold">Bytebank</div>
        <div className="text-sm">Joana da Silva Oliveira</div>
      </header>

      {/* 3-column layout */}
      <main className="grid grid-cols-[220px_1fr_320px] gap-6 px-8 py-6">
        {/* Sidebar Menu */}
        <aside className="rounded-md bg-white p-4 shadow-md">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[--color-neutral-900]">
            <span className="text-[--color-primary]">Início</span>
            <span className="hover:text-[--color-primary]">Transferências</span>
            <span className="hover:text-[--color-primary]">Investimentos</span>
            <span className="hover:text-[--color-primary]">
              Outros serviços
            </span>
          </nav>
        </aside>

        {/* Center column */}
        <section className="flex flex-col gap-6">
          {/* Welcome Card */}
          <div className="rounded-md bg-[--color-primary] p-6 text-white shadow-md">
            <h1 className="text-lg font-semibold">Olá, Joana! :)</h1>
            <p className="text-sm">Quinta-feira, 03/09/2024</p>
            <div className="mt-4 text-right text-sm">
              <span className="mr-2">Saldo</span>
              <div className="mt-1 border-t border-white pt-1 text-xl font-bold">
                Conta Corrente R$ 2.500,00
              </div>
            </div>
          </div>

          {/* Transaction Form */}
          <div className="rounded-md border border-[--color-neutral-200] bg-[--color-neutral-100] p-6 text-sm shadow-md">
            <h2 className="mb-4 font-semibold text-[--color-neutral-900]">
              Nova transação
            </h2>

            <div className="mb-4">
              <label className="block pb-1">
                Selecione o tipo de transação
              </label>
              <div className="rounded border px-2 py-1 text-[--color-neutral-700]">
                Dropdown here
              </div>
            </div>

            <div className="mb-4">
              <label className="block pb-1">Valor</label>
              <input
                type="text"
                className="w-full rounded border px-2 py-1 text-[--color-neutral-900]"
                value="00,00"
                readOnly
              />
            </div>

            <button className="rounded bg-[--color-primary] px-4 py-2 text-white hover:opacity-90">
              Concluir transação
            </button>
          </div>
        </section>

        {/* Extract Summary */}
        <aside className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Extrato</h2>
          <div className="space-y-2 text-sm text-[--color-neutral-900]">
            <p>Novembro - Depósito - R$ 150 - 18/11/2022</p>
            <p>Novembro - Depósito - R$ 100 - 21/11/2022</p>
            <p>Novembro - Depósito - R$ 50 - 21/11/2022</p>
            <p>Novembro - Transferência - -R$ 500 - 21/11/2022</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
