/**
 * pages/HomePage.tsx
 *
 * Main landing page featuring:
 * - HeroWithDomeGallery (hero + dome gallery with scroll animation)
 * - All major sections extracted from KIRUMAIN
 */

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
} from "../components/sections";
import FloatingCTA from "../components/FloatingCTA";
import "../styles/kiru-styles.css";

export default function HomePage() {
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
      <FloatingCTA />
    </>
  );
}
