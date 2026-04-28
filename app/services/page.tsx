import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionTitle } from "@/components/section-title";
import {
  aiApproachSteps,
  aiConsultingPoints,
  aiIndustrySolutions,
  aiProductDevelopmentPoints,
  aiWhyChooseUs,
  cloudServices,
  dataGovernancePoints,
  dataManagementServices,
  qaApproach,
  serviceCategories
} from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional and proactive IT support across data management, governance, cloud enablement, analytics, and QA."
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        description="Professional and proactive IT support across the delivery stack, organized around the Startup theme's section system."
        pageName="Services"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="The public Services page spans data, governance, cloud, analytics, digital transformation, and QA. This version groups that material into clearer consulting offers."
            title="Professional and proactive IT support across the delivery stack."
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
            {serviceCategories.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.title}>
                <h3 className="mb-4 text-xl font-bold text-black">{item.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="Unlock the full potential of Artificial Intelligence to transform your business. We help organizations design, build, and scale AI-powered solutions tailored to real-world challenges across industries."
            title="AI Consulting and Product Development"
          />
          <div className="mx-auto mb-12 max-w-[900px] text-center text-base leading-relaxed text-body-color">
            From strategy to deployment, we combine deep technical expertise with business understanding to deliver intelligent, scalable, and future-ready products.
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-black">AI Consulting</h3>
              <p className="mb-6 text-base leading-relaxed text-body-color">
                We guide you through your AI journey, from identifying opportunities to implementing production-ready solutions.
              </p>
              <ul className="space-y-3 text-base text-body-color">
                {aiConsultingPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-black">AI Product Development</h3>
              <p className="mb-6 text-base leading-relaxed text-body-color">
                We build end-to-end AI-powered products that deliver measurable value.
              </p>
              <ul className="space-y-3 text-base text-body-color">
                {aiProductDevelopmentPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="Industry-specific AI solutions aligned to practical operating needs."
            title="Industries We Serve"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {aiIndustrySolutions.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.title}>
                <h3 className="mb-4 text-xl font-bold text-black">{item.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="A straightforward delivery model for bringing AI into production."
            title="Our Approach"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
            {aiApproachSteps.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item}>
                <p className="text-base leading-relaxed text-body-color">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-6 text-2xl font-bold text-black">Why Choose Us</h3>
              <ul className="space-y-3 text-base text-body-color">
                {aiWhyChooseUs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-xs bg-gray-dark p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-white">Get Started</h3>
              <p className="mb-6 text-base leading-relaxed text-body-color-dark">
                Ready to bring AI into your business?
              </p>
              <p className="text-base leading-relaxed text-white">
                Let&apos;s build intelligent solutions that drive growth, efficiency, and innovation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            paragraph="Create stronger data foundations before chasing analytics outcomes."
            title="Data Management"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {dataManagementServices.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.title}>
                <h3 className="mb-4 text-2xl font-bold text-black">{item.title}</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">{item.summary}</p>
                <ul className="space-y-3 text-base text-body-color">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                mb="0px"
                paragraph="The public site emphasizes a data-first approach, stronger stewardship, lineage, and protection from privacy and compliance risk. This section reframes that into a practical consulting offer."
                title="Improve control, traceability, privacy, and confidence across enterprise data assets."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="rounded-xs bg-white p-8 shadow-three">
                <ul className="space-y-4 text-base leading-relaxed text-body-color">
                  {dataGovernancePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            paragraph="Scale infrastructure, reduce upfront cost, and migrate with less disruption."
            title="Cloud Enablement"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((item) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.title}>
                <h3 className="mb-4 text-xl font-bold text-black">{item.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="From release confidence to better decisions, the services stay outcome-oriented."
            title="QA and Analytics"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-black">Big Data and BI</h3>
              <p className="mb-6 text-base leading-relaxed text-body-color">
                IT Shoulders positions analytics as a way to convert data into faster and better decisions through consulting, development, visualization, testing, and reporting.
              </p>
              <ul className="space-y-3 text-base text-body-color">
                <li>BI consulting and warehouse strategy</li>
                <li>ETL pipelines and reporting environments</li>
                <li>Dashboards, data visualization, and business insights</li>
                <li>Validation, performance checks, and operational reporting</li>
              </ul>
            </article>
            <article className="rounded-xs bg-white p-8 shadow-three">
              <h3 className="mb-4 text-2xl font-bold text-black">Quality Assurance</h3>
              <p className="mb-6 text-base leading-relaxed text-body-color">
                The original QA offering is built around manual and automated testing, agile collaboration, and defect prevention through early and continuous validation.
              </p>
              <ul className="space-y-3 text-base text-body-color">
                {qaApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
