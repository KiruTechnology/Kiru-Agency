export function Services() {
  const services = [
    {
      num: "01",
      title: "AI Automation & Chatbots",
      body: "Custom AI agents, chatbots, and automation workflows. Integrate intelligent systems that learn from your data.",
    },
    {
      num: "02",
      title: "Web Application Development",
      body: "Full-stack web apps — fast, accessible, and production-ready from day one.",
    },
    {
      num: "03",
      title: "Mobile App Development",
      body: "Cross-platform or native mobile experiences that delight users on any device.",
    },
    {
      num: "04",
      title: "Backend & APIs",
      body: "Robust, documented APIs and server infrastructure built for reliability at scale.",
    },
    {
      num: "05",
      title: "MVP Development",
      body: "Validate fast. We scope and deliver lean MVPs in 4–8 weeks — no fluff.",
    },
    {
      num: "06",
      title: "System Architecture",
      body: "Microservices, cloud infra, data pipelines — designed to grow with you.",
    },
  ];

  return (
    <section className="gh-section gh-services" id="services">
      <div className="gh-inner">
        <div className="gh-services-header">
          <div className="reveal-left">
            <div className="gh-overline">What We Do</div>
            <h2 className="gh-section-title">
              Services Built
              <br />
              For Growth
            </h2>
          </div>
          <a href="/services" className="btn-ghost reveal-right">
            EXPLORE SERVICES →
          </a>
        </div>

        <div className="gh-services-grid stagger">
          {services.map((s) => (
            <div className="gh-svc-card reveal-up" key={s.num}>
              <span className="gh-svc-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
