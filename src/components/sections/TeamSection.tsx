import React, { useState } from "react";

const TeamSection: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      num: "01",
      name: "Kiru Wanjiku",
      role: "Founder & Lead Engineer",
      bio: "Full-stack architect with 8+ years shipping products for startups and enterprises across Africa and Europe. Obsessed with clean systems and fast delivery.",
      expertise: ["Go", "React", "PostgreSQL", "AWS", "Docker", "Redis"],
      stats: ["8+ yrs", "20+ products", "3 continents"],
      color: "from-blue-600 to-blue-700",
    },
    {
      num: "02",
      name: "Amina Mwangi",
      role: "Head of Design",
      bio: "Product designer with a background in UX research and systems thinking. She brings user empathy to every pixel, shipping interfaces that convert.",
      expertise: ["Figma", "UX Research", "Design Systems", "Prototyping", "User Testing"],
      stats: ["12+ yrs", "50+ projects", "Remote-first"],
      color: "from-purple-600 to-purple-700",
    },
    {
      num: "03",
      name: "David Kipchoge",
      role: "Backend Engineer",
      bio: "Cloud infrastructure specialist. Builds scalable APIs and manages deployments that handle millions of requests. Coffee enthusiast.",
      expertise: ["Node.js", "Microservices", "Kubernetes", "GraphQL", "CI/CD"],
      stats: ["6+ yrs", "200M+ requests", "Zero-downtime"],
      color: "from-green-600 to-green-700",
    },
    {
      num: "04",
      name: "Sarah Muthiga",
      role: "QA & Product",
      bio: "Detail-oriented engineer who ensures every feature works flawlessly. She bridges product and engineering, ensuring we ship with confidence.",
      expertise: ["Automation Testing", "Manual QA", "Product Strategy", "Analytics"],
      stats: ["7+ yrs", "1000+ issues tracked", "100% satisfaction"],
      color: "from-pink-600 to-pink-700",
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4">
            <p className="text-amber flex items-center gap-2 text-sm font-medium">
              <span>✦</span>
              <span>The Team</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk">
              People Behind
              <br />
              the Product
            </h2>
          </div>
          <p className="text-chalk/70 text-sm">Click a card to learn more</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="cursor-pointer"
              onClick={() =>
                setExpandedMember(expandedMember === idx ? null : idx)
              }
            >
              {expandedMember === idx ? (
                // Expanded View
                <div className="p-8 rounded-lg bg-gradient-to-br from-slate-dark/80 to-slate-dark/40 border border-amber/30 space-y-6 animate-fadeIn">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${member.color} flex items-center justify-center font-bold text-chalk text-xl flex-shrink-0`}
                    >
                      {member.num}
                    </div>
                    <div className="flex-1">
                      <p className="text-amber text-sm font-bold mb-1">
                        {member.num}
                      </p>
                      <h3 className="text-xl font-bold text-chalk">
                        {member.name}
                      </h3>
                      <p className="text-amber text-sm">{member.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-chalk/80 leading-relaxed">{member.bio}</p>

                  {/* Expertise */}
                  <div>
                    <p className="text-chalk/70 text-sm font-semibold mb-3">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1 bg-slate/60 border border-slate-mid/50 text-chalk text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-mid/30">
                    {member.stats.map((stat, sidx) => (
                      <div key={sidx} className="text-center">
                        <p className="text-amber font-bold">{stat}</p>
                      </div>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href="#"
                      className="px-4 py-2 bg-slate/50 border border-slate-mid/50 text-chalk text-sm rounded hover:border-amber/50 transition-colors"
                    >
                      tw
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 bg-slate/50 border border-slate-mid/50 text-chalk text-sm rounded hover:border-amber/50 transition-colors"
                    >
                      li
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 bg-slate/50 border border-slate-mid/50 text-chalk text-sm rounded hover:border-amber/50 transition-colors"
                    >
                      gh
                    </a>
                  </div>
                </div>
              ) : (
                // Collapsed View
                <div className="p-6 rounded-lg border border-slate-mid/30 bg-slate-dark/50 hover:border-amber/50 hover:bg-slate-dark/70 transition-all group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${member.color} flex items-center justify-center font-bold text-chalk flex-shrink-0`}
                    >
                      {member.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-amber text-xs font-bold mb-1">
                        {member.num}
                      </p>
                      <h3 className="font-bold text-chalk group-hover:text-amber transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-chalk/70 text-sm">{member.role}</p>
                    </div>
                    <span className="text-amber group-hover:translate-x-1 transition-transform flex-shrink-0">
                      →
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
