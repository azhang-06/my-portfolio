import { SunSketcherProject } from "@/lib/types/SunSketcher";
import Image from "next/image";
import Link from "next/link";

interface SunSketcherPageProps {
  project: SunSketcherProject;
}

const SectionDivider = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-[24px] md:text-[32px] font-bold font-montserrat text-onyx mb-2">
      {title}
    </h2>
    <div className="w-full h-[1px] bg-black" />
  </div>
);

const SunSketcherPage = ({ project }: SunSketcherPageProps) => {
  const { overview, discover, iterations, testing } = project.projectSub;

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
          <div className="w-full aspect-[1352/660] relative rounded-lg overflow-hidden">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="About" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Project Overview
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                {overview.projectOverview}
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Project Goal
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview.goal}
                </p>
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
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Discover" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Challenge
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {discover.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Research Objective
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {discover.researchObjective}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Research
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                {discover.research}
              </p>
            </div>
          </div>

          {/* Eclipse Map Image */}
          <div className="flex justify-center my-8">
            <div className="relative w-full max-w-[1040px] aspect-[1040/655]">
              <Image
                src={discover.eclipseMapImage}
                alt="Eclipse Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-right text-[14px] md:text-[16px] font-quicksand font-medium text-black underline mb-8">
            <a href="https://nationaleclipse.com/maps/main/2026-total-solar-eclipse-maps.html" target="_blank" rel="noopener noreferrer">
              NationEclipse.com
            </a>
          </p>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-4">
              Highlight
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {discover.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-[16px] md:text-[20px] font-quicksand text-black">{index + 1}.</span>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Analysis */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Tech Analysis
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black">
              {discover.techAnalysis}
            </p>
          </div>
        </section>

        {/* Iteration Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Iteration" />

          {/* First Iteration */}
          <div className="mb-12">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              First Iteration
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {iterations.firstIteration.description}
            </p>
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
              {iterations.firstIteration.images.map((image, index) => (
                <div key={index} className="relative w-[150px] md:w-[200px] h-[333px] md:h-[444px] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`First iteration screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Iteration */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Second Iteration
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {iterations.secondIteration.description}
            </p>
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
              {iterations.secondIteration.images.map((image, index) => (
                <div key={index} className="relative w-[150px] md:w-[200px] h-[333px] md:h-[444px] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Second iteration screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Testing" />

          <div className="mb-8">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Results
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
              {testing.results}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-8 md:gap-16 mb-8">
              <div>
                <p className="text-[20px] md:text-[24px] text-black" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>
                  {testing.successRate}%
                </p>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  Total Success Rate
                </p>
              </div>
              <div>
                <p className="text-[20px] md:text-[24px] text-black" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>
                  {testing.systemUsabilityScale}
                </p>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  System Usability Scale Score
                </p>
              </div>
              <div>
                <p className="text-[20px] md:text-[24px] text-black" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>
                  {testing.productReactionCardResponses.join(" — ")}
                </p>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  Product Reaction Cards Top Response
                </p>
              </div>
            </div>
          </div>

          {/* Next Step */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Next Step
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black">
              {testing.nextStep}
            </p>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="mt-12 md:mt-16 flex justify-between items-center">
          <Link
            href="/projects/streetfeast"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
            </svg>
            Previous Project: StreetFeast
          </Link>
          <Link
            href="/projects/drink-studio"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            Next Project: DrinkStudio
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default SunSketcherPage;
