// Site Configuration
export const SITE_CONFIG = {
  name: import.meta.env.SITE_NAME || "",
  title: import.meta.env.SITE_TITLE || "",
  description: import.meta.env.SITE_DESCRIPTION || "",
  url: import.meta.env.SITE_URL || "",

  // Contact
  email: import.meta.env.EMAIL || "",

  // Social Media
  social: {
    github: import.meta.env.GITHUB_URL || "",
    instagram: import.meta.env.INSTAGRAM_URL || "",
    linkedin: import.meta.env.LINKEDIN_URL || "",
    twitter: import.meta.env.TWITTER_URL || "",
    facebook: import.meta.env.FACEBOOK_URL || "",
  },

  // Profile
  tagline: import.meta.env.TAGLINE || "",
  location: import.meta.env.LOCATION || "",
  avatar: import.meta.env.AVATAR_URL || "",
  cv: import.meta.env.CV_URL || "#",

  // Theme
  theme: {
    primary: import.meta.env.THEME_PRIMARY || "#00fff0",
    secondary: import.meta.env.THEME_SECONDARY || "#ff00ff",
    background: import.meta.env.THEME_BACKGROUND || "#0a0f1c",
    text: import.meta.env.THEME_TEXT || "#e0e0e0",
  },

  // Features
  features: {
    blog: import.meta.env.ENABLE_BLOG !== "false",
    portfolio: import.meta.env.ENABLE_PORTFOLIO !== "false",
    contactForm: import.meta.env.ENABLE_CONTACT_FORM !== "false",
    particleEffects: import.meta.env.ENABLE_PARTICLE_EFFECTS !== "false",
  }
};

// Navigation Links - Dynamically filtered based on features
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  ...(SITE_CONFIG.features.portfolio ? [{ href: "/portfolio", label: "Portfolio" }] : []),
  ...(SITE_CONFIG.features.blog ? [{ href: "/blog", label: "Blog" }] : []),
  ...(SITE_CONFIG.features.contactForm ? [{ href: "/#contact", label: "Contact" }] : []),
];

// Skills Data
export const SKILLS = [
  { name: "React & Next.js", level: 90, category: "frontend" },
  { name: "Laravel & PHP", level: 85, category: "backend" },
  { name: "Blockchain Development", level: 80, category: "web3" },
  { name: "Cryptography", level: 70, category: "security" },
  { name: "Ethical Hacking", level: 75, category: "security" },
  { name: "Node.js & Express", level: 85, category: "backend" },
  { name: "Python & Django", level: 80, category: "backend" },
  { name: "Smart Contracts (Solidity)", level: 75, category: "web3" },
  { name: "PostgreSQL & MongoDB", level: 85, category: "database" },
  { name: "Docker & Kubernetes", level: 70, category: "devops" },
  { name: "TailwindCSS & UI/UX", level: 90, category: "frontend" },
  { name: "Security Auditing", level: 75, category: "security" },
];

// What I Do
export const SERVICES = [
  {
    icon: "code",
    title: "Full-Stack Development",
    description: "Building modern web applications with React, Next.js, Laravel, and Node.js. Creating scalable and maintainable solutions."
  },
  {
    icon: "shield",
    title: "Cryptography & Security",
    description: "Implementing encryption algorithms, secure authentication systems, and conducting security audits for web applications."
  },
  {
    icon: "terminal",
    title: "Ethical Hacking",
    description: "Penetration testing, vulnerability assessment, and security consulting to protect digital assets."
  },
  {
    icon: "cube",
    title: "Blockchain Solutions",
    description: "Developing smart contracts, DApps, and blockchain-based identity verification systems."
  }
];

// FAQ Data
export const FAQ_DATA = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Next.js, Laravel, Node.js, and blockchain development with Solidity. I also have expertise in cryptography and security."
  },
  {
    question: "Do you take freelance projects?",
    answer: "Yes! I'm available for freelance web development, blockchain projects, and security consulting. Feel free to reach out through the contact form."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. Small projects typically take 2-4 weeks, while larger applications may take 2-3 months. I'll provide a detailed timeline after discussing requirements."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Absolutely! I offer maintenance packages for ongoing support, updates, and improvements to ensure your application stays secure and up-to-date."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Yes! I can help debug, optimize, add features, or perform security audits on existing applications. I'm comfortable working with various tech stacks."
  },
  {
    question: "How do you ensure code quality and security?",
    answer: "I follow best practices including code reviews, automated testing, security scanning, and industry-standard security protocols. All projects undergo thorough testing before deployment."
  }
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp Inc",
    avatar: "/images/testimonial-1.svg",
    rating: 5,
    text: "Exceptional work on our blockchain infrastructure. The security audit was thorough and the implementation exceeded our expectations. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "CTO, FinanceHub",
    avatar: "/images/testimonial-2.svg",
    rating: 5,
    text: "Outstanding developer with deep expertise in cryptography and web3. Delivered our DeFi platform ahead of schedule with impeccable code quality."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, StartupXYZ",
    avatar: "/images/testimonial-3.svg",
    rating: 5,
    text: "Professional, reliable, and incredibly skilled. Transformed our vision into a scalable, secure application. Communication was excellent throughout the project."
  },
  {
    name: "David Kim",
    role: "Founder, CryptoVault",
    avatar: "/images/testimonial-4.svg",
    rating: 5,
    text: "Best developer we've worked with. Security-first approach and attention to detail made all the difference. Our platform is now rock solid."
  },
  {
    name: "Jennifer Lee",
    role: "Tech Lead, DataFlow Systems",
    avatar: "/images/testimonial-1.svg",
    rating: 5,
    text: "Impressive technical skills and problem-solving abilities. Helped us migrate to a more secure architecture with zero downtime. Highly professional!"
  },
  {
    name: "Robert Martinez",
    role: "Director, SecureNet",
    avatar: "/images/testimonial-2.svg",
    rating: 5,
    text: "Excellent cybersecurity expertise. Identified critical vulnerabilities and implemented robust solutions. Our system security has never been better."
  }
];
