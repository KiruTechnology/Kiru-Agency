import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import {
  DiReact,
  DiGo,
  DiRust,
  DiPostgresql,
  DiRedis,
  DiDocker,
} from "react-icons/di";
import {
  SiTypescript,
  SiKubernetes,
  SiAew,
  SiVercel,
  SiFigma,
} from "react-icons/si";

// service terms Data
export const ServiceTerms = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    title: "Use License",
    content:
      "Permission is granted to temporarily download one copy of the materials (information or software) on Kiru Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display.",
  },
  {
    title: "Disclaimer",
    content:
      "The materials on Kiru Tech's website are provided on an 'as is' basis. Kiru Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
  },
  {
    title: "Limitations",
    content:
      "In no event shall Kiru Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kiru Tech's website.",
  },
  {
    title: "Accuracy of Materials",
    content:
      "The materials appearing on Kiru Tech's website could include technical, typographical, or photographic errors. Kiru Tech does not warrant that any of the materials on its website are accurate, complete, or current.",
  },
  {
    title: "Links",
    content:
      "Kiru Tech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kiru Tech of the site. Use of any such linked website is at the user's own risk.",
  },
  {
    title: "Modifications",
    content:
      "Kiru Tech may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
  },
  {
    title: "Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts located in Kenya.",
  },
];

// Privacy policy Data
export const Policy = [
  {
    title: "Introduction",
    content: ` Kiru Tech ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our service and the choices you have associated with that data.`,
  },
  {
    title: "Information Collection and Use",
    content: ` We collect several different types of information for various
                purposes to provide and improve our service to you.`,
    other: [
      {
        title: "Types of Data Collected:",
        items: [
          {
            cat: "Personal Data:",
            info: `While using our service, we
                  may ask you to provide us with certain personally identifiable
                  information that can be used to contact or identify you
                  ("Personal Data"). This may include: Email address, Name,
                  Phone number`,
          },
          {
            cat: "Usage Data:",
            info: `We may also collect information
                on how the service is accessed and used ("Usage Data"). This
                may include: Your computer's Internet Protocol address,
                Browser type and version, Pages you visit, Time and date of
                your visit`,
          },
        ],
      },
    ],
  },
  {
    title: "Use of Data",
    content: "Kiru Tech uses the collected data for various purposes:",
    other: [
      {
        title: "Uses of the Collected Data:",
        items: [
          { cat: "", info: `To provide and maintain our service` },
          { info: `To notify you about changes to our service` },
          { info: `To provide customer support` },
          {
            info: ` To gather analysis or valuable information so we can improve our service`,
          },
          { info: `To monitor the usage of our service` },
          { info: `To detect, prevent and address technical issues` },
        ],
      },
    ],
  },
  {
    title: "Security of Data",
    content: `The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.`,
  },
  {
    title: "Changes to This Privacy Policy",
    content: `We may update our Privacy Policy from time to time. We will notify you 
    of any changes by posting the new Privacy Policy on this page and updating the "effective date"
    at the top of this Privacy Policy.`,
  },
  {
    title: "Contact Us",
    content:
      " If you have any questions about this Privacy Policy, please contact us at:",
    other: [
      {
        title: "Quick contact ways: ",
        items: [
          { cat: "Email: ", info: "hello@kirutech.io" },
          { cat: "Phone: ", info: "+254 700 000 000" },
        ],
      },
    ],
  },
  {
    title: "Your Rights",
    content: `You have the right to access, update, or delete the information we have on you.
       If you would like to exercise this right, please contact us using the information
        in the Contact Us section above.`,
  },
];

// Teams section - team members data
export const team = [
  {
    initials: "KW",
    from: "#1a3a5c",
    to: "#0d1117",
    num: "01",
    name: "Kiru Wanjiku",
    role: "Founder & Lead Engineer",
    bio: "Full-stack architect with 8+ years shipping products for startups and enterprises across Africa and Europe. Obsessed with clean systems and fast delivery.",
    tags: [
      ["Go", "React", "PostgreSQL"],
      ["AWS", "Docker", "Redis"],
    ],
    stats: ["8+ yrs", "20+ products", "3 continents"],
    socials: ["tw", "li", "gh"],
  },
  {
    initials: "AM",
    from: "#6b3fa0",
    to: "#2d1b4e",
    num: "02",
    name: "Amina Mwangi",
    role: "Head of Design",
    bio: "Product designer obsessed with user research and turning complex flows into elegant, intuitive experiences that users genuinely love returning to.",
    tags: [
      ["Figma", "Framer", "Research"],
      ["Motion", "Design Systems"],
    ],
    stats: ["5+ yrs", "30+ screens", "4.9★ avg"],
    socials: ["tw", "li", "dr"],
  },
  {
    initials: "DO",
    from: "#1a6640",
    to: "#0f2a1a",
    num: "03",
    name: "David Omondi",
    role: "Backend Engineer",
    bio: "Systems thinker and API architect. Specialized in high-throughput distributed systems, cloud infrastructure, and making things not fall over at 3am.",
    tags: [
      ["Rust", "Kafka", "Kubernetes"],
      ["GCP", "GraphQL", "gRPC"],
    ],
    stats: ["6+ yrs", "99.99% uptime", "10M+ req/day"],
    socials: ["tw", "li", "gh"],
  },
  {
    initials: "BN",
    from: "#b85c20",
    to: "#3a2010",
    num: "04",
    name: "Brenda Njoki",
    role: "Mobile Engineer",
    bio: "React Native and Flutter specialist. Ships mobile apps that feel truly native, perform brilliantly on any device, and users keep choosing over the competition.",
    tags: [
      ["React Native", "Flutter"],
      ["Swift", "Kotlin", "Firebase"],
    ],
    stats: ["5+ yrs", "4.9★ apps", "50k+ DLs"],
    socials: ["tw", "li", "gh"],
  },
];

// Kiru Tech ServicePage Data
export const services = [
  {
    num: "01",
    icon: SparklesIcon,
    name: "AI Automation & AI Agents",
    desc: "Custom AI agents and automation workflows that integrate with your systems. From document processing to intelligent task automation — we build AI that works for your business.",
    tags: [
      "OpenAI",
      "Claude",
      "LangChain",
      "Automation",
      "Integration",
      "Custom Agents",
    ],
    timeline: "3–10 weeks",
    price: "From $8k",
    delivery: "Functional agents",
  },
  {
    num: "02",
    icon: SparklesIcon,
    name: "AI Chatbots & Conversational AI",
    desc: "Intelligent chatbots trained on your data. Whether customer support, internal knowledge assistants, or specialized domain experts — we build AI conversational interfaces that understand context.",
    tags: [
      "OpenAI",
      "LangChain",
      "Vector DB",
      "RAG",
      "Integration",
      "Fine-tuning",
    ],
    timeline: "2–8 weeks",
    price: "From $6k",
    delivery: "Live chatbot",
  },
  {
    num: "03",
    icon: GlobeAltIcon,
    name: "Web Application Development",
    desc: "We build fast, accessible, production-ready full-stack web applications. From complex SaaS platforms to internal tools — we architect for the long run, not just the deadline.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    timeline: "6–16 weeks",
    price: "From $12k",
    delivery: "Weekly demos",
  },
  {
    num: "04",
    icon: DevicePhoneMobileIcon,
    name: "Mobile App Development",
    desc: "Cross-platform and native mobile apps that feel genuinely native, perform brilliantly on any device, and get shipped to the App Store and Play Store — end to end.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    timeline: "8–14 weeks",
    price: "From $15k",
    delivery: "TestFlight builds",
  },
  {
    num: "05",
    icon: PaintBrushIcon,
    name: "UI/UX Design",
    desc: "Research-driven product design. We run discovery workshops, create wireframes, design systems, and high-fidelity prototypes — all before a single line of code is written.",
    tags: ["Figma", "Framer", "User Research", "Prototyping", "Design Systems"],
    timeline: "2–6 weeks",
    price: "From $5k",
    delivery: "Interactive Figma",
  },
  {
    num: "06",
    icon: Cog6ToothIcon,
    name: "Backend & API Development",
    desc: "Robust, well-documented REST and GraphQL APIs. Microservice architectures, event-driven systems, and cloud infrastructure designed for reliability at any scale.",
    tags: ["Go", "Rust", "Node.js", "GraphQL", "gRPC", "Kafka", "Kubernetes"],
    timeline: "4–12 weeks",
    price: "From $10k",
    delivery: "API docs + tests",
  },
  {
    num: "07",
    icon: RocketLaunchIcon,
    name: "MVP Development",
    desc: "Validate your idea fast. We scope, design, and ship lean, polished MVPs in 4–8 weeks. Built to be extended — not thrown away. Our MVPs have raised seed rounds and found product-market fit.",
    tags: ["React", "Node.js", "Supabase", "Vercel", "Stripe", "Auth"],
    timeline: "4–8 weeks",
    price: "From $8k",
    delivery: "Live deployment",
  },
  {
    num: "08",
    icon: BuildingLibraryIcon,
    name: "System Architecture & Consulting",
    desc: "Struggling with a legacy system? Planning a migration? We design scalable architectures, review existing codebases, and give you a clear technical roadmap with no fluff.",
    tags: [
      "Architecture Review",
      "Cloud Migration",
      "Scalability",
      "DevOps",
      "CI/CD",
    ],
    timeline: "1–3 weeks",
    price: "From $3k",
    delivery: "Architecture docs",
  },
];

export const process = [
  {
    num: "01",
    icon: MagnifyingGlassIcon,
    title: "Discovery Call",
    desc: "We dig into your goals, users, and constraints. 60 minutes — free, no commitment.",
  },
  {
    num: "02",
    icon: ClipboardDocumentIcon,
    title: "Scoped Proposal",
    desc: "Detailed project scope, timeline, milestones, and fixed price. No hourly guesswork.",
  },
  {
    num: "03",
    icon: SparklesIcon,
    title: "Sprint Delivery",
    desc: "Weekly demos, open roadmap, and direct Slack access to your team throughout.",
  },
  {
    num: "04",
    icon: RocketLaunchIcon,
    title: "Launch + Support",
    desc: "We handle deployment, go-live support, and a 30-day post-launch window.",
  },
  {
    num: "05",
    icon: ArrowTrendingUpIcon,
    title: "Scale Together",
    desc: "Ongoing retainers for continuous engineering — grow with us past your MVP.",
  },
  {
    num: "06",
    icon: HandRaisedIcon,
    title: "Long-term Partner",
    desc: "Many clients start with a project and evolve into a full engineering partnership.",
  },
];

export const stack = [
  {
    icon: DiReact,
    name: "React",
    cat: "Frontend",
    isComponent: true,
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    cat: "Language",
    isComponent: true,
    color: "#3178C6",
  },
  {
    icon: DiGo,
    name: "Go",
    cat: "Backend",
    isComponent: true,
    color: "#00ADD8",
  },
  {
    icon: DiRust,
    name: "Rust",
    cat: "Backend",
    isComponent: true,
    color: "#CE422B",
  },
  {
    icon: DiPostgresql,
    name: "PostgreSQL",
    cat: "Database",
    isComponent: true,
    color: "#336791",
  },
  {
    icon: DiRedis,
    name: "Redis",
    cat: "Cache",
    isComponent: true,
    color: "#DC382D",
  },
  {
    icon: DiDocker,
    name: "Docker",
    cat: "DevOps",
    isComponent: true,
    color: "#2496ED",
  },
  {
    icon: SiKubernetes,
    name: "Kubernetes",
    cat: "DevOps",
    isComponent: true,
    color: "#326CE5",
  },
  {
    icon: SiAew,
    name: "AWS",
    cat: "Cloud",
    isComponent: true,
    color: "#FF9900",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    cat: "Deploy",
    isComponent: true,
    color: "#000000",
  },
  {
    icon: SiFigma,
    name: "Figma",
    cat: "Design",
    isComponent: true,
    color: "#F24E1E",
  },
  {
    icon: DevicePhoneMobileIcon,
    name: "React Native",
    cat: "Mobile",
    isComponent: true,
    color: "#61DAFB",
  },
];
/*End of Service page Data */

// Kiru Tech ProjectsPage Data
export const projects = [
  {
    id: 1,
    featured: true,
    name: "FlowBoard Analytics",
    type: "SaaS Platform",
    typeColor: "#58a6ff",
    typeBg: "rgba(88,166,255,.1)",
    desc: "Real-time analytics dashboard for e-commerce teams. Built from zero to 12k DAU in 3 months. Full-stack platform with live data streaming, custom report builder, and team collaboration features.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Redis", "AWS"],
    stats: [
      { val: "12k", key: "Daily Users" },
      { val: "↑ 340%", key: "Retention" },
      { val: "3 months", key: "To Market" },
    ],
    outcome: "↑ 340% user retention in 6 months",
    category: "SaaS",
    svg: (
      <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
        <rect width="560" height="270" fill="#0d1117" />
        <rect
          x="0"
          y="0"
          width="560"
          height="270"
          fill="url(#grad1)"
          opacity=".4"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#58a6ff" stopOpacity=".15" />
            <stop offset="100%" stopColor="#3fb950" stopOpacity=".05" />
          </linearGradient>
        </defs>
        <rect
          x="40"
          y="40"
          width="480"
          height="28"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect x="52" y="50" width="8" height="8" rx="2" fill="#3fb950" />
        <rect
          x="68"
          y="51"
          width="60"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <rect
          x="40"
          y="82"
          width="228"
          height="100"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="280"
          y="82"
          width="110"
          height="100"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="402"
          y="82"
          width="118"
          height="100"
          rx="6"
          fill="#161b22"
          stroke="#3fb950"
          strokeWidth="1"
          opacity=".5"
        />
        <rect
          x="52"
          y="98"
          width="80"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <text
          x="52"
          y="145"
          fill="#3fb950"
          fontSize="24"
          fontWeight="800"
          fontFamily="monospace"
        >
          12,847
        </text>
        <rect
          x="52"
          y="156"
          width="50"
          height="4"
          rx="2"
          fill="#3fb950"
          opacity=".3"
        />
        <rect
          x="292"
          y="98"
          width="50"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <text
          x="292"
          y="145"
          fill="#58a6ff"
          fontSize="20"
          fontWeight="800"
          fontFamily="monospace"
        >
          ↑340%
        </text>
        <rect
          x="414"
          y="98"
          width="50"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <text
          x="414"
          y="145"
          fill="#f0883e"
          fontSize="14"
          fontWeight="800"
          fontFamily="monospace"
        >
          $2.1M
        </text>
        <rect
          x="40"
          y="195"
          width="480"
          height="36"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={52 + i * 60}
            y={203}
            width={48}
            height={i % 3 === 0 ? 20 : i % 2 === 0 ? 14 : 8}
            rx="3"
            fill={i === 3 ? "#3fb950" : "#30363d"}
            opacity={i === 3 ? ".8" : ".5"}
          />
        ))}
      </svg>
    ),
  },
  {
    id: 2,
    featured: false,
    name: "Pulse Health Tracker",
    type: "Mobile App",
    typeColor: "#3fb950",
    typeBg: "rgba(63,185,80,.1)",
    desc: "Cross-platform wellness app shipped in 6 weeks. MVP validated, then scaled to 50k+ downloads and a 4.9★ App Store rating. Series A funded following launch.",
    tags: ["React Native", "Firebase", "Node.js", "Expo", "HealthKit"],
    stats: [
      { val: "50k+", key: "Downloads" },
      { val: "4.9★", key: "App Store" },
      { val: "6 weeks", key: "To Launch" },
    ],
    outcome: "4.9★ App Store · 50k downloads",
    category: "Mobile",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <circle
          cx="130"
          cy="95"
          r="65"
          fill="none"
          stroke="#3fb950"
          strokeWidth="1"
          opacity=".2"
        />
        <circle
          cx="130"
          cy="95"
          r="48"
          fill="none"
          stroke="#3fb950"
          strokeWidth="1"
          opacity=".35"
        />
        <circle
          cx="130"
          cy="95"
          r="30"
          fill="none"
          stroke="#3fb950"
          strokeWidth="1.5"
          opacity=".6"
        />
        <circle cx="130" cy="95" r="12" fill="#3fb950" opacity=".9" />
        <rect
          x="30"
          y="170"
          width="90"
          height="5"
          rx="2"
          fill="#3fb950"
          opacity=".3"
        />
        <rect
          x="30"
          y="180"
          width="60"
          height="4"
          rx="2"
          fill="#3fb950"
          opacity=".15"
        />
      </svg>
    ),
  },
  {
    id: 3,
    featured: false,
    name: "NexaOS Workspace",
    type: "Enterprise",
    typeColor: "#a371f7",
    typeBg: "rgba(163,113,247,.1)",
    desc: "Enterprise project management platform rebuilt from a legacy Rails monolith to a modern, scalable SaaS. $2M ARR, 200+ enterprise clients.",
    tags: ["React", "Go", "PostgreSQL", "Kafka", "Kubernetes", "GCP"],
    stats: [
      { val: "$2M", key: "ARR" },
      { val: "200+", key: "Clients" },
      { val: "99.99%", key: "Uptime" },
    ],
    outcome: "$2M ARR · 200+ enterprise clients",
    category: "Enterprise",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <rect
          x="20"
          y="20"
          width="220"
          height="24"
          rx="5"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect x="30" y="28" width="8" height="8" rx="2" fill="#a371f7" />
        <rect
          x="46"
          y="30"
          width="50"
          height="5"
          rx="2"
          fill="#a371f7"
          opacity=".3"
        />
        <rect
          x="20"
          y="55"
          width="105"
          height="120"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="135"
          y="55"
          width="105"
          height="55"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="135"
          y="120"
          width="105"
          height="55"
          rx="6"
          fill="#a371f7"
          opacity=".08"
          stroke="#a371f7"
          strokeWidth=".5"
        />
        <rect
          x="30"
          y="68"
          width="40"
          height="4"
          rx="2"
          fill="#a371f7"
          opacity=".4"
        />
        <rect x="30" y="80" width="80" height="3" rx="2" fill="#30363d" />
        <rect x="30" y="88" width="65" height="3" rx="2" fill="#30363d" />
        <rect x="30" y="96" width="72" height="3" rx="2" fill="#30363d" />
        <text
          x="145"
          y="90"
          fill="#a371f7"
          fontSize="16"
          fontWeight="800"
          fontFamily="monospace"
        >
          $2M
        </text>
        <rect
          x="145"
          y="95"
          width="30"
          height="3"
          rx="2"
          fill="#a371f7"
          opacity=".3"
        />
      </svg>
    ),
  },
  {
    id: 4,
    featured: false,
    name: "TradeLink Africa",
    type: "SaaS",
    typeColor: "#58a6ff",
    typeBg: "rgba(88,166,255,.1)",
    desc: "B2B trade facilitation platform for African markets. Connecting buyers and suppliers with real-time pricing, logistics tracking, and invoice financing.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Mapbox", "AWS"],
    stats: [
      { val: "8 wks", key: "To MVP" },
      { val: "340+", key: "Traders" },
      { val: "Seed", key: "Funded" },
    ],
    outcome: "Seed funded · 340+ active traders",
    category: "SaaS",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <circle
          cx="130"
          cy="100"
          r="70"
          fill="none"
          stroke="#30363d"
          strokeWidth="30"
          opacity=".4"
        />
        <circle
          cx="130"
          cy="100"
          r="45"
          fill="none"
          stroke="#58a6ff"
          strokeWidth="1"
          opacity=".5"
          strokeDasharray="4 4"
        />
        <circle cx="130" cy="100" r="6" fill="#58a6ff" />
        {[
          [80, 65],
          [170, 85],
          [100, 140],
          [155, 130],
          [130, 55],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" fill="#58a6ff" opacity=".7" />
            <line
              x1="130"
              y1="100"
              x2={cx}
              y2={cy}
              stroke="#58a6ff"
              strokeWidth=".5"
              opacity=".3"
            />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: 5,
    featured: false,
    name: "PayEase Kenya",
    type: "MVP",
    typeColor: "#f0883e",
    typeBg: "rgba(240,136,62,.1)",
    desc: "Mobile money and payments API platform for Kenyan SMEs. Integrated M-Pesa, Airtel Money, and card payments into a single developer-friendly API. Shipped MVP in 5 weeks.",
    tags: ["Node.js", "React Native", "M-Pesa API", "Redis", "PostgreSQL"],
    stats: [
      { val: "5 wks", key: "MVP" },
      { val: "1M+", key: "Transactions" },
      { val: "API", key: "First" },
    ],
    outcome: "1M+ transactions processed",
    category: "MVP",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <rect
          x="80"
          y="20"
          width="100"
          height="160"
          rx="12"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect x="90" y="35" width="80" height="50" rx="6" fill="#0d1117" />
        <text
          x="130"
          y="67"
          fill="#f0883e"
          fontSize="18"
          fontWeight="800"
          fontFamily="monospace"
          textAnchor="middle"
        >
          KSh
        </text>
        <rect x="90" y="95" width="80" height="6" rx="3" fill="#30363d" />
        <rect x="90" y="107" width="60" height="6" rx="3" fill="#30363d" />
        <rect
          x="90"
          y="125"
          width="80"
          height="24"
          rx="5"
          fill="#f0883e"
          opacity=".8"
        />
        <text
          x="130"
          y="141"
          fill="#0d1117"
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
          textAnchor="middle"
        >
          PAY NOW
        </text>
      </svg>
    ),
  },
  {
    id: 6,
    featured: false,
    name: "Savannah Logistics",
    type: "Enterprise",
    typeColor: "#a371f7",
    typeBg: "rgba(163,113,247,.1)",
    desc: "Fleet management and last-mile delivery platform for East African logistics operators. Real-time GPS tracking, route optimisation, and driver performance analytics.",
    tags: ["React", "Go", "WebSockets", "Mapbox", "Kubernetes", "TimescaleDB"],
    stats: [
      { val: "500+", key: "Vehicles" },
      { val: "↓ 23%", key: "Fuel Cost" },
      { val: "Real-time", key: "Tracking" },
    ],
    outcome: "↓ 23% fuel cost · 500+ vehicles",
    category: "Enterprise",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <rect
          x="20"
          y="20"
          width="220"
          height="160"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        {/* Stylised map */}
        <rect x="30" y="30" width="200" height="140" rx="5" fill="#0d1117" />
        <path
          d="M50 100 Q100 60 150 90 Q180 110 210 80"
          fill="none"
          stroke="#a371f7"
          strokeWidth="2"
          opacity=".6"
          strokeDasharray="5 3"
        />
        {[
          [50, 100],
          [150, 90],
          [210, 80],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill={i === 0 ? "#3fb950" : i === 2 ? "#a371f7" : "#30363d"}
            stroke="#0d1117"
            strokeWidth="1"
          />
        ))}
        <rect
          x="155"
          y="60"
          width="50"
          height="14"
          rx="3"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth=".5"
        />
        <text
          x="180"
          y="71"
          fill="#a371f7"
          fontSize="7"
          fontWeight="700"
          fontFamily="monospace"
          textAnchor="middle"
        >
          ETA 14m
        </text>
      </svg>
    ),
  },
];

/* End of ProjectsPage Data */

// Kiru Tech Client Stories Data
export const testimonials = [
  {
    initials: "AO",
    bg: "#1a3a5c",
    name: "Amara Osei",
    role: "CEO, TradeLink Africa",
    body: "Kiru Tech didn't just write code — they thought about our product like co-founders. We launched in 8 weeks and our users love it.",
  },
  {
    initials: "JM",
    bg: "#2d1b4e",
    name: "James Muriuki",
    role: "CTO, PayEase Kenya",
    body: "The most transparent engineering team I've worked with. Daily updates, zero surprises, and the architecture they built scales beautifully.",
  },
  {
    initials: "SN",
    bg: "#0f2a1a",
    name: "Sofia Ndungu",
    role: "Founder, GreenStack Labs",
    body: "We came with a napkin sketch. Kiru Tech came back with a fully designed MVP that raised our seed round. Unreal team.",
  },
  {
    initials: "DK",
    bg: "#3a1a1a",
    name: "Daniel Kamau",
    role: "CTO, Lipa Later",
    body: "From day one they felt like part of our team. The quality of code, the communication, the speed — everything exceeded our expectations.",
  },
  {
    initials: "FO",
    bg: "#1a3a2c",
    name: "Fatima Omar",
    role: "CEO, Savannah Pay",
    body: "We'd tried two other agencies before Kiru Tech. The difference in product thinking and delivery speed was night and day.",
  },
];

// Kiru Tech FAQ Data
