"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./WelcomeCard.module.css";

interface WelcomeCardProps {
  name: string;
  date: Date;
  accountLabel?: string;
  balance: number;
}

export default function WelcomeCard({
  name,
  date,
  accountLabel = "Conta Corrente",
  balance,
}: WelcomeCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  const formattedDate = date
    .toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/^./, (c) => c.toUpperCase());

  const formattedBalance = balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className={styles["block-saldo"]}>
      <h2>Olá, {name}! :)</h2>
      <time>{formattedDate}</time>

      <div className={styles.flex}>
        <div className={styles["saldo-valor"]}>
          <strong>
            Saldo
            <button
              type="button"
              onClick={() => setShowBalance((v) => !v)}
              className={styles["eye-button"]}
              aria-label={showBalance ? "Ocultar saldo" : "Mostrar saldo"}
            >
              <Image
                src={
                  showBalance ? "/images/olho.svg" : "/images/olho-fechado.svg"
                }
                alt={showBalance ? "Mostrar saldo" : "Saldo oculto"}
                width={24}
                height={24}
              />
            </button>
          </strong>

          <div className={styles.cc}>
            <span>{accountLabel}</span>
            <span className={styles.valor}>
              {showBalance ? formattedBalance : "••••••••"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
