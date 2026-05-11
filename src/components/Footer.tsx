import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-dark border-t border-slate-mid/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-amber">⁘</div>
            <p className="text-chalk/70 text-sm">
              Building products that scale, for teams that matter.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center bg-slate/50 text-chalk hover:bg-amber hover:text-slate-dark transition-colors text-xs"
              >
                X
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center bg-slate/50 text-chalk hover:bg-amber hover:text-slate-dark transition-colors text-xs"
              >
                in
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center bg-slate/50 text-chalk hover:bg-amber hover:text-slate-dark transition-colors text-xs"
              >
                gh
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-chalk mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  MVP Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-chalk mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-chalk mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-chalk/70 hover:text-amber transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-mid/30 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-chalk/60">
          <p>© 2024 Kiru Tech. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Made with </span>
            <span className="text-amber">⁘</span>
            <span> in Nairobi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
