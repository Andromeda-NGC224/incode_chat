import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/ui/Header"));
const HeroSection = dynamic(() => import("@/components/HomePage/HeroSection"));
const WondersSection = dynamic(
  () => import("@/components/HomePage/WondersSection")
);
const NeuralLightsSection = dynamic(
  () => import("@/components/HomePage/NeuralLightsSection")
);
const FjordsSection = dynamic(
  () => import("@/components/HomePage/FjordsSection")
);
const Footer = dynamic(() => import("@/components/ui/Footer"));

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <WondersSection />
      <NeuralLightsSection />
      <FjordsSection />
      <Footer />
    </main>
  );
}
