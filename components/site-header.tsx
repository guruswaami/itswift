"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "shadow-sticky fixed bg-white/80 backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              aria-label="IT Shoulders home"
              className={`block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}
              href="/"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-lg font-bold text-white shadow-btn">
                  ITS
                </span>
                <div>
                  <div className="text-base font-bold text-black">IT Shoulders</div>
                  <div className="text-sm text-body-color">Digital Uplifter</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                aria-label="Mobile Menu"
                className="absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] lg:hidden"
                onClick={() => setOpen((current) => !current)}
                type="button"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    open ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    open ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              <nav
                className={`border-body-color/20 absolute right-0 z-30 w-[250px] rounded border bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                  open ? "visible top-full opacity-100" : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {navigation.map((item) => (
                    <li className="group relative" key={item.href}>
                      <Link
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={`flex py-2 text-base lg:inline-flex lg:py-6 ${
                          pathname === item.href
                            ? "text-primary"
                            : "text-dark hover:text-primary"
                        }`}
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="hidden items-center justify-end pr-16 lg:flex lg:pr-0">
              <Link
                className="text-dark px-7 py-3 text-base font-medium hover:opacity-70"
                href="/about"
              >
                About
              </Link>
              <Link
                className="shadow-btn hover:shadow-btn-hover rounded-xs bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-primary/90"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
