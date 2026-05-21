/**
 * layouts/RootLayout.tsx
 *
 * Wraps all public-facing pages (Home, Services, Projects, Terms, Privacy)
 * with the shared Navbar and Footer from KiruTech.tsx.
 *
 * Auth pages (Login, Signup) are EXCLUDED — they render standalone.
 */

import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

/* ── Root Layout ── */
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
