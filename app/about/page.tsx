import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionTitle } from "@/components/section-title";
import { aboutFacts, companyStats, coreValues, footprintStats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about IT Shoulders, founded in 2007, with consulting and delivery support across the US and India."
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        description="IT Shoulders is a long-running consulting and delivery partner focused on helping clients get more from their investments across data, cloud, CRM, web applications, and QA."
        pageName="About"
      />

      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  mb="28px"
                  paragraph="Since 2007, the company has positioned itself as a practical technology partner that combines implementation work with ongoing support. The original copy emphasizes teamwork, learning, adaptability, and careful testing before delivery."
                  title="A consulting team shaped by delivery discipline and client accountability."
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {aboutFacts.map((fact) => (
                    <article className="rounded-xs bg-gray-light p-5" key={fact.label}>
                      <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-body-color">{fact.label}</span>
                      <strong className="text-lg text-black">{fact.value}</strong>
                    </article>
                  ))}
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="rounded-xs bg-white p-8 shadow-three">
                  <h3 className="mb-6 text-2xl font-bold text-black">Core Values</h3>
                  <div className="flex flex-wrap gap-3">
                    {coreValues.map((value) => (
                      <span className="rounded-full border border-stroke-stroke px-4 py-2 text-sm font-medium text-body-color" key={value}>
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="The original About page is values-heavy. This keeps the message but turns it into more usable blocks."
            title="Mission and Vision"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-black">Mission</h3>
              <p className="text-base leading-relaxed text-body-color">
                Provide outstanding IT services that help clients reach the peak of their business efforts through dependable delivery and practical technical support.
              </p>
            </article>
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-black">Vision</h3>
              <p className="text-base leading-relaxed text-body-color">
                Become an admirable and reliable company for both employees and customers by combining technical competence with long-term trust.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle center paragraph="Global support structure with a small-team operating model." title="Our Footprints" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {footprintStats.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.label}>
                <strong className="mb-3 block text-4xl font-bold text-black">{item.value}</strong>
                <span className="text-base text-body-color">{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle center paragraph="Quick facts from the current public company profile." title="Quick Facts" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.label}>
                <span className="mb-3 block text-sm uppercase tracking-[0.2em] text-body-color">{item.label}</span>
                <strong className="text-xl font-bold text-black">{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
