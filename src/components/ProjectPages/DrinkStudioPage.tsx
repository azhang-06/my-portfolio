import { DrinkStudioProject } from "@/lib/types/DrinkStudio";
import Image from "next/image";
import Link from "next/link";

interface DrinkStudioPageProps {
  project: DrinkStudioProject;
}

const SectionDivider = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-[24px] md:text-[32px] font-bold font-montserrat text-onyx mb-2">
      {title}
    </h2>
    <div className="w-full h-[1px] bg-black" />
  </div>
);

const DrinkStudioPage = ({ project }: DrinkStudioPageProps) => {
  const { overview, research, ideationAndWireframes, newDesigns, testing } = project.projectSub;

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
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Project Overview
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview?.projectOverview}
                </p>
              </div>

              {research?.researchQuestions && research.researchQuestions.length > 0 && (
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                    Before designing, we wanted to understand:
                  </h3>
                  <ul className="list-disc ml-8 text-[16px] md:text-[20px] font-quicksand text-black space-y-1">
                    {research.researchQuestions.map((question, index) => (
                      <li key={index}>{question}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Project Goal
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview?.goal}
                </p>
              </div>

              <div className="flex flex-wrap gap-8 md:gap-16">
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                    Project Duration
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {overview?.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                    My Role
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {overview?.role}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Tools
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview?.tools}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        {research && (
          <section className="mt-12 md:mt-16">
            <SectionDivider title="Research" />

            {/* Problem Statement */}
            <div className="mb-8">
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Problem statement
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                {research.problem}
              </p>
            </div>

            {/* Survey */}
            <div className="mb-8">
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Survey
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
                {research.surveyDescription}
              </p>

              {/* Survey Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {research.survey.slice(0, 2).map((survey, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-[16px] md:text-[20px] font-quicksand text-onyx mb-4 text-center">
                      {survey.description}
                    </p>
                    <div className="relative w-full max-w-[400px] aspect-square">
                      <Image
                        src={survey.image}
                        alt={survey.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Third chart centered */}
              {research.survey.length > 2 && (
                <div className="flex flex-col items-center mb-8">
                  <p className="text-[16px] md:text-[20px] font-quicksand text-onyx mb-4 text-center">
                    {research.survey[2].description}
                  </p>
                  <div className="relative w-full max-w-[600px] aspect-[2/1]">
                    <Image
                      src={research.survey[2].image}
                      alt={research.survey[2].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Key Insights */}
            {research.keyInsights && research.keyInsights.length > 0 && (
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
            )}
          </section>
        )}

        {/* Ideation & Wireframing Section */}
        {ideationAndWireframes && (
          <section className="mt-12 md:mt-16">
            <SectionDivider title="Ideation & Wireframing" />

            {ideationAndWireframes.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black mb-6">
                    {section.description}
                  </p>
                )}

                {/* Images */}
                {section.title === "Sketches" ? (
                  <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                    {section.image.map((img, imgIndex) => (
                      <div key={imgIndex} className="flex flex-col items-center">
                        <div className="relative w-full max-w-[520px] aspect-[520/629] rounded-lg overflow-hidden bg-gray-200">
                          <Image
                            src={img}
                            alt={`${section.title} ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {section.credits && section.credits[imgIndex] && (
                          <p className="text-[14px] md:text-[16px] font-quicksand font-medium text-onyx mt-2">
                            {section.credits[imgIndex]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : section.title === "User Flow" ? (
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[700px] aspect-[694/876] rounded-lg overflow-hidden">
                      <Image
                        src={section.image[0]}
                        alt={section.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[1248px] aspect-[1248/814] rounded-lg overflow-hidden">
                      <Image
                        src={section.image[0]}
                        alt={section.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Designs Section */}
        {newDesigns && newDesigns.images.length > 0 && (
          <section className="mt-12 md:mt-16">
            <SectionDivider title="Designs" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {newDesigns.images.map((image, index) => (
                <div key={index} className="relative aspect-[215/466] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Design ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testing Section */}
        {testing && (
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

              {/* Metrics */}
              <div className="flex flex-wrap gap-8 md:gap-16 mb-8">
                <div>
                  <p className="text-[20px] md:text-[24px] font-montserrat text-black" style={{ fontWeight: 800 }}>
                    {testing.successRate}%
                  </p>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    Total Success Rate
                  </p>
                </div>
                <div>
                  <p className="text-[20px] md:text-[24px] font-montserrat text-black" style={{ fontWeight: 800 }}>
                    {testing.systemUsabilityScale}%
                  </p>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    System Usability Scale Score
                  </p>
                </div>
                <div>
                  <p className="text-[20px] md:text-[24px] font-montserrat text-black" style={{ fontWeight: 800 }}>
                    {testing.participants}
                  </p>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    Participants
                  </p>
                </div>
                <div>
                  <p className="text-[20px] md:text-[24px] font-montserrat text-black" style={{ fontWeight: 800 }}>
                    {testing.tasks}
                  </p>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    Tasks
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step */}
            {testing.nextStep && (
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Next Step
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {testing.nextStep}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Project Navigation */}
        <section className="mt-12 md:mt-16 flex justify-between items-center">
          <Link
            href="/projects/sunsketcher"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
            </svg>
            Previous Project: SunSketcher
          </Link>
          <Link
            href="/projects/leaderboard-golf"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            Next Project: Leaderboard Golf
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default DrinkStudioPage;
