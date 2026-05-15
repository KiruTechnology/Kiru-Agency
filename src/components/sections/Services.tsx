import { BtnOutline } from "../ui/Buttons";
import "./Services.css";

const services = [
  { num: "01", title: "Web Application Development", body: "Full-stack web apps — fast, accessible, and production-ready from day one." },
  { num: "02", title: "Mobile App Development",       body: "Cross-platform or native mobile experiences that delight users on any device." },
  { num: "03", title: "UI/UX Design",                 body: "Research-driven design systems and interfaces that convert and retain users." },
  { num: "04", title: "Backend & APIs",               body: "Robust, documented APIs and server infrastructure built for reliability at scale." },
  { num: "05", title: "MVP Development",              body: "Validate fast. We scope and deliver lean MVPs in 4–8 weeks — no fluff." },
  { num: "06", title: "System Architecture",          body: "Microservices, cloud infra, data pipelines — designed to grow with you." },
];

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-inner">
        <div className="section-header two-col-header">
          <div>
            <p className="section-eye">
              <span className="spark-sm">✦</span> What We Do
            </p>
            <h2 className="section-h2">
              Services Built<br />For Growth
            </h2>
          </div>
          <BtnOutline href="#contact" label="EXPLORE SERVICES →" />
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card reveal" key={s.num}>
              <span className="svc-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
