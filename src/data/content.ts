import { SiteContent } from '@/types';

export const siteContent: SiteContent = {
  hero: {
    title: "VyomGarud",
    tagline: "Precision Autonomy for Mission-Critical Operations",
    ctaText: "Explore Capabilities",
    ctaLink: "#capabilities"
  },
  about: {
    title: "Mission-Driven Innovation",
    description: "VyomGarud delivers military-grade UAV systems engineered for the most demanding operational environments. Our advanced autonomous platforms combine precision navigation, real-time intelligence, and uncompromising reliability to support defense and commercial missions. With cutting-edge AI and robust engineering, we empower organizations to achieve mission success with confidence and control."
  },
  capabilities: [
    {
      id: "1",
      title: "Autonomous Navigation",
      description: "Advanced AI-powered flight systems with real-time obstacle avoidance, adaptive path planning, and GPS-denied operation capabilities for complex mission environments.",
      icon: "navigation"
    },
    {
      id: "2",
      title: "Surveillance & Reconnaissance",
      description: "High-resolution imaging systems with thermal and multispectral sensors, delivering actionable intelligence for tactical and strategic operations.",
      icon: "eye"
    },
    {
      id: "3",
      title: "Payload Integration",
      description: "Modular payload architecture supporting diverse mission requirements from cargo delivery to specialized sensor packages with hot-swap capabilities.",
      icon: "package"
    },
    {
      id: "4",
      title: "Secure Communications",
      description: "Military-grade encrypted data links with anti-jamming technology, ensuring reliable command and control in contested electromagnetic environments.",
      icon: "shield-check"
    }
  ],
  highlights: [
    {
      id: "1",
      title: "99.9% Reliability",
      description: "Mission-critical uptime for defense operations",
      icon: "shield"
    },
    {
      id: "2",
      title: "Precision Engineering",
      description: "Sub-meter accuracy in all flight conditions",
      icon: "target"
    },
    {
      id: "3",
      title: "Advanced Autonomy",
      description: "AI-driven decision making and adaptive control",
      icon: "cpu"
    }
  ],
  contact: {
    phoneNumber: "+91 8881444693",
    email: "contact@vyomgarud.com"
  }
};
