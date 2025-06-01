"use client";

import Image from "next/image";
import React from "react";

export interface AuthModalHeaderProps {
  illustration: string;
  alt: string;
  title: string;
  centerTitle?: boolean;
}

export default function AuthModalHeader({
  illustration,
  alt,
  title,
  centerTitle = false,
}: AuthModalHeaderProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={illustration} alt={alt} width={200} height={160} priority />
      <h2
        className={`mt-4 text-lg font-semibold ${centerTitle ? "text-center" : ""}`}
      >
        {title}
      </h2>
    </div>
  );
}
