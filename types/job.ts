export type JobWorkMode = "Remote" | "Hybrid" | "On-site";

export type JobExperienceLevel =
  | "Entry level"
  | "Mid level"
  | "Senior level";

export type JobSortOrder = "best-match" | "most-recent";

export interface Job {
  id: string;
  title: string;
  company: string;
  companyInitials: string;
  industry: string;
  location: string;
  workMode: JobWorkMode;
  salaryMin: number;
  salaryMax: number;
  employmentType: string;
  experienceLevel: JobExperienceLevel;
  postedDaysAgo: number;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  relevantMajors: string[];
  interests: string[];
  strengths: string[];
  workStyle: string;
}

export interface StudentCareerProfile {
  major: string;
  interests: string[];
  strengths: string[];
  preferredWorkModes: JobWorkMode[];
}
