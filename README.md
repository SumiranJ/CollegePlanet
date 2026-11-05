# CollegePlanet
CollegePlanet helps students organize and track their academic progress in one place.

## Job listings demo

Install the dependencies with `npm install`, then start the app with `npm run dev`.
Open [http://localhost:3000/dashboard/jobs](http://localhost:3000/dashboard/jobs) to
search and filter the sample listings. Select **View job** to open a listing's
details. Run `npm test -- --runInBand` to execute the tests.

Listings and the career profile are temporary in-memory demo data in
`lib/jobs.ts`. Employer posting persistence, live updates, student-specific
profile data, authentication enforcement on job routes, and employer chat
delivery still need backend integration. The job-details page has a local-only
chat demo; messages are not sent or saved. Saving a job is limited to the
current page session.
