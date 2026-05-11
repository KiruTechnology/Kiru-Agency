import React, { useRef, useState } from "react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Kiru Tech didn't just write code — they thought about our product like co-founders. We launched in 8 weeks and our users love it.",
      author: "Amara Osei",
      role: "CEO, TradeLink Africa",
      avatar: "AO",
      bg: "from-slate-600 to-slate-700",
    },
    {
      quote:
        "The most transparent engineering team I've worked with. Daily updates, zero surprises, and the architecture they built scales beautifully.",
      author: "James Muriuki",
      role: "CTO, PayEase Kenya",
      avatar: "JM",
      bg: "from-purple-700 to-purple-800",
    },
    {
      quote:
        "We came with a napkin sketch. Kiru Tech came back with a fully designed MVP that raised our seed round. Unreal team.",
      author: "Sofia Ndungu",
      role: "Founder, GreenStack Labs",
      avatar: "SN",
      bg: "from-green-700 to-green-800",
    },
    {
      quote:
        "From day one they felt like part of our team. The quality of code, the communication, the speed — everything exceeded our expectations.",
      author: "Daniel Kamau",
      role: "CTO, Lipa Later",
      avatar: "DK",
      bg: "from-red-900 to-red-950",
    },
    {
      quote:
        "We'd tried two other agencies before Kiru Tech. The difference in product thinking and delivery speed was night and day.",
      author: "Fatima Omar",
      role: "CEO, Savannah Pay",
      avatar: "FO",
      bg: "from-emerald-700 to-emerald-800",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-slate">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="space-y-4 flex-1">
            <p className="text-amber flex items-center gap-2 text-sm font-medium">
              <span>✦</span>
              <span>Client Stories</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk">
              What Our{" "}
              <span className="text-amber">Clients</span>
              <br />
              Say
            </h2>
            <p className="text-chalk/70 text-sm max-w-md">
              Real partnerships. Real results. Real impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-slate-mid/30 hover:border-amber/50 text-chalk hover:text-amber transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-slate-mid/30 hover:border-amber/50 text-chalk hover:text-amber transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-out"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-full lg:min-w-[calc(50%-1rem)] bg-slate-dark/50 border border-slate-mid/30 rounded-lg p-8 hover:border-amber/30 transition-colors"
              >
                {/* Quote Mark */}
                <div className="text-4xl text-amber/40 mb-4">"</div>

                {/* Quote */}
                <p className="text-chalk text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.bg} flex items-center justify-center font-bold text-chalk`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-chalk">{testimonial.author}</p>
                    <p className="text-chalk/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-slate-dark/50 to-slate-dark/30 border border-amber/30 rounded-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎯</span>
            <div>
              <h3 className="text-xl font-bold text-chalk mb-2">
                Ready to be our next success story?
              </h3>
              <p className="text-chalk/70">
                Let's build something exceptional together.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-8 py-3 bg-amber text-slate-dark font-bold rounded-lg hover:bg-amber/90 transition-colors whitespace-nowrap"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
