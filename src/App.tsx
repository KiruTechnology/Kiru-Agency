import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProcessTimeline from "./components/ProcessTimeline";
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
      <FloatingCTA />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessTimeline />
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
