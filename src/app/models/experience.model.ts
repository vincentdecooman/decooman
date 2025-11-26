export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  note?: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  url?: string;
  imageUrl?: string;
}

