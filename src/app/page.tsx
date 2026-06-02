import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ERPSolutions from "@/components/ERPSolutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import IndustriesSection from "@/components/IndustriesSection";
import StatsSection from "@/components/StatsSection";
import Commitment from "@/components/Commitment";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <PortfolioSection />
        <ERPSolutions />
        <WhyChooseUs />
        <DevelopmentProcess />
        <IndustriesSection />
        <StatsSection />
        <Commitment />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
