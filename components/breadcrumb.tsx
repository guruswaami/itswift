type BreadcrumbProps = {
  pageName: string;
  description: string;
};

export function Breadcrumb({ pageName, description }: BreadcrumbProps) {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[140px] dark:bg-gray-dark md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {pageName}
              </h1>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1] w-full">
        <svg
          className="w-full"
          fill="none"
          height="1"
          viewBox="0 0 1440 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.5H1440" stroke="url(#paint0_linear_breadcrumb)" />
          <defs>
            <linearGradient
              id="paint0_linear_breadcrumb"
              x1="0"
              x2="1440"
              y1="0.5"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9E0EA" stopOpacity="0" />
              <stop offset="0.5" stopColor="#D9E0EA" />
              <stop offset="1" stopColor="#D9E0EA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
