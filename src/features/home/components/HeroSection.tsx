import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-4 py-4 text-center text-black sm:px-6 md:px-16">
      <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="h-full content-center">
          <div className="mb-4 text-xl font-semibold sm:text-2xl">
            Experimente mais liberdade no controle da sua vida financeira.
          </div>
          <div className="mb-8 text-xl font-semibold sm:text-2xl">
            Crie sua conta com a gente!
          </div>
        </div>

        <div className="relative mx-auto h-fit min-h-56 w-full max-w-md rounded text-neutral-900 shadow-inner lg:h-80">
          {/* Placeholder for illustration */}
          <Image
            src="/assets/home/ilustration-banner.svg"
            alt="Saldo oculto"
            fill={true}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
