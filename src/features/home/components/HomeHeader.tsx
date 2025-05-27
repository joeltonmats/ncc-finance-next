"use client";
import { HEADER_CONSTANTS, ROUTE_CONSTANTS } from "@/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeHeader() {
  const router = useRouter();

  return (
    <header className="flex flex-wrap items-center justify-between bg-black px-4 py-4 shadow-sm sm:px-6 md:px-8">
      <div className="flex">
        <div className="relative h-5 w-6">
          <Image
            src="/assets/home/logo-verde.svg"
            alt="Saldo oculto"
            width="27"
            height="27"
            priority={false}
          />
        </div>
        <div className="text-brand-secondary text-xl font-bold italic">
          Bytebank
        </div>
      </div>
      {
        //<div className="text-brand-primary text-xl font-bold italic">Bytebank</div>
      }
      <nav className="text-brand-secondary hidden gap-6 text-sm font-medium md:flex">
        <a href="#">{HEADER_CONSTANTS.about}</a>
        <a href="#">{HEADER_CONSTANTS.services}</a>
      </nav>
      <div className="mt-4 flex w-full gap-2 md:mt-0 md:w-auto md:justify-end">
        <button
          className="bg-brand-secondary rounded-md px-4 py-1 text-sm text-white"
          onClick={() => router.push(ROUTE_CONSTANTS.signup)}
        >
          {HEADER_CONSTANTS.openAccount}
        </button>
        <button
          className="border-brand-secondary text-brand-secondary rounded-md border px-4 py-1 text-sm"
          onClick={() => router.push(ROUTE_CONSTANTS.signin)}
        >
          {HEADER_CONSTANTS.account}
        </button>
      </div>
    </header>
  );
}
