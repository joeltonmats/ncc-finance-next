import DesktopLayout from "./DesktopLayout";
import TabletLayout from "./TabletLayout";
import MobileLayout from "./MobileLayout";

export default function ResponsiveLayout() {
  return (
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
  );
}
