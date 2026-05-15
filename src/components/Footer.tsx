import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate py-12 md:py-16">
      <div className="footer-shell max-w-7xl mx-auto px-6">
        <div className="footer-card bg-slate/80 border border-chalk/8 rounded-2xl p-8 md:p-10 shadow-2xl">
          {/* Footer Top */}
          <div className="footer-top grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 pb-8 md:pb-10 border-b border-chalk/8 mb-8 md:mb-6">
            {/* Brand Section */}
            <div className="footer-brand md:col-span-2 space-y-4">
              <div className="footer-logo-row flex items-center gap-2">
                <img
                  src="/assets/kiru%20favicon.png"
                  alt="Kiru Tech Logo"
                  className="footer-logo-mark w-6 h-6"
                />
                <p className="footer-logo text-lg font-bold text-chalk">
                  Kiru Tech
                </p>
              </div>
              <p className="footer-tagline text-sm text-chalk/60 leading-relaxed">
                A product engineering partner that builds scalable software
                systems.
              </p>
              <div className="footer-socials flex gap-3">
                <a
                  href="#"
                  className="footer-social-icon w-8 h-8 rounded-full border border-chalk/12 bg-chalk/4 flex items-center justify-center text-chalk/70 hover:text-amber hover:border-amber transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="X / Twitter"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer-social-icon w-8 h-8 rounded-full border border-chalk/12 bg-chalk/4 flex items-center justify-center text-chalk/70 hover:text-amber hover:border-amber transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer-social-icon w-8 h-8 rounded-full border border-chalk/12 bg-chalk/4 flex items-center justify-center text-chalk/70 hover:text-amber hover:border-amber transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Columns */}
            <div className="footer-cols md:col-span-3 grid grid-cols-3 gap-4 md:gap-6">
              {/* Company */}
              <div className="footer-col space-y-2">
                <p className="footer-col-head text-xs font-bold text-chalk/75 uppercase tracking-widest mb-2">
                  Company
                </p>
                <a
                  href="#features"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Why Kiru
                </a>
                <a
                  href="#team"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Team
                </a>
                <a
                  href="#work"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#testimonials"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Stories
                </a>
              </div>

              {/* Services */}
              <div className="footer-col space-y-2">
                <p className="footer-col-head text-xs font-bold text-chalk/75 uppercase tracking-widest mb-2">
                  Services
                </p>
                <a
                  href="#services"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Web Apps
                </a>
                <a
                  href="#services"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Mobile Apps
                </a>
                <a
                  href="#services"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  UI/UX Design
                </a>
                <a
                  href="#services"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Backend & APIs
                </a>
              </div>

              {/* Contact */}
              <div className="footer-col space-y-2">
                <p className="footer-col-head text-xs font-bold text-chalk/75 uppercase tracking-widest mb-2">
                  Contact
                </p>
                <a
                  href="mailto:hello@kirutech.io"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  hello@kirutech.io
                </a>
                <a
                  href="tel:+254700000000"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  +254 700 000 000
                </a>
                <a
                  href="#contact"
                  className="block text-sm text-chalk/50 hover:text-chalk transition-colors"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-chalk/40">
            <span>© {currentYear} Kiru Tech. All rights reserved.</span>
            <div className="footer-legal flex gap-4 md:gap-6">
              <a href="#" className="hover:text-chalk transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-chalk transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-chalk transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
