export type Language = 'en' | 'ar';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  solutions: string[];
  process: string[];
  sectors: string[];
  iconName: string;
}

export interface ProjectCategory {
  title: string;
  items: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Partner {
  name: string;
  logoPlaceholder: string; // URL
}

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Stat[];
  };
  about: {
    title: string;
    description: string;
    specializations: string[];
    valuesTitle: string;
    values: string[];
    teamTitle: string;
    teamText: string;
  };
  visionMission: {
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
  };
  services: {
    title: string;
    items: ServiceDetail[];
    learnMore: string;
    close: string;
  };
  gallery: {
    title: string;
    description: string;
    items: GalleryItem[];
  };
  projects: {
    title: string;
    categories: ProjectCategory[];
  };
  partners: {
    title: string;
    description: string;
  };
  whyUs: {
    title: string;
    features: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  nav: {
    links: NavLink[];
  };
  footer: {
    rights: string;
  };
}