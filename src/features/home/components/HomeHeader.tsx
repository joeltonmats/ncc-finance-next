"use client";
import { useRouter } from "next/navigation";

export default function HomeHeader() {
  const router = useRouter();

  return (
    <header className="flex flex-wrap items-center justify-between bg-white px-4 py-4 shadow-sm sm:px-6 md:px-8">
      <div className="text-brand-primary text-xl font-bold">Bytebank</div>
      <nav className="hidden gap-6 text-sm font-medium text-neutral-700 md:flex">
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
      </nav>
      <div className="mt-4 flex w-full gap-2 md:mt-0 md:w-auto md:justify-end">
        <button
          className="border-brand-primary text-brand-primary rounded-md border px-4 py-1 text-sm"
          onClick={() => router.push("/dashboard")}
        >
          Já tenho conta
        </button>
        <button
          className="bg-brand-primary rounded-md px-4 py-1 text-sm text-white"
          onClick={() => router.push("/dashboard")}
        >
          Abrir minha conta
        </button>
      </div>
    </header>
  );
}
