export default function FeaturesSection() {
  return (
    <section className="bg-white px-4 py-12 text-center sm:px-6 md:px-16">
      <h2 className="mb-8 text-lg font-semibold text-neutral-900">
        Vantagens do nosso banco:
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {[
          "Conta e cartão gratuitos",
          "Saques sem custo",
          "Programa de pontos",
          "Seguro Dispositivos",
        ].map((title, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="bg-brand-primary/10 text-brand-primary h-12 w-12 rounded-full">
              {/* Placeholder for icon */}
              <div className="mt-3 text-xs">[Icon]</div>
            </div>
            <div className="font-semibold">{title}</div>
            <p className="text-sm text-neutral-600">
              Texto breve explicando o benefício do banco.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
