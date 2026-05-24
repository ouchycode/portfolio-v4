export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  link?: string;
  repo?: string;
}

export interface CertData {
  id: string;
  title: string;
  issuer: string;
  year: string;
  pdf: string;
}

export interface TimelineData {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type?: string;
}

export interface ExperienceData {
  id: string;
  type: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  details: string[];
  skills: string[];
}
