import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import PricingSection from "@/components/PricingSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LiveDemoSection />
      <PricingSection />
      <WhyChooseUsSection />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
};

export default Index;
