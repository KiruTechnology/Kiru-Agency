import { useRef, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  SquaresPlusIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export function Process() {
  const fillRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current || !fillRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const pct = Math.min(
        100,
        (Math.max(0, -rect.top + window.innerHeight * 0.4) /
          sectionRef.current.offsetHeight) *
          130,
      );
      fillRef.current.style.height = pct + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const steps = [
    {
      num: "01",
      icon: MagnifyingGlassIcon,
      title: "Discovery",
      desc: "We immerse ourselves in your business — goals, users, constraints — to build a shared understanding before a single line of code is written.",
    },
    {
      num: "02",
      icon: SquaresPlusIcon,
      title: "Planning",
      desc: "Roadmap, milestones, tech stack, and team structure defined. You see everything upfront — no surprises, no scope creep.",
    },
    {
      num: "03",
      icon: PaintBrushIcon,
      title: "Design",
      desc: "Wireframes, design systems, and interactive prototypes. Your product looks exceptional before development begins.",
    },
    {
      num: "04",
      icon: Cog6ToothIcon,
      title: "Development",
      desc: "Agile sprints with weekly demos. You're never in the dark — real code, real progress, real conversations every step of the way.",
    },
    {
      num: "05",
      icon: BeakerIcon,
      title: "Testing",
      desc: "Automated test suites, manual QA, performance audits, and security checks — we sign off only when it's bulletproof.",
    },
    {
      num: "06",
      icon: RocketLaunchIcon,
      title: "Launch",
      desc: "Deployment, monitoring, go-live support, and a 30-day post-launch window. We don't ship and disappear — we ship and stay.",
    },
  ];

  return (
    <section
      className="kiru-section kiru-process"
      id="process"
      ref={sectionRef}
    >
      <div className="kiru-inner">
        <div className="kiru-process-header">
          <div className="kiru-overline reveal-fade">How We Work</div>
          <h2 className="kiru-section-title reveal-up">
            Six Steps From
            <br />
            Idea to Launch
          </h2>
          <p
            className="kiru-section-sub reveal-up"
            style={{ transitionDelay: "80ms" }}
          >
            A clear, repeatable process that keeps you informed at every stage.
          </p>
        </div>

        <div className="kiru-timeline">
          <div className="kiru-timeline-spine">
            <div className="kiru-timeline-fill" ref={fillRef} />
          </div>

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                className={`kiru-timeline-step reveal-${isLeft ? "left" : "right"}`}
                key={s.num}
              >
                {!isLeft && (
                  <div className="kiru-step-connector">
                    <div className="kiru-step-dot" />
                  </div>
                )}
                <div className={isLeft ? "kiru-step-left" : "kiru-step-right"}>
                  <div className="kiru-step-header">
                    <span className="kiru-step-num">{s.num}</span>
                    <span className="kiru-step-icon">
                      <s.icon className="w-8 h-8" />
                    </span>
                  </div>
                  <h3 className="kiru-step-title">{s.title}</h3>
                  <p className="kiru-step-desc">{s.desc}</p>
                </div>
                {isLeft && (
                  <div className="kiru-step-connector">
                    <div className="kiru-step-dot" />
                  </div>
                )}
              </div>
            );
          })}

          <div className="kiru-timeline-cta reveal-up">
            <a href="#contact" className="btn-green lg flex items-center gap-2">
              <RocketLaunchIcon className="w-5 h-5" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
