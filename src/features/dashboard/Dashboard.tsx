import DesktopLayout from "./components/layout/DesktopLayout";
import TabletLayout from "./components/layout/TabletLayout";
import MobileLayout from "./components/layout/MobileLayout";
import DashboardHeader from "./components/header/DashboardHeader";

export default function Dashboard() {
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
