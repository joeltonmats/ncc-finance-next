import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-4 py-4 text-black sm:px-6 md:px-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div className="text-center text-xl leading-snug font-semibold sm:pt-8 sm:text-2xl lg:pt-0 lg:text-start">
          Experimente mais liberdade no <br />
          controle da sua vida financeira. <br />
          Crie sua conta com a gente!
        </div>

        <div className="relative mx-auto h-fit min-h-56 w-full max-w-md rounded text-neutral-900 shadow-inner lg:h-80">
          <Image
            src="/assets/home/ilustration-banner.svg"
            alt="Ilustração financeira"
            fill={true}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
