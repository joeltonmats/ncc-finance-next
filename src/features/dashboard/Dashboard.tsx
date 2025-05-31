import DesktopLayout from "./components/layout/DesktopLayout";
import TabletLayout from "./components/layout/TabletLayout";
import MobileLayout from "./components/layout/MobileLayout";
import DashboardHeader from "./components/header/DashboardHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ROUTE_CONSTANTS } from "@/constants";
import { getUserById } from "@/service/userService";
import { getBalanceByUserId } from "@/service/balanceService";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(ROUTE_CONSTANTS.signin);
  }
  const sessionUserId = session.user.id;

  const user = await getUserById(sessionUserId);

  const balance = await getBalanceByUserId(sessionUserId);

  return (
    <>
      <DashboardHeader />
      <div className="min-h-screen bg-[#E4EDE3] pt-16">
        <div className="hidden lg:block">
          <DesktopLayout
            userName={user?.name ?? "Usuário"}
            balance={
              balance ?? {
                id: "",
                userId: "",
                accountType: "",
                amount: 0,
                currency: "",
              }
            }
          />
        </div>

        <div className="hidden md:block lg:hidden">
          <TabletLayout
            userName={user?.name ?? "Usuário"}
            balance={
              balance ?? {
                id: "",
                userId: "",
                accountType: "",
                amount: 0,
                currency: "",
              }
            }
          />
        </div>

        <div className="block md:hidden">
          <MobileLayout
            userName={user?.name ?? "Usuário"}
            balance={
              balance ?? {
                id: "",
                userId: "",
                accountType: "",
                amount: 0,
                currency: "",
              }
            }
          />
        </div>
      </div>
    </>
  );
}
