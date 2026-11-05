import { notFound } from "next/navigation";
import JobDetails from "@/components/jobs/JobDetails";
import { getJobById } from "@/lib/jobs";

interface JobDetailsPageProps {
  params: Promise<{ jobId: string }>;
}

export default async function JobDetailsPage({
  params,
}: JobDetailsPageProps) {
  const { jobId } = await params;
  const job = getJobById(jobId);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
}
