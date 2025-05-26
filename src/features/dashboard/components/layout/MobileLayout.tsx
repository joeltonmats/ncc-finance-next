"use client";
import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";
import NewTransaction from "../newTransaction/newTransaction";
        
interface TabletLayoutProps {
  userName: string;
  userBalance: number;
}

export default function MobileLayout({
  userName,
  userBalance,
}: TabletLayoutProps) {

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      {/* Content */}
      <main className="flex flex-col gap-4 p-4">
        <div className="bg-brand-primary rounded-md p-4 text-white shadow-md">
          <WelcomeCard
            name={userName}
            date={new Date()}
            balance={userBalance}
          />
        </div>

        <NewTransaction />

        <div className="rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Extrato</h2>
          <div className="mt-2 text-sm text-neutral-900">
            <p>Novembro - Depósito - R$ 150</p>
            <p>Novembro - Transferência - -R$ 500</p>
          </div>
        </div>
      </main>
    </div>
  );
}
