import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TokenomicsSection } from "@/components/home/TokenomicsSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { FAQSection } from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
