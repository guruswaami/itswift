import Link from "next/link";
import { contactCards, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link className="mb-8 inline-block" href="/">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-lg font-bold text-white">
                    ITS
                  </span>
                  <div>
                    <div className="text-base font-bold text-black">IT Shoulders</div>
                    <div className="text-sm text-body-color">Digital Uplifter</div>
                  </div>
                </div>
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color">
                IT Shoulders helps modernize data, cloud, QA, analytics, and web operations through
                practical consulting and delivery support.
              </p>
              <div className="flex items-center gap-4 text-sm text-body-color">
                <span>San Jose</span>
                <span>Allen</span>
                <span>Chennai</span>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black">Pages</h2>
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black">Services</h2>
              <ul>
                <li>
                  <Link className="mb-4 inline-block text-base text-body-color hover:text-primary" href="/services">
                    Data & ETL
                  </Link>
                </li>
                <li>
                  <Link className="mb-4 inline-block text-base text-body-color hover:text-primary" href="/services">
                    Cloud Enablement
                  </Link>
                </li>
                <li>
                  <Link className="mb-4 inline-block text-base text-body-color hover:text-primary" href="/services">
                    QA & Analytics
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black">Contact</h2>
              <ul>
                {contactCards.slice(0, 3).map((card) => (
                  <li className="mb-4 text-base text-body-color" key={card.label}>
                    <strong className="mb-1 block text-black">{card.label}</strong>
                    {card.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color">
            Built with the visual direction of the{" "}
            <a
              className="hover:text-primary"
              href="https://github.com/NextJSTemplates/startup-nextjs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Startup Next.js theme
            </a>{" "}
            and adapted for IT Shoulders.
          </p>
        </div>
      </div>
    </footer>
  );
}
