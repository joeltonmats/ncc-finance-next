import FeaturesSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-900">
      <HomeHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <HomeFooter />
    </div>
  );
}
