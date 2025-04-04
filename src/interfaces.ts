interface About {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  languages: string;
  country: string;
  description: string;
}

interface Education {
  title: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface TechnicalSkill {
  name: string;
  path: string;
  alt: string;
}

interface SoftSkill {
  name: string;
  description: string;
}

interface Course {
  alt: string;
  path: string;
  link?: string;
}

export type { About, Education, Experience, TechnicalSkill, SoftSkill, Course };
