export interface HeroContent {
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutContent {
  title: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phoneNumber: string;
  email: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  capabilities: Capability[];
  highlights: Highlight[];
  contact: ContactInfo;
}
