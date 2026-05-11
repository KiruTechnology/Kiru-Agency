import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    time: "morning",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", project: "", time: "morning" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-amber flex items-center gap-2 text-sm font-medium">
                <span>✦</span>
                <span>Let's Build</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-chalk">
                Start Your Project
                <br />
                <span className="text-amber">Today</span>
              </h2>
              <p className="text-chalk/70 max-w-md">
                Share your ideas and goals with us. We'll help turn them into
                impactful digital solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✉</div>
                <div>
                  <p className="text-chalk/70 text-sm mb-1">Email</p>
                  <a
                    href="mailto:hello@kirutech.io"
                    className="text-chalk hover:text-amber transition-colors"
                  >
                    hello@kirutech.io
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">📞</div>
                <div>
                  <p className="text-chalk/70 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+254700000000"
                    className="text-chalk hover:text-amber transition-colors"
                  >
                    +254 700 000 000
                  </a>
                </div>
              </div>

              {/* Response */}
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">⏰</div>
                <div>
                  <p className="text-chalk/70 text-sm mb-1">Response</p>
                  <p className="text-chalk">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-8 border-t border-slate-mid/30">
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-slate-mid/30 hover:border-amber/50 flex items-center justify-center text-chalk hover:text-amber transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-slate-mid/30 hover:border-amber/50 flex items-center justify-center text-chalk hover:text-amber transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-slate-mid/30 hover:border-amber/50 flex items-center justify-center text-chalk hover:text-amber transition-colors"
                aria-label="GitHub"
              >
                gh
              </a>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="relative">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-br from-amber/10 to-slate/10 rounded-lg border border-amber/30">
                <div className="text-5xl mb-4">✦</div>
                <h3 className="text-2xl font-bold text-chalk mb-2">
                  We received your message!
                </h3>
                <p className="text-chalk/70 text-center">
                  We'll reach out within 24 hours to confirm your call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-chalk mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Njeri"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate/50 border border-slate-mid/30 text-chalk placeholder-chalk/40 focus:outline-none focus:border-amber/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-chalk mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate/50 border border-slate-mid/30 text-chalk placeholder-chalk/40 focus:outline-none focus:border-amber/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-chalk mb-2"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you're building — goals, timeline, budget..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate/50 border border-slate-mid/30 text-chalk placeholder-chalk/40 focus:outline-none focus:border-amber/50 transition-colors resize-none"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-chalk mb-4">
                    When Should We Reach You?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "morning", icon: "☀", label: "Morning", time: "9AM - 12PM" },
                      {
                        value: "afternoon",
                        icon: "◐",
                        label: "Afternoon",
                        time: "12PM - 5PM",
                      },
                      {
                        value: "evening",
                        icon: "☾",
                        label: "Evening",
                        time: "5PM - 8PM",
                      },
                    ].map((slot) => (
                      <label
                        key={slot.value}
                        className="flex items-center gap-4 p-4 rounded-lg border border-slate-mid/30 hover:border-amber/30 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name="time"
                          value={slot.value}
                          checked={formData.time === slot.value}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-xl">{slot.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-chalk">{slot.label}</p>
                          <p className="text-sm text-chalk/60">{slot.time}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-amber text-slate-dark font-bold rounded-lg hover:bg-amber/90 transition-colors flex items-center justify-center gap-2"
                >
                  <span>📅</span>
                  Book a Call
                  <span>→</span>
                </button>

                {/* Trust Message */}
                <div className="text-center space-y-2 text-sm text-chalk/60">
                  <p>We respect your time. No spam, ever.</p>
                  <p>We'll get back within 24 hours.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
