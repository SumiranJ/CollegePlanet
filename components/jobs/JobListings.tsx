"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  defaultJobFilters,
  demoJobs,
  demoStudentProfile,
  filterJobs,
  formatPostedDate,
  formatSalary,
  getJobMatchScore,
  sortJobsByMatch,
} from "@/lib/jobs";
import type { JobFilters } from "@/lib/jobs";
import type { JobSortOrder, JobWorkMode } from "@/types/job";
import styles from "./jobs.module.css";

const workModes: JobWorkMode[] = ["Remote", "Hybrid", "On-site"];

function MatchReasons({ jobId }: { jobId: string }) {
  const job = demoJobs.find((listing) => listing.id === jobId);

  if (!job) {
    return null;
  }

  const reasons = [
    job.interests.find((interest) =>
      demoStudentProfile.interests.includes(interest),
    ),
    job.strengths.find((strength) =>
      demoStudentProfile.strengths.includes(strength),
    ),
    demoStudentProfile.preferredWorkModes.includes(job.workMode)
      ? `${job.workMode}-friendly`
      : undefined,
  ].filter((reason): reason is string => Boolean(reason));

  return (
    <p className={styles.cardMatchReason}>
      Match signals: {reasons.join(" · ") || "Explore this role"}
    </p>
  );
}

export default function JobListings() {
  const [filters, setFilters] = useState<JobFilters>(defaultJobFilters);
  const [sortOrder, setSortOrder] = useState<JobSortOrder>("best-match");
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(new Set());

  const matchingJobs = useMemo(() => {
    const filtered = filterJobs(demoJobs, filters);

    if (sortOrder === "most-recent") {
      return [...filtered].sort(
        (first, second) => first.postedDaysAgo - second.postedDaysAgo,
      );
    }

    return sortJobsByMatch(filtered);
  }, [filters, sortOrder]);

  function updateFilter<Key extends keyof JobFilters>(
    key: Key,
    value: JobFilters[Key],
  ) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function toggleSavedJob(jobId: string) {
    setSavedJobIds((current) => {
      const updated = new Set(current);
      if (updated.has(jobId)) {
        updated.delete(jobId);
      } else {
        updated.add(jobId);
      }
      return updated;
    });
  }

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

      <div className={styles.content}>
        <section className={styles.intro} aria-labelledby="page-title">
          <p className={styles.eyebrow}>YOUR NEXT CHAPTER</p>
          <h1 id="page-title">Good work starts with a good fit.</h1>
          <p className={styles.introText}>
            Explore roles that connect what you enjoy, what you do well, and
            how you like to work.
          </p>
        </section>

        <section className={styles.compass} aria-labelledby="compass-title">
          <div className={styles.compassHeading}>
            <h2 id="compass-title">Your career compass</h2>
            <span>Based on your career survey</span>
            <span className={styles.demoBadge}>Demo profile</span>
          </div>
          <div className={styles.compassColumns}>
            <div className={styles.compassColumn}>
              <span className={styles.compassLabel}>What interests you</span>
              <div className={styles.chips}>
                {demoStudentProfile.interests.map((interest) => (
                  <span className={styles.chip} key={interest}>
                    {interest}
                  </span>
                ))}
              </div>
              <p>You&apos;re drawn to human-centered problems.</p>
            </div>
            <div className={styles.compassColumn}>
              <span className={styles.compassLabel}>Where you thrive</span>
              <div className={styles.chips}>
                {demoStudentProfile.strengths.slice(0, 2).map((strength) => (
                  <span className={styles.chip} key={strength}>
                    {strength}
                  </span>
                ))}
              </div>
              <p>
                Your {demoStudentProfile.major.toLowerCase()} background helps
                you understand people and ideas.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.layout}>
          <section className={styles.results} aria-labelledby="results-title">
            <div className={styles.resultsHeading}>
              <div>
                <h2 id="results-title">Your recommended roles</h2>
                <span className={styles.resultsCount}>
                  {matchingJobs.length} {matchingJobs.length === 1 ? "role" : "roles"}
                </span>
              </div>
              <span className={styles.demoNotice}>Sample listings</span>
            </div>

            <div className={styles.filters}>
              <label className={styles.searchBox}>
                <span className={styles.srOnly}>Search jobs</span>
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Search role, company, or keyword"
                  value={filters.query}
                  onChange={(event) => updateFilter("query", event.target.value)}
                />
              </label>
              <div className={styles.filterRow}>
                <label className={styles.selectLabel}>
                  <span className={styles.srOnly}>Work mode</span>
                  <select
                    value={filters.workMode}
                    onChange={(event) =>
                      updateFilter(
                        "workMode",
                        event.target.value as JobFilters["workMode"],
                      )
                    }
                  >
                    <option>Any work mode</option>
                    {workModes.map((mode) => (
                      <option key={mode}>{mode}</option>
                    ))}
                  </select>
                </label>
                <label className={styles.locationInput}>
                  <span className={styles.srOnly}>Location</span>
                  <input
                    placeholder="Location"
                    value={filters.location}
                    onChange={(event) =>
                      updateFilter("location", event.target.value)
                    }
                  />
                </label>
                <label className={styles.selectLabel}>
                  <span className={styles.srOnly}>Minimum salary</span>
                  <select
                    value={filters.minimumSalary}
                    onChange={(event) =>
                      updateFilter("minimumSalary", Number(event.target.value))
                    }
                  >
                    <option value={0}>Any salary</option>
                    <option value={50000}>$50k+</option>
                    <option value={70000}>$70k+</option>
                    <option value={90000}>$90k+</option>
                    <option value={110000}>$110k+</option>
                  </select>
                </label>
                <label className={styles.selectLabel}>
                  <span className={styles.srOnly}>Experience level</span>
                  <select
                    value={filters.experienceLevel}
                    onChange={(event) =>
                      updateFilter(
                        "experienceLevel",
                        event.target.value as JobFilters["experienceLevel"],
                      )
                    }
                  >
                    <option>Any experience</option>
                    <option>Entry level</option>
                    <option>Mid level</option>
                    <option>Senior level</option>
                  </select>
                </label>
                <button
                  className={styles.clearFilters}
                  type="button"
                  onClick={() => setFilters(defaultJobFilters)}
                  disabled={
                    filters.query === defaultJobFilters.query &&
                    filters.location === defaultJobFilters.location &&
                    filters.workMode === defaultJobFilters.workMode &&
                    filters.minimumSalary === defaultJobFilters.minimumSalary &&
                    filters.experienceLevel === defaultJobFilters.experienceLevel
                  }
                >
                  Clear filters
                </button>
              </div>
            </div>

            <div className={styles.listMeta}>
              <span>
                Showing {matchingJobs.length} of {demoJobs.length} sample roles
                aligned with your profile
              </span>
              <label className={styles.sortLabel}>
                Sort:
                <select
                  value={sortOrder}
                  onChange={(event) =>
                    setSortOrder(event.target.value as JobSortOrder)
                  }
                >
                  <option value="best-match">Best match</option>
                  <option value="most-recent">Most recent</option>
                </select>
              </label>
            </div>

            {matchingJobs.length === 0 ? (
              <div className={styles.emptyState} role="status">
                <h3>No roles match those filters</h3>
                <p>Try a different search or clear some filters.</p>
                <button
                  className={styles.secondaryButton}
                  type="button"
                  onClick={() => setFilters(defaultJobFilters)}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className={styles.jobList}>
                {matchingJobs.map((job) => {
                  const isSaved = savedJobIds.has(job.id);
                  const matchScore = getJobMatchScore(job);

                  return (
                    <article className={styles.jobCard} key={job.id}>
                      <div className={styles.cardTop}>
                        <div className={styles.companyMark} aria-hidden="true">
                          {job.companyInitials}
                        </div>
                        <div className={styles.jobHeading}>
                          <h3>{job.title}</h3>
                          <p>
                            {job.company} <span aria-hidden="true">·</span>{" "}
                            {job.industry}
                          </p>
                        </div>
                        <div
                          className={styles.matchScore}
                          aria-label={`${matchScore}% survey match`}
                        >
                          <strong>{matchScore}%</strong>
                          <span>SURVEY MATCH</span>
                        </div>
                      </div>

                      <div className={styles.jobMeta}>
                        <span>
                          {job.workMode} · {job.location}
                        </span>
                        <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
                        <span>{job.employmentType}</span>
                      </div>

                      <div className={styles.cardMatch}>
                        <strong>Why this fits your compass</strong>
                        <MatchReasons jobId={job.id} />
                        <p>{job.summary}</p>
                      </div>

                      <div className={styles.cardFooter}>
                        <span>{formatPostedDate(job.postedDaysAgo)}</span>
                        <div className={styles.cardActions}>
                          <button
                            className={styles.saveButton}
                            type="button"
                            aria-pressed={isSaved}
                            onClick={() => toggleSavedJob(job.id)}
                          >
                            {isSaved ? "Saved" : "Save job"}
                          </button>
                          <Link
                            className={styles.primaryButton}
                            href={`/dashboard/jobs/${job.id}`}
                          >
                            View job <span aria-hidden="true">↗</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>

          <aside className={styles.sidebar} aria-label="Career guidance">
            <section className={styles.directionCard}>
              <p className={styles.sidebarEyebrow}>A LITTLE DIRECTION</p>
              <h2>You don&apos;t need to have it all figured out.</h2>
              <p>
                Start with curiosity. A few small steps can make your next move
                feel clearer.
              </p>
              <ol className={styles.steps}>
                <li>
                  <strong>Build a shortlist</strong>
                  <span>Save 3 roles you&apos;d like to learn more about.</span>
                </li>
                <li>
                  <strong>Look beyond the title</strong>
                  <span>Compare the daily work with what energizes you.</span>
                </li>
                <li>
                  <strong>Connect the dots</strong>
                  <span>Choose one experience that shows your strengths.</span>
                </li>
              </ol>
              <p className={styles.savedCount}>
                {savedJobIds.size} {savedJobIds.size === 1 ? "role" : "roles"}{" "}
                saved in this session
              </p>
            </section>

            <section className={styles.matchCard}>
              <h2>What makes a match?</h2>
              <p>
                We compare each role&apos;s responsibilities and environment
                with the three parts of your survey.
              </p>
              <div className={styles.matchBar}>
                <span>Interests</span>
                <strong>40%</strong>
                <span className={styles.barTrack}>
                  <span style={{ width: "40%" }} />
                </span>
              </div>
              <div className={styles.matchBar}>
                <span>Strengths</span>
                <strong>35%</strong>
                <span className={styles.barTrack}>
                  <span style={{ width: "35%" }} />
                </span>
              </div>
              <div className={styles.matchBar}>
                <span>Work preferences</span>
                <strong>25%</strong>
                <span className={styles.barTrack}>
                  <span style={{ width: "25%" }} />
                </span>
              </div>
              <p className={styles.matchFootnote}>
                A match is a starting point, not a prediction of getting hired.
                Review the requirements, too.
              </p>
            </section>

            <section className={styles.guideCard}>
              <p className={styles.sidebarEyebrow}>CAREER GUIDE · 4 MIN READ</p>
              <h2>A new direction can start small.</h2>
              <p>
                Not sure a role is for you? Learn how informational chats can
                help.
              </p>
            </section>
          </aside>
        </div>
        <p className={styles.dataDisclaimer}>
          Demo listings and career-profile data are examples. Live employer
          postings and student-specific recommendations require backend
          integration.
        </p>
      </div>
    </main>
  );
}
