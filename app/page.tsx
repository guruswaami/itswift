import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import {
  aiDeliveryFocus,
  aiHomeHighlights,
  aiPipelineStages,
  companyStats,
  contactCards,
  homeReasons,
  industries,
  processSteps,
  serviceHighlights,
  technologyTags
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12">
              <div className="mx-auto max-w-[720px] lg:mx-0">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  AI Consulting. Product Development. Intelligent Systems.
                </span>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl md:leading-tight">
                  AI consulting and product development for teams that need real systems, not demos.
                </h1>
                <p className="mb-12 text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                  We design and ship intelligent RAG pipelines, A2A agent workflows, and MCP integrations that connect your data, tools, and users into usable products.
                </p>
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80" href="/contact">
                    Discuss an AI Project
                  </Link>
                  <Link className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90" href="/services">
                    Explore AI Services
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  {technologyTags.map((item) => (
                    <span className="rounded-full border border-stroke-stroke bg-white px-4 py-2 text-sm font-medium text-body-color shadow-one" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="relative mx-auto mt-12 max-w-[500px] lg:mt-0">
                <div className="rounded-xs bg-white p-8 shadow-three">
                  <SectionTitle mb="36px" paragraph="A practical AI delivery stack that turns strategy into production workflows." title="Delivery Snapshot" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {aiHomeHighlights.map((service) => (
                      <article className="rounded-xs border border-stroke-stroke bg-gray-light px-5 py-4" key={service.title}>
                        <h3 className="mb-2 text-base font-semibold text-black">{service.title}</h3>
                        <p className="text-sm leading-relaxed text-body-color">{service.summary}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg fill="none" height="556" viewBox="0 0 450 556" width="450" xmlns="http://www.w3.org/2000/svg">
            <circle cx="277" cy="63" fill="url(#paint0_home)" r="225" />
            <circle cx="325.486" cy="302.87" fill="url(#paint1_home)" r="180" transform="rotate(-37.6852 325.486 302.87)" />
            <defs>
              <linearGradient id="paint0_home" x1="-54.5003" x2="222" y1="-178" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_home" x1="226.775" x2="292.157" y1="-66.1548" y2="351.421" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="We pair AI consulting with product delivery so the system can move from a useful idea to something your team actually uses."
            title="AI Consulting & Product Development"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {aiHomeHighlights.map((item, index) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={item.title}>
                <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 text-xl font-bold text-black">{item.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-xs bg-white p-8 shadow-three">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-black">What this looks like in practice</h3>
                <p className="text-base leading-relaxed text-body-color">
                  We start with a business case, then design the retrieval layer, agent orchestration, and tool connections that make the product reliable enough for daily use.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {aiDeliveryFocus.map((item) => (
                  <div className="rounded-xs border border-stroke-stroke bg-gray-light px-4 py-3 text-sm font-medium text-black" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="Intelligent RAG needs more than retrieval. The flow below keeps knowledge, prompts, tools, and evaluation tied together."
            title="Intelligent RAG pipeline built for grounded answers"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {aiPipelineStages.map((step, index) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={step.title}>
                <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 text-xl font-bold text-black">{step.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{step.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-xs border border-stroke-stroke bg-gray-light px-6 py-5">
              <h3 className="mb-2 text-lg font-semibold text-black">A2A coordination</h3>
              <p className="text-sm leading-relaxed text-body-color">
                Split planning, research, verification, and action across specialized agents with clear handoffs.
              </p>
            </article>
            <article className="rounded-xs border border-stroke-stroke bg-gray-light px-6 py-5">
              <h3 className="mb-2 text-lg font-semibold text-black">MCP integration</h3>
              <p className="text-sm leading-relaxed text-body-color">
                Connect models to tools, data, and workflows through a consistent protocol instead of brittle one-off integrations.
              </p>
            </article>
            <article className="rounded-xs border border-stroke-stroke bg-gray-light px-6 py-5">
              <h3 className="mb-2 text-lg font-semibold text-black">Production readiness</h3>
              <p className="text-sm leading-relaxed text-body-color">
                Add evaluation, observability, and guardrails so the system remains useful after the first launch.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-10">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {companyStats.slice(0, 3).map((stat) => (
              <div className="rounded-xs border border-stroke-stroke bg-white px-5 py-4 shadow-one" key={stat.label}>
                <div className="text-xs uppercase tracking-[0.2em] text-body-color">{stat.label}</div>
                <div className="mt-2 text-lg font-semibold text-black">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            center
            paragraph="The original site emphasizes experience, agility, customer focus, and quality. This section keeps those themes but presents them with the Startup template's structure."
            title="Data-driven companies choose IT Shoulders to move faster with less friction."
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {homeReasons.map((reason, index) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={reason.title}>
                <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 text-xl font-bold text-black">{reason.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{reason.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  mb="32px"
                  paragraph="The current site positions IT Shoulders as a cross-industry partner. This redesign keeps that range while making the business outcomes more explicit: timely delivery, revenue improvements, cost savings, customer satisfaction, collaboration, and compliance support."
                  title="Services shaped for both startup urgency and enterprise complexity."
                />
                <ul className="grid grid-cols-1 gap-4 text-lg font-medium text-body-color sm:grid-cols-2">
                  {industries.map((item) => (
                    <li className="flex items-center" key={item}>
                      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary/10 text-primary">
                        <svg className="fill-current" height="13" viewBox="0 0 16 13" width="16">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {serviceHighlights.map((service) => (
                    <article className="rounded-xs border border-stroke-stroke bg-white p-6 shadow-two" key={service.title}>
                      <h3 className="mb-3 text-lg font-semibold text-black">{service.title}</h3>
                      <p className="text-base leading-relaxed text-body-color">{service.summary}</p>
                    </article>
                  ))}
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
            paragraph="The existing message is strong and simple: listen, develop, test, measure, refine. The theme's feature grid works well for turning that into a clearer delivery framework."
            title="Small teams. Short loops. Direct communication."
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={step.title}>
                <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 text-xl font-bold text-black">{step.title}</h3>
                <p className="text-base leading-relaxed text-body-color">{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="rounded-xs bg-white px-8 py-11 shadow-three sm:p-[55px]">
                <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl xl:text-3xl">Need a stronger digital delivery partner?</h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Use this route structure as the foundation, then wire lead capture or backend integrations in the next step.
                </p>
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90" href="/contact">
                    Contact IT Shoulders
                  </Link>
                  <Link className="rounded-xs bg-black px-9 py-4 text-base font-medium text-white duration-300 hover:bg-black/90" href="/about">
                    Learn About ITS
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div className="rounded-xs bg-gray-dark px-8 py-11 shadow-three sm:p-[55px]">
                <h3 className="mb-8 text-2xl font-bold text-white">Contact Snapshot</h3>
                <div className="space-y-6">
                  {contactCards.map((card) => (
                    <article key={card.label}>
                      <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-body-color-dark">{card.label}</span>
                      <p className="text-base leading-relaxed text-white">{card.value}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
