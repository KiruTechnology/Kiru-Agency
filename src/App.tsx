import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProcessSection from "./components/sections/ProcessSection";
import WorkSection from "./components/sections/WorkSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import TeamSection from "./components/sections/TeamSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;
