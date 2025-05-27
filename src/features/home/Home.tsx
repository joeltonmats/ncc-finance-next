import FeaturesSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-900">
      <HomeHeader />
      <main className="from-brand-primary/90 to-brand-primary/40 bg-gradient-to-b to-white/80">
        <HeroSection />
        <FeaturesSection />
      </main>
      <HomeFooter />
    </div>
  );
}
