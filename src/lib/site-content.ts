export const profile = {
  name: "Sabeena Kachary",
  role: "Cybersecurity & GRC | UI/UX | Tech",
  location: "India",
  bio: "I'm a technology student exploring the intersection of cybersecurity, GRC, UX/UI, and technology. I enjoy building practical security-focused projects and thoughtful digital experiences that solve real problems.",
  github: "https://github.com/Sabeena31",
  linkedin: "https://www.linkedin.com/in/sabeena-kachary-041366259/",
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
    live: "https://vehicle-service-management-system-rho.vercel.app/",
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
    live: "https://www.figma.com/design/pXqwo677YiMYNlkt16tARp/Medit?node-id=0-1&p=f&t=FtwurZ91D207sZXx-0",
    liveLabel: "View Figma design",
    tags: ["UI/UX Product Design", "Figma", "Mobile"],
  },
  {
    title: "Safar, Not Suffer — Solo Travel App",
    description:
      "A UI/UX and product design project focused on helping solo travelers plan and navigate their journeys more confidently.",
    live: "https://www.figma.com/design/1Xb9nHSIEmTtBih6Xu4E5u/SOLO-TRAVEL-APP-DESIGN?node-id=0-1&t=eXfTumgVC5XBvq4S-1",
    liveLabel: "View Figma design",
    tags: ["UI/UX Product Design", "Figma", "Mobile"],
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
    school: "Jain University, Bengaluru",
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
      "Risk Assessment",
      "Risk Register",
      "Security Controls & Policies",
      "Compliance & Governance",
      "Audit Documentation",
      "Risk Remediation",
      "Vulnerability Assessment",
      "Security Monitoring",
      "Log Analysis",
      "Network Scanning",
      "Traffic Analysis",
      "Networking & Security",
      "Security Reporting",
      "Nmap",
      "Wireshark",
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

export const certifications: { name: string; issuer: string; url?: string }[] = [
  {
    name: "Junior Cybersecurity Analyst",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/7c0cbea3-6c73-4e5b-a61e-5f72589196eb/public_url",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/a508d5cf49767fe9ae063ed9424619009aafa43257b1ddc5e63a9f55d7b95c3a?trk=share_certificate",
  },
  { name: "Network Architecture", issuer: "Coursera" },
  { name: "Networking Fundamentals", issuer: "Infosys Springboard" },
  {
    name: "UI/UX Training Course",
    issuer: "Internshala",
    url: "https://trainings.internshala.com/s/v/3059002/c632e37e",
  },
  {
    name: "Foundations of User Experience Design",
    issuer: "Coursera / Google",
    url: "https://www.coursera.org/account/accomplishments/records/6RRWHRRZR92L",
  },
];

export const inProgressCertifications = [{ name: "CompTIA Security+" }];
