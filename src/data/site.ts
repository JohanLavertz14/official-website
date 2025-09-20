export const profile = {
  name: "Phakanawin (Vincent) Chaiweera",
  title: "Undergraduate Student | Chulalongkorn University",
  blurb:
    "I am a Computer Engineering student at Chulalongkorn University passionate about business and strategy. By combining analytical thinking and creativity, I strive to develop solutions that create real impact. My experiences in business analysis and case competitions have strengthened my strategic insight and adaptability. I aspire to bridge technology and business to drive sustainable growth and innovation.",
  location: "Bangkok, Thailand",
  email: "phakanawin@outlook.com",
  phone: "+66 82 471 6556",
  links: {
    instagram: "https://www.instagram.com/vincent_phkn/",
    linkedin: "https://www.linkedin.com/in/vincent-phakanawin/",
    resume: "/resume.pdf",
    portfolio: "#",
  },
  skills: {
    languages: ["Thai", "English", "Vietnamese", "Chinese", "Spanish"],
    business: [
      "Business Strategy", 
      "Marketing", 
      "Case Competitions", 
      "Business Analysis",
      "Project Management",
      "Finance",
    ],
    computer: [
      "Data Analysis", "Data Science", 
      "Python", "C++", "Java", "SQL", 
      "Fronend", "Backend", 
      "UX/UI Design"
    ],
    tools: [
      "Microsoft 365",
      "Google Workspace",
      "Figma",
      "Jest",
      "Cypress",
      "Tableau",
      "Power BI",
      "Excel"
    ],
  },
} as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Business Analyst Intern",
    company: "VMO Holdings",
    period: "June – Jul 2024",
    location: "Bangkok, Thailand",
    bullets: [
      "Collaborated with cross-functional teams (design, development, and consulting) to gather and document business requirements for IT outsourcing and digital solutions.",
      "Conducted research and competitive analysis to identify opportunities for process improvement and potential product enhancements.",
      "Supported the creation of functional specifications, wireframes, and process flows to align stakeholders on project scope and deliverables.",
      "Assisted in requirement elicitation sessions, client meetings, and preparation of professional deliverables such as reports, presentations, and user stories.",
      "Gained exposure to Agile methodologies (Scrum) and contributed to sprint planning, backlog refinement, and retrospective meetings.",
    ],
    stack: [],
  },
];

export const projects = [
  {
    name: "Top 20 Finalists of The Challenger 2025 by TUBC",
    desc: "Selected as one of the Top 20 finalists in The Challenger 2025 by TUBC, collaborating with TrueMoney Wallet on innovative strategies in fintech, retail, and digital solutions while working with cross-functional teams.",
    links: [
      { label: "TUBC Official Website", url: "https://tubc.page" }
    ],
    tags: ["Business", "Strategy", "Competition", "Finance", "Marketing"]
  },
  {
    name: "Top 30 Finalists of Big's Seed Talent Camp 2025",
    desc: "Selected as one of the Top 30 finalists in Big's Seed Talent Camp 2025, a hackathon organized by Big C, focusing on retail innovation, digital solutions, and strategic business development while collaborating with diverse teams.",
    links: [
      { label: "Big C Official Website", url: "https://www.bigc.co.th/" }
    ],
    tags: ["Hackathon", "Business", "Retail", "Innovation"]
  },
  {
    name: "CBS Financial Solution Challenge 2025",
    desc: "Participated in the CBS Financial Solution Challenge 2025, a collaboration between Chulalongkorn Finance Club and UOB, focusing on designing an organizational development tool to enhance financial consulting and training for Relationship Managers.",
    links: [
      { label: "CBS Official Account", url: "https://www.instagram.com/cufinclub_official/?hl=en" }
    ],
    tags: ["Business", "Finance", "Challenge", "UOB", "Innovation"]
  },
] as const;

export const education = [
  {
    school: "Chulalongkorn University",
    degree: "Bachelor of Engineering, Computer Engineering & Digital Technology (Candidate)",
    period: "2024 – Present",
    bullets: [
      "Pursuing core studies in programming, data structures, algorithms, digital systems, and computer networks.",
      "Gaining hands-on experience through projects and labs in software development, embedded systems, and digital technologies.",
      "Developing problem-solving, analytical, and teamwork skills to prepare for roles in technology and innovation.",
    ],
  },
  {
    school: "Ramkhamhaeng University",
    degree: "Bachelor of Laws (Candidate)",
    period: "2024 – Present",
    bullets: [
      "Studying foundational legal principles, including constitutional law, criminal law, contract law, and property law.",
      "Enhancing critical thinking, legal research, and analytical skills through case studies and moot court exercises.",
      "Preparing for a career in law with a focus on understanding the legal system and its application in various contexts.",
    ],
  }
] as const;

export const certs = [
  { title: "Introduction to Data Analytics", org: "ChulaMOOC", year: "2025" },
  { title: "Python for Data Science", org: "ChulaMOOC", year: "2025" },
  { title: "Google AI Essential", org: "Coursera", year: "2024" },
  { title: "Participant, 4th KIBO Robot Programming Challenge", org: "JAXA & NSTDA", year: "2023" },
  { title: "Top 20 National Applied Mathematics Olympiad Finalist", org: "NAT Program", year: "2022" },
];


export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];