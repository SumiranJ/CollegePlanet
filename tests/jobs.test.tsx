import { fireEvent, render, screen, within } from "@testing-library/react";
import JobDetails from "@/components/jobs/JobDetails";
import JobListings from "@/components/jobs/JobListings";
import {
  demoJobs,
  filterJobs,
  getJobById,
  getJobMatchScore,
} from "@/lib/jobs";

describe("job listings", () => {
  it("shows sample roles and their match scores", () => {
    render(<JobListings />);

    expect(
      screen.getByRole("heading", { name: "Your recommended roles" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "User Researcher" }),
    ).toBeInTheDocument();
    const userResearcherCard = screen
      .getByRole("heading", { name: "User Researcher" })
      .closest("article");
    if (!userResearcherCard) {
      throw new Error("Expected the User Researcher listing card.");
    }

    expect(
      within(userResearcherCard).getByText("93%", {
        exact: true,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Sample listings/)).toBeInTheDocument();
  });

  it("filters roles by query, work mode, location, salary, and experience", () => {
    const queryResults = filterJobs(demoJobs, {
      query: "researcher",
      workMode: "Any work mode",
      location: "",
      minimumSalary: 0,
      experienceLevel: "Any experience",
    });
    expect(queryResults.map((job) => job.id)).toEqual([
      "user-researcher-bloom-health",
    ]);

    const filteredResults = filterJobs(demoJobs, {
      query: "",
      workMode: "Hybrid",
      location: "Austin",
      minimumSalary: 80000,
      experienceLevel: "Entry level",
    });
    expect(filteredResults.map((job) => job.id)).toEqual([
      "customer-insights-analyst-common-ground",
      "program-evaluation-analyst-civic-futures",
    ]);
  });

  it("updates visible roles and clears filters in the listings interface", () => {
    render(<JobListings />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Search jobs" }), {
      target: { value: "Bloom Health" },
    });
    expect(
      screen.getByRole("heading", { name: "User Researcher" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Customer Insights Analyst" }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(
      screen.getByRole("heading", { name: "Customer Insights Analyst" }),
    ).toBeInTheDocument();
  });

  it("shows a clear empty state when no roles match", () => {
    render(<JobListings />);
    fireEvent.change(screen.getByRole("searchbox", { name: "Search jobs" }), {
      target: { value: "marine biologist" },
    });

    expect(
      screen.getByRole("heading", { name: "No roles match those filters" }),
    ).toBeInTheDocument();
  });

  it("supports saving and unsaving a role during the session", () => {
    render(<JobListings />);
    const card = screen
      .getByRole("heading", { name: "User Researcher" })
      .closest("article");

    if (!card) {
      throw new Error("Expected the User Researcher listing card.");
    }

    const saveButton = within(card).getByRole("button", { name: "Save job" });
    fireEvent.click(saveButton);
    expect(saveButton).toHaveAttribute("aria-pressed", "true");
    expect(
      within(card).getByRole("button", { name: "Saved" }),
    ).toBeInTheDocument();

    fireEvent.click(within(card).getByRole("button", { name: "Saved" }));
    expect(
      within(card).getByRole("button", { name: "Save job" }),
    ).toHaveAttribute("aria-pressed", "false");
  });

  it("provides job details for a known role and a sensible match score", () => {
    const job = getJobById("user-researcher-bloom-health");
    expect(job?.responsibilities.length).toBeGreaterThan(0);
    expect(job ? getJobMatchScore(job) : 0).toBe(93);
    expect(getJobById("missing-job")).toBeUndefined();
  });

  it("renders role details and provides an explicitly local demo chat", () => {
    const job = getJobById("user-researcher-bloom-health");
    if (!job) {
      throw new Error("Expected the sample User Researcher role.");
    }

    render(<JobDetails job={job} />);

    expect(
      screen.getByRole("heading", { name: "About the role" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Plan and conduct interviews/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Message employer" }),
    ).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(screen.getByRole("button", { name: "Message employer" }));
    expect(
      screen.getByRole("region", { name: "Chat with Bloom Health" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/messages stay on this page and are not delivered/),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Your message"), {
      target: { value: "Could you share more about the team?" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send demo message" }));
    expect(
      screen.getByText(/Could you share more about the team/),
    ).toBeInTheDocument();
  });
});
