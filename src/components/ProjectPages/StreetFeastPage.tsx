import { StreetFeastProject } from "@/lib/types/StreetFeast";
import Image from "next/image";
import Link from "next/link";

interface StreetFeastPageProps {
  project: StreetFeastProject;
}

const SectionDivider = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-[24px] md:text-[32px] font-bold font-montserrat text-onyx mb-2">
      {title}
    </h2>
    <div className="w-full h-[1px] bg-black" />
  </div>
);

const StreetFeastPage = ({ project }: StreetFeastPageProps) => {
  const { overview, research, design, testing, appScreenshots } = project.projectSub;

  return (
    <main className="bg-offwhite min-h-screen">
      <div className="max-w-[1352px] mx-auto px-4 md:px-10 lg:px-20 py-8 md:py-12">
        {/* Project Header */}
        <section className="mb-8">
          <h1 className="text-[24px] md:text-[32px] font-bold font-montserrat text-onyx mb-2">
            {project.title}
          </h1>
          <p className="text-[16px] md:text-[20px] font-quicksand text-onyx mb-6">
            {project.description}
          </p>

          {/* App Screenshots - 4 in a row */}
          <div className="flex gap-3 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {appScreenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 w-[180px] md:w-auto aspect-[318/691] ${
                  index === 0 ? "rounded-l-lg" : ""
                } ${index === appScreenshots.length - 1 ? "rounded-r-lg" : ""} overflow-hidden`}
              >
                <Image
                  src={screenshot}
                  alt={`StreetFeast app screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Overview" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Challenge
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Objectives
                </h3>
                <ul className="list-disc ml-8 text-[16px] md:text-[20px] font-quicksand text-black space-y-1">
                  {overview.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Methodology
                </h3>
                <ul className="list-disc ml-8 text-[16px] md:text-[20px] font-quicksand text-black space-y-1">
                  {overview.methodology.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-8 md:gap-16">
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                    Project Duration
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {overview.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                    My Role
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {overview.role}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Tools
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview.tools}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Research" />

          {/* Method */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Method
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black">
              {research.method}
            </p>
          </div>

          {/* Customer Responses */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Customer Responses
            </h3>
            <div className="text-[16px] md:text-[20px] font-quicksand text-black mb-6 whitespace-pre-line">
              {research.customerResponses.description}
            </div>

            {/* Customer Charts - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {research.customerResponses.charts.map((chart, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[650/300] rounded-lg overflow-hidden"
                >
                  <Image
                    src={chart.image}
                    alt={chart.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vendor Responses */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Vendor Responses
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {research.vendorResponses.description}
            </p>

            <div className="relative w-full max-w-[735px] aspect-[735/502] rounded-lg overflow-hidden">
              <Image
                src={research.vendorResponses.image}
                alt="Vendor survey responses"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Key Insights */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Key Insights
            </h3>
            <ul className="list-disc ml-8 text-[16px] md:text-[20px] font-quicksand text-black space-y-1">
              {research.keyInsights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Design" />

          {/* Wireframing */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Wireframing
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {design.wireframing.description}
            </p>
            <div className="relative w-full max-w-[877px] mx-auto aspect-[877/493]">
              <Image
                src={design.wireframing.image}
                alt="Wireframes for the StreetFeast onboarding and food truck profile screens"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* High-Fidelity Wireframe */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              High-Fidelity Wireframe
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {design.highFidelity.description}
            </p>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {design.highFidelity.images.map((wireframe, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 h-[240px] md:h-[360px] lg:h-[458px] aspect-[879/458]"
                >
                  <Image
                    src={wireframe.image}
                    alt={wireframe.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Final Designs */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-4">
              Final Designs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-[69px]">
              {design.finalDesigns.map((screen, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[215/466] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={screen.image}
                    alt={screen.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Testing" />

          {/* Results */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Results
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {testing.results}
            </p>

            <div className="flex flex-wrap gap-8 md:gap-[100px]">
              {testing.metrics.map((metric, index) => (
                <div key={index}>
                  <p className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                    {metric.value}
                  </p>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              {testing.download.heading}
            </h3>
            <div className="flex flex-col items-start text-[16px] md:text-[20px] font-quicksand text-black">
              {testing.download.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="mt-12 md:mt-16 flex justify-between items-center">
          <Link
            href="/projects/leaderboard-golf"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                fill="currentColor"
              />
            </svg>
            Previous Project: Leaderboard Golf
          </Link>
          <Link
            href="/projects/sunsketcher"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            Next Project: SunSketcher
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default StreetFeastPage;
