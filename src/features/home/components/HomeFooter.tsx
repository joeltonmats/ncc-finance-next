export default function HomeFooter() {
  return (
    <footer className="bg-neutral-900 px-4 py-10 text-white sm:px-6 md:px-16">
      <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3 md:grid-cols-4">
        <div>
          <h4 className="mb-2 font-semibold">Serviços</h4>
          <ul className="space-y-1 text-neutral-300">
            <li>Conta corrente</li>
            <li>Conta PJ</li>
            <li>Cartão de crédito</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Contato</h4>
          <ul className="space-y-1 text-neutral-300">
            <li>0800 004 250 08</li>
            <li>meajuda@bytebank.com.br</li>
            <li>ouvidoria@bytebank.com.br</li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="mb-2 font-semibold">Desenvolvido por Alura</h4>
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold">Bytebank</div>
            <div className="flex gap-2 text-neutral-300">
              <span>[IG]</span>
              <span>[YT]</span>
              <span>[FB]</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
