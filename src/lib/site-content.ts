export const profile = {
  name: "Sabeena Kachary",
  role: "Cybersecurity & GRC | UI/UX | Tech",
  location: "India",
  bio: "I'm a technology student exploring the intersection of cybersecurity, GRC, UX/UI, and technology. I enjoy building practical security-focused projects and thoughtful digital experiences that solve real problems.",
  github: "https://github.com/Sabeena31",
};

export type Project = {
  title: string;
  description: string;
  live?: string;
  liveLabel?: string;
  github?: string;
  note?: string;
  tags: string[];
};

export const techProjects: Project[] = [
  {
    title: "Security Event Monitoring & Threat Detection Platform",
    description:
      "A Python and Streamlit-based security monitoring platform that analyzes security events and uses explainable rule-based detection to identify suspicious activity.",
    live: "https://security-monitor.streamlit.app",
    liveLabel: "Live app",
    github: "https://github.com/Sabeena31/security-event-monitoring-platform",
    tags: ["Python", "Streamlit", "Threat detection"],
  },
  {
    title: "Vehicle Service Management System",
    description:
      "A group academic web application for vehicle servicing. My contribution focused on frontend development and UI implementation.",
    live: "https://vehicle-service-management-system-rhov.vercel.app",
    liveLabel: "Live site",
    github: "https://github.com/Sabeena31/vehicle-service-management-system",
    tags: ["Frontend", "Web app", "Group project"],
  },
];

export const designProjects: Project[] = [
  {
    title: "Medit — Meditation & Wellness App",
    description:
      "A UI/UX design project focused on creating a calm and accessible digital experience for meditation and wellness.",
    note: "Figma case study link coming soon",
    tags: ["UI/UX", "Mobile", "Figma"],
  },
  {
    title: "Safar, Not Suffer — Solo Travel App",
    description:
      "A UI/UX and product design project focused on helping solo travelers plan and navigate their journeys more confidently.",
    note: "Figma case study link coming soon",
    tags: ["Product design", "UI/UX", "Figma"],
  },
];

export const focusAreas = [
  {
    index: "01",
    title: "Cybersecurity",
    body: "Security event analysis, rule-based threat detection, and building tools that make suspicious activity explainable rather than opaque.",
  },
  {
    index: "02",
    title: "Governance, Risk & Compliance",
    body: "Studying how policy, risk and control frameworks translate into decisions teams can actually act on.",
  },
  {
    index: "03",
    title: "UI/UX & Product Design",
    body: "Interface, product and visual design — calm layouts, clear hierarchy, and flows designed around real user context.",
  },
];

export const experience = [
  {
    index: "01",
    role: "Cyber Security Intern",
    org: "ApexPlanet Software Pvt. Ltd.",
    body: "Worked on practical security tasks including vulnerability assessment, network scanning and traffic analysis, documenting findings in clear, actionable security reports.",
  },
  {
    index: "02",
    role: "Web UI/UX Engineer",
    org: "Redalis",
    body: "Designed and built responsive web interfaces, translating wireframes and prototypes into clean, usable layouts across screen sizes.",
  },
];

export const education = [
  {
    degree: "MCA — Information Security & Management Services",
    school: "JAIN University, Bengaluru",
    period: "2025 — 2027",
    result: "SGPA 8.6",
  },
  {
    degree: "BCA — General",
    school: "Kristu Jayanti University, Bengaluru",
    period: "2022 — 2025",
    result: "CGPA 8.36",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Cybersecurity & GRC",
    items: [
      "Vulnerability Assessment",
      "Network Scanning",
      "Traffic Analysis",
      "Networking & Security",
      "Risk Assessment",
      "Security Reporting",
      "Wireshark",
      "Nmap",
    ],
  },
  {
    index: "02",
    title: "Tech / Development",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    index: "03",
    title: "UI/UX & Design",
    items: [
      "Figma",
      "Framer",
      "Wireframing",
      "Prototyping",
      "Responsive UI Design",
      "UI/UX Design",
    ],
  },
];

export const certifications = [
  { name: "Junior Cybersecurity Analyst", issuer: "Cisco" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "LinkedIn Learning" },
  { name: "Network Architecture", issuer: "Coursera" },
  { name: "Networking Fundamentals", issuer: "Infosys Springboard" },
  { name: "UI/UX Training Course", issuer: "Internshala" },
  { name: "Foundations of User Experience Design", issuer: "Coursera / Google" },
];

export const inProgressCertifications = [{ name: "CompTIA Security+" }];
