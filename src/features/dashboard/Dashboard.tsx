import DesktopLayout from "./components/layout/DesktopLayout";
import TabletLayout from "./components/layout/TabletLayout";
import MobileLayout from "./components/layout/MobileLayout";
import DashboardHeader from "./components/header/DashboardHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ROUTE_CONSTANTS } from "@/constants";
import { getUserBalances, getUserById } from "@/service/userService";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(ROUTE_CONSTANTS.signin);
  }

  const user = await getUserById(session.user.id);

  const balances = await getUserBalances(session.user.id);

  const totalBalance = balances
    .filter((b) => b.currency === "BRL")
    .reduce((sum, b) => sum + b.amount, 0);

  return (
    <>
      <DashboardHeader />
      <div>
        <div className="hidden lg:block">
          <DesktopLayout
            userName={user?.name ?? "Usuário"}
            userBalance={totalBalance}
          />
        </div>

        <div className="hidden md:block lg:hidden">
          <TabletLayout
            userName={user?.name ?? "Usuário"}
            userBalance={totalBalance}
          />
        </div>

        <div className="block md:hidden">
          <MobileLayout
            userName={user?.name ?? "Usuário"}
            userBalance={totalBalance}
          />
        </div>
      </div>
    </>
  );
}
