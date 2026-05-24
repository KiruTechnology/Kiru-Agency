import FloatingCTA from "../components/FloatingCTA";
import { HeroWithDomeGallery } from "../components/HeroWithDomeGallery";
import {
  StatsStrip,
  Features,
  Services,
  Process,
  Work,
  Testimonials,
  Pricing,
  FAQ,
  Contact,
  Team,
  // FloatingCTA,
} from "../components/sections";
// import FloatingCTA from "../components/FloatingCTA";
// import "../styles/kiru-styles.css";

export function HomePage() {
  return (
    <>
      <HeroWithDomeGallery />
      <StatsStrip />
      <Features />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Team />
      {/* <FloatingCTA /> */}
    </>
  );
}
