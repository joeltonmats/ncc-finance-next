"use client";
import Image from "next/image";

export default function HomeFooter() {
  return (
    <footer className="bg-neutral-900 px-6 py-10 text-white sm:px-6 md:px-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 text-sm md:grid-cols-3">
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
          <h4 className="mb-2 font-semibold">Desenvolvido por NCC</h4>
          <div className="flex">
            <div className="relative h-5 w-6">
              <Image
                src="/assets/home/logo-branco.svg"
                alt="Saldo oculto"
                width="27"
                height="27"
                priority={false}
              />
            </div>
            <div className="text-xl font-bold italic">Bytebank</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex content-center gap-2 text-neutral-300">
              <a
                className="content-center"
                href="https://www.instagram.com/fiapoficial/"
              >
                <Image
                  src="/assets/home/instagram.svg"
                  alt="Saldo oculto"
                  width="27"
                  height="27"
                  priority={false}
                />
              </a>
              <a
                className="content-center"
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5511981700028"
              >
                <Image
                  src="/assets/home/whatsapp.svg"
                  alt="Saldo oculto"
                  width="27"
                  height="27"
                  priority={false}
                />
              </a>
              <a
                className="content-center"
                href="https://www.youtube.com/tvfiap"
              >
                <Image
                  src="/assets/home/youtube.svg"
                  alt="Saldo oculto"
                  width="27"
                  height="20"
                  priority={false}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
