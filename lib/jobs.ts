import type {
  Job,
  JobExperienceLevel,
  JobWorkMode,
  StudentCareerProfile,
} from "@/types/job";

export const demoStudentProfile: StudentCareerProfile = {
  major: "Psychology",
  interests: ["Understanding people", "Meaningful impact"],
  strengths: ["Research", "Clear communication", "Analytical thinking"],
  preferredWorkModes: ["Remote", "Hybrid"],
};

export const demoJobs: Job[] = [
  {
    id: "user-researcher-bloom-health",
    title: "User Researcher",
    company: "Bloom Health",
    companyInitials: "BH",
    industry: "Health technology",
    location: "United States",
    workMode: "Remote",
    salaryMin: 95000,
    salaryMax: 120000,
    employmentType: "Full-time",
    experienceLevel: "Mid level",
    postedDaysAgo: 2,
    summary:
      "Help a collaborative product team understand patient needs and improve the digital care experience.",
    description:
      "Bloom Health is building more thoughtful digital experiences for patients and care teams. As a User Researcher, you will bring the voice of the people who use our products into decisions across the product lifecycle.",
    responsibilities: [
      "Plan and conduct interviews, usability studies, and other qualitative research.",
      "Turn research findings into clear recommendations for product and design teams.",
      "Partner with researchers, clinicians, designers, and engineers.",
    ],
    qualifications: [
      "Experience with qualitative research methods and participant interviews.",
      "Strong written and verbal communication skills.",
      "Interest in health, psychology, or human-centered product design.",
    ],
    benefits: ["Medical, dental, and vision coverage", "Flexible remote work"],
    relevantMajors: ["Psychology", "Human-Computer Interaction"],
    interests: ["Understanding people", "Meaningful impact"],
    strengths: ["Research", "Clear communication"],
    workStyle: "Remote-friendly, collaborative product team",
  },
  {
    id: "customer-insights-analyst-common-ground",
    title: "Customer Insights Analyst",
    company: "Common Ground",
    companyInitials: "CG",
    industry: "Sustainable retail",
    location: "Austin, TX",
    workMode: "Hybrid",
    salaryMin: 85000,
    salaryMax: 110000,
    employmentType: "Full-time",
    experienceLevel: "Entry level",
    postedDaysAgo: 1,
    summary:
      "Combine customer research and data to make a positive difference in a purpose-led company.",
    description:
      "Common Ground helps people make more sustainable choices. The Customer Insights team connects what customers say with what the data shows, helping teams build a better experience.",
    responsibilities: [
      "Analyze customer feedback and identify recurring themes.",
      "Share research and analysis with partners across the organization.",
      "Help teams understand how customers experience new initiatives.",
    ],
    qualifications: [
      "Curiosity about customer behavior and decision-making.",
      "Comfort working with research findings or data.",
      "Clear communication and attention to detail.",
    ],
    benefits: ["Learning and development budget", "Hybrid work schedule"],
    relevantMajors: ["Psychology", "Business", "Sociology"],
    interests: ["Understanding people", "Meaningful impact"],
    strengths: ["Analytical thinking", "Clear communication"],
    workStyle: "Small team, with two office days per week",
  },
  {
    id: "learning-experience-designer-brightside",
    title: "Learning Experience Designer",
    company: "Brightside Learning",
    companyInitials: "BL",
    industry: "Education technology",
    location: "United States",
    workMode: "Remote",
    salaryMin: 80000,
    salaryMax: 115000,
    employmentType: "Full-time",
    experienceLevel: "Entry level",
    postedDaysAgo: 3,
    summary:
      "Shape engaging learning experiences that help more people reach their goals.",
    description:
      "Brightside Learning creates digital tools for educators and learners. This role brings together learning science, content, and product design to make online learning clearer and more engaging.",
    responsibilities: [
      "Design and evaluate learning activities with educators and learners.",
      "Translate learning goals into clear, accessible digital experiences.",
      "Use feedback and research to improve existing learning materials.",
    ],
    qualifications: [
      "Interest in learning science, education, or instructional design.",
      "Strong writing and organization skills.",
      "Willingness to learn from feedback and iterate on ideas.",
    ],
    benefits: ["Professional learning stipend", "Remote-first team"],
    relevantMajors: ["Psychology", "Education", "Instructional Design"],
    interests: ["Meaningful impact", "Understanding people"],
    strengths: ["Clear communication", "Research"],
    workStyle: "Remote-first, collaborative team",
  },
  {
    id: "program-evaluation-analyst-civic-futures",
    title: "Program Evaluation Analyst",
    company: "Civic Futures",
    companyInitials: "CF",
    industry: "Social impact",
    location: "Austin, TX",
    workMode: "Hybrid",
    salaryMin: 80000,
    salaryMax: 105000,
    employmentType: "Full-time",
    experienceLevel: "Entry level",
    postedDaysAgo: 4,
    summary:
      "Use research and evaluation to understand how community programs support people.",
    description:
      "Civic Futures works with community organizations to learn what is working and where programs can do more. You will help collect and interpret evidence that supports practical improvements.",
    responsibilities: [
      "Support evaluation plans for community programs.",
      "Organize findings from interviews, surveys, and program data.",
      "Present clear takeaways to nonprofit and community partners.",
    ],
    qualifications: [
      "Interest in social science research or community programs.",
      "Strong analytical and communication skills.",
      "Care for thoughtful, responsible use of data.",
    ],
    benefits: ["Community volunteer days", "Hybrid work schedule"],
    relevantMajors: ["Psychology", "Sociology", "Public Health"],
    interests: ["Meaningful impact"],
    strengths: ["Research", "Analytical thinking"],
    workStyle: "Hybrid, partner-facing team",
  },
  {
    id: "people-operations-coordinator-northstar",
    title: "People Operations Coordinator",
    company: "Northstar Labs",
    companyInitials: "NL",
    industry: "Technology",
    location: "Austin, TX",
    workMode: "On-site",
    salaryMin: 58000,
    salaryMax: 72000,
    employmentType: "Full-time",
    experienceLevel: "Entry level",
    postedDaysAgo: 5,
    summary:
      "Help create a welcoming, organized employee experience at a growing technology company.",
    description:
      "Northstar Labs is growing its people team and is looking for a thoughtful coordinator to support recruiting, onboarding, and day-to-day employee programs.",
    responsibilities: [
      "Coordinate interviews and communicate with candidates.",
      "Support onboarding and employee events.",
      "Keep people-program resources accurate and organized.",
    ],
    qualifications: [
      "Strong organization and interpersonal skills.",
      "Interest in workplace culture and employee experience.",
      "Comfort handling details with care and discretion.",
    ],
    benefits: ["Health coverage", "Annual professional development allowance"],
    relevantMajors: ["Psychology", "Human Resources", "Business"],
    interests: ["Understanding people"],
    strengths: ["Clear communication"],
    workStyle: "On-site, people-focused team",
  },
  {
    id: "research-assistant-wellbeing-lab",
    title: "Research Assistant",
    company: "Wellbeing Lab",
    companyInitials: "WL",
    industry: "Behavioral research",
    location: "Austin, TX",
    workMode: "Hybrid",
    salaryMin: 52000,
    salaryMax: 65000,
    employmentType: "Full-time",
    experienceLevel: "Entry level",
    postedDaysAgo: 6,
    summary:
      "Contribute to behavioral research focused on improving everyday wellbeing.",
    description:
      "Wellbeing Lab partners with researchers and community groups to study practical ways of supporting mental health. The research assistant helps the team run organized, participant-centered studies.",
    responsibilities: [
      "Assist with study coordination and participant communication.",
      "Maintain accurate research records and study materials.",
      "Help summarize findings for internal and community partners.",
    ],
    qualifications: [
      "Interest in psychology or behavioral research.",
      "Careful, responsible handling of participant information.",
      "Strong attention to detail and follow-through.",
    ],
    benefits: ["Mentorship from research staff", "Hybrid work schedule"],
    relevantMajors: ["Psychology", "Public Health"],
    interests: ["Understanding people", "Meaningful impact"],
    strengths: ["Research", "Analytical thinking"],
    workStyle: "Hybrid, research-focused team",
  },
];

export interface JobFilters {
  query: string;
  workMode: JobWorkMode | "Any work mode";
  location: string;
  minimumSalary: number;
  experienceLevel: JobExperienceLevel | "Any experience";
}

export const defaultJobFilters: JobFilters = {
  query: "",
  workMode: "Any work mode",
  location: "",
  minimumSalary: 0,
  experienceLevel: "Any experience",
};

export function getJobMatchScore(
  job: Job,
  profile: StudentCareerProfile = demoStudentProfile,
): number {
  const majorMatches = job.relevantMajors.some(
    (major) => major.toLowerCase() === profile.major.toLowerCase(),
  );
  const interestMatches = job.interests.filter((interest) =>
    profile.interests.includes(interest),
  ).length;
  const strengthMatches = job.strengths.filter((strength) =>
    profile.strengths.includes(strength),
  ).length;
  const workModeMatches = profile.preferredWorkModes.includes(job.workMode);

  return Math.min(
    98,
    60 +
      (majorMatches ? 12 : 0) +
      interestMatches * 5 +
      strengthMatches * 3 +
      (workModeMatches ? 5 : 0),
  );
}

export function filterJobs(
  jobs: Job[],
  filters: JobFilters,
): Job[] {
  const query = filters.query.trim().toLowerCase();
  const location = filters.location.trim().toLowerCase();

  return jobs.filter((job) => {
    const searchableText = [
      job.title,
      job.company,
      job.industry,
      job.location,
      job.workMode,
      job.summary,
      job.description,
      ...job.responsibilities,
      ...job.qualifications,
      ...job.benefits,
      ...job.relevantMajors,
      ...job.interests,
      ...job.strengths,
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!query || searchableText.includes(query)) &&
      (!location || job.location.toLowerCase().includes(location)) &&
      (filters.workMode === "Any work mode" ||
        job.workMode === filters.workMode) &&
      job.salaryMax >= filters.minimumSalary &&
      (filters.experienceLevel === "Any experience" ||
        job.experienceLevel === filters.experienceLevel)
    );
  });
}

export function sortJobsByMatch(jobs: Job[]): Job[] {
  return [...jobs].sort(
    (first, second) =>
      getJobMatchScore(second) - getJobMatchScore(first) ||
      first.postedDaysAgo - second.postedDaysAgo,
  );
}

export function getJobById(jobId: string): Job | undefined {
  return demoJobs.find((job) => job.id === jobId);
}

export function formatSalary(minimum: number, maximum: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 0,
  });

  return `$${formatter.format(minimum)}–$${formatter.format(maximum)} / year`;
}

export function formatPostedDate(daysAgo: number): string {
  if (daysAgo === 0) {
    return "Posted today";
  }

  return `Posted ${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
}
