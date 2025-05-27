"use client";

import { LINK_CONSTANTS, ROUTE_CONSTANTS } from "@/constants";
import { useSession, signOut } from "next-auth/react";

export default function DashboardHeader() {
  const { data: session } = useSession();

  const userName = session?.user?.name || "Guest";

  return (
    <header className="bg-brand-primary flex h-16 items-center justify-between px-4 text-white sm:px-6 md:px-8 lg:px-10">
      <div className="text-base font-bold md:text-lg">Bytebank</div>
      <div className="flex items-center gap-4 text-sm">
        <span className="hidden md:block">Bem vindo(a), {userName}</span>
        {session && (
          <button
            onClick={() => signOut({ callbackUrl: ROUTE_CONSTANTS.signin })}
            className="text-xs underline hover:text-gray-200"
          >
            {LINK_CONSTANTS.signout}
          </button>
        )}
      </div>
    </header>
  );
}
