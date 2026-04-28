import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { contactCards, officeLocations } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact IT Shoulders in San Jose, Allen, or Chennai and reach the team for consulting and delivery support."
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        description="The existing site has a simple contact page with office details and a form. This version turns that into a clearer lead and support handoff."
        pageName="Contact"
      />

      <section className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 xl:p-[55px]">
                <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl xl:text-3xl">We&apos;d like to hear from you.</h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  This form is presentational for now. Wire it to email, a CRM, or a backend route in the next step if you want actual submission handling.
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark" htmlFor="name">Your Name</label>
                        <input className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary" id="name" placeholder="Enter your name" type="text" />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark" htmlFor="email">Your Email</label>
                        <input className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary" id="email" placeholder="Enter your email" type="email" />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark" htmlFor="subject">Subject</label>
                        <input className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary" id="subject" placeholder="Enter the subject" type="text" />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark" htmlFor="message">Your Message</label>
                        <textarea className="w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary" id="message" placeholder="Enter your message" rows={5}></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90" type="submit">
                        Submit Ticket
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div className="rounded-xs bg-gray-dark px-8 py-11 shadow-three sm:p-[55px]">
                <h3 className="mb-8 text-2xl font-bold text-white">Contact Details</h3>
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

      <section className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {officeLocations.map((office) => (
              <article className="rounded-xs bg-white p-8 shadow-three" key={office.city}>
                <h3 className="mb-4 text-2xl font-bold text-black">{office.city}</h3>
                <p className="text-base leading-relaxed text-body-color">{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
