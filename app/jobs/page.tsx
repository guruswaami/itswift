import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { jobListings } from "@/data/site";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Browse current and archival roles at IT Shoulders, including ETL and data engineering opportunities."
};

export default function JobsPage() {
  return (
    <>
      <Breadcrumb
        description="The public site exposes a jobs archive. This version keeps that route and turns it into a cleaner careers page with room for expansion."
        pageName="Jobs"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {jobListings.map((job) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={job.title}>
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{job.team}</p>
                  <h2 className="text-3xl font-bold text-black">{job.title}</h2>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-gray-light px-4 py-2 text-sm text-body-color">{job.type}</span>
                  <span className="rounded-full bg-gray-light px-4 py-2 text-sm text-body-color">{job.location}</span>
                  <span className="rounded-full bg-gray-light px-4 py-2 text-sm text-body-color">{job.posted}</span>
                </div>
                <p className="mt-6 text-base leading-relaxed text-body-color">{job.summary}</p>
                <ul className="mt-6 space-y-3 text-base text-body-color">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
