/**
 * pages/HomePage.tsx
 *
 * Main landing page featuring:
 * - HeroWithDomeGallery (hero + dome gallery with scroll animation)
 *
 * Additional sections (Stats, Features, Services, Process, Work, Testimonials, Pricing, FAQ, Contact, Team)
 * are available in the original KIRUMAIN component and can be refactored into this page as needed.
 */

import { HeroWithDomeGallery } from "../components/HeroWithDomeGallery";
import FloatingCTA from "../components/FloatingCTA";
import "../styles/kiru-styles.css";

export default function HomePage() {
  return (
    <>
      <HeroWithDomeGallery />
      <FloatingCTA />

      {/* TODO: Add additional sections from KIRUMAIN.tsx:
          - StatsStrip
          - Features
          - Services
          - Process
          - Work
          - Testimonials
          - Pricing
          - FAQ
          - Contact
          - Team
          These components need to be extracted from KIRUMAIN and made reusable.
      */}
    </>
  );
}
