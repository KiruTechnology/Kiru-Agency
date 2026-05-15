import { BtnApple } from "../ui/Buttons";
import "./Features.css";

const features = [
  { icon: "⚡", title: "Fast Iteration Cycles",      body: "We ship weekly. No long sprints, no waiting — continuous delivery from day one." },
  { icon: "🧠", title: "Product-First Thinking",     body: "We think like founders. Every decision is weighed against user value and business impact." },
  { icon: "🔒", title: "Secure & Scalable",          body: "Architecture built to handle 10 users or 10 million — without a painful rewrite." },
  { icon: "🎨", title: "Clean UI/UX Design",         body: "Interfaces your users will love, built with precision and tested with real feedback." },
  { icon: "🤝", title: "Transparent Communication",  body: "Daily updates, open roadmaps, and a direct line to your engineering team — always." },
];

export function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eye">
            <span className="spark-sm">✦</span> Why Kiru Tech
          </p>
          <h2 className="section-h2">
            Built Different.<br />By Design.
          </h2>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feat-card reveal" key={f.title}>
              <span className="feat-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="feat-card feat-card--cta reveal">
            <p className="feat-cta-label">Ready to build?</p>
            <BtnApple href="#contact" icon="🛠" label="Let's Build Yours" amber />
          </div>
        </div>
      </div>
    </section>
  );
}
