import React, { useState } from "react";
import { useScrollDetection } from "../hooks/useScrollDetection";
import { ButtonApple } from "./Buttons";

const Navbar: React.FC = () => {
  const { isHidden } = useScrollDetection(80, 8);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-slate/95 backdrop-blur-md border-b border-slate-mid/30 transition-transform duration-320 ${
        isHidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/assets/kiru.png"
            alt="Kiru Tech Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-chalk hover:text-amber transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <ButtonApple
          href="#contact"
          text="Start Project"
          icon="✦"
          className="hidden md:inline-flex text-sm"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className="w-5 h-0.5 bg-chalk"></span>
          <span className="w-5 h-0.5 bg-chalk"></span>
          <span className="w-5 h-0.5 bg-chalk"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate border-t border-slate-mid/30 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-chalk hover:text-amber transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-mid/30">
              <a
                href="#contact"
                className="inline-block text-chalk hover:text-amber transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Project ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
