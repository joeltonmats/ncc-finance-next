import DesktopLayout from "./components/layout/DesktopLayout";
import TabletLayout from "./components/layout/TabletLayout";
import MobileLayout from "./components/layout/MobileLayout";
import DashboardHeader from "./components/header/DashboardHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ROUTE_CONSTANTS } from "@/constants";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(ROUTE_CONSTANTS.signin);
  }

  return (
    <>
      <DashboardHeader />
      <div>
        <div className="hidden lg:block">
          <DesktopLayout />
        </div>

        <div className="hidden md:block lg:hidden">
          <TabletLayout />
        </div>

        <div className="block md:hidden">
          <MobileLayout />
        </div>
      </div>
    </>
  );
}
