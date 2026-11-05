import Image from "next/image";
import Link from "next/link";
import { formatPostedDate, formatSalary, getJobMatchScore } from "@/lib/jobs";
import type { Job } from "@/types/job";
import EmployerChat from "./EmployerChat";
import styles from "./jobs.module.css";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  const matchScore = getJobMatchScore(job);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/dashboard/jobs" aria-label="College Planet jobs home">
          <Image
            src="/White Main College Planet Logo.png"
            alt="College Planet"
            width={973}
            height={298}
          />
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard">My career</Link>
          <Link className={styles.activeNavLink} href="/dashboard/jobs">
            Find jobs
          </Link>
        </nav>
      </header>

      <div className={styles.detailPage}>
        <Link className={styles.backLink} href="/dashboard/jobs">
          <span aria-hidden="true">←</span> Back to recommended roles
        </Link>

        <div className={styles.detailLayout}>
          <article className={styles.detailCard}>
            <div className={styles.detailHeader}>
              <div className={styles.companyMark} aria-hidden="true">
                {job.companyInitials}
              </div>
              <div>
                <p className={styles.detailCompany}>{job.company}</p>
                <h1>{job.title}</h1>
                <p className={styles.detailIndustry}>{job.industry}</p>
              </div>
            </div>

            <div className={styles.detailMeta}>
              <span>{job.workMode} · {job.location}</span>
              <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
              <span>{job.employmentType}</span>
              <span>{job.experienceLevel}</span>
            </div>

            <p className={styles.postedDate}>
              {formatPostedDate(job.postedDaysAgo)}
            </p>

            <section className={styles.detailMatch}>
              <div>
                <p className={styles.sidebarEyebrow}>CAREER COMPASS MATCH</p>
                <h2>{matchScore}% match to your profile</h2>
              </div>
              <p>
                This is a starting point based on a sample profile. Read the
                role requirements and decide whether the work interests you.
              </p>
            </section>

            <section className={styles.detailSection}>
              <h2>About the role</h2>
              <p>{job.description}</p>
              <p>{job.summary}</p>
            </section>

            <section className={styles.detailSection}>
              <h2>Team environment</h2>
              <p>{job.workStyle}</p>
            </section>

            <section className={styles.detailSection}>
              <h2>What you&apos;ll do</h2>
              <ul>
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </section>

            <section className={styles.detailSection}>
              <h2>What you&apos;ll bring</h2>
              <ul>
                {job.qualifications.map((qualification) => (
                  <li key={qualification}>{qualification}</li>
                ))}
              </ul>
            </section>

            <section className={styles.detailSection}>
              <h2>Benefits</h2>
              <ul>
                {job.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className={styles.contactCard}>
            <p className={styles.sidebarEyebrow}>INTERESTED IN THIS ROLE?</p>
            <h2>Connect with {job.company}</h2>
            <p>
              Learn more about the opportunity and start a conversation with
              the organization.
            </p>
            <EmployerChat company={job.company} />
            <p className={styles.integrationNote}>
              Connect a messaging service and persistent conversations before
              demo messages can be delivered to an employer.
            </p>
            <Link className={styles.secondaryButton} href="/dashboard/jobs">
              Explore more roles
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
