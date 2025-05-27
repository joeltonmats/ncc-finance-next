"use client";
import Image from "next/image";

const objects = [
  {
    title: "Conta e cartão gratuitos",
    icon: "/assets/home/presente.svg",
    alt: "Ícone de caixa de presente com laço em cima",
    description:
      "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
  },
  {
    title: "Saques sem custo",
    icon: "/assets/home/saque.svg",
    alt: "Ícone de uma mão realizando um saque de uma nota de dinheiro",
    description:
      "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
  },
  {
    title: "Programa de pontos",
    icon: "/assets/home/pontos.svg",
    alt: "Ícone de uma estrela",
    description:
      "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
  },
  {
    title: "Seguro Dispositivos",
    icon: "/assets/home/dispositivos.svg",
    alt: "Ícone com varios dispositivos sendo eles computador, tablet e laptop ",
    description:
      "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
  },
];
export default function FeaturesSection() {
  return (
    <section className="px-4 py-12 text-center sm:px-6 md:px-16">
      <h2 className="mb-8 text-lg font-semibold text-neutral-900">
        Vantagens do nosso banco:
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {objects.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="h-12 w-12 rounded-full">
              {/* Placeholder for icon */}
              <div className="relative mt-3 h-10">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  priority={false}
                  fill={true}
                />
              </div>
            </div>
            <div className="font-semibold">{item.title}</div>
            <p className="text-sm text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
