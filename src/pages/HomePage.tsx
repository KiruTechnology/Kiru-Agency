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
  FloatingCTA,
} from "../components/sections";

export function HomePage() {
  return (
    <>
      <HeroWithDomeGallery />
      <StatsStrip /> <Features />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Team />
      <FloatingCTA />
    </>
  );
}
