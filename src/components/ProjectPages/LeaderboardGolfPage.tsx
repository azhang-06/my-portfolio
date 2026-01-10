import { LeaderboardGolfProject } from "@/lib/types/LeaderboardGolf";
import Image from "next/image";
import Link from "next/link";

interface LeaderboardGolfPageProps {
  project: LeaderboardGolfProject;
}

const SectionDivider = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-[24px] md:text-[32px] font-bold font-montserrat text-onyx mb-2">
      {title}
    </h2>
    <div className="w-full h-[1px] bg-black" />
  </div>
);

const LeaderboardGolfPage = ({ project }: LeaderboardGolfPageProps) => {
  const { overview, research, keyFindings } = project.projectSub;

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

        {/* Overview Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Overview" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  Project Overview
                </h3>
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview.projectOverview}
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
                <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                  {overview.methodology}
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
          <div className="mb-6">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Method
            </h3>
            <p className="text-[16px] md:text-[20px] font-quicksand text-black">
              {research.method}
            </p>
          </div>

          {/* Timeline, Participants, Tasks Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Timeline
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                {research.timeline}
              </p>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Participants
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                {research.participants}
              </p>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                Tasks
              </h3>
              <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                {research.tasks}
              </p>
            </div>
          </div>

          {/* Success Criteria */}
          <div className="mb-6">
            <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
              Success Criteria
            </h3>
            <div className="flex flex-col md:flex-row md:gap-12">
              {research.successCriteria.map((criteria, index) => (
                <ul key={index} className="list-disc ml-8 text-[16px] md:text-[20px] font-quicksand text-black">
                  <li>{criteria}</li>
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mt-12 md:mt-16">
          <SectionDivider title="Key Findings" />

          <div className="space-y-8">
            {keyFindings.map((finding, index) => (
              <div key={index}>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-black mb-2">
                  {finding.title} — Severity: {finding.severity}
                </h3>
                {finding.description && (
                  <p className="text-[16px] md:text-[20px] font-quicksand text-black">
                    {finding.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Project Navigation */}
        <section className="mt-12 md:mt-16 flex justify-between items-center">
          <Link
            href="/projects/drink-studio"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
            </svg>
            Previous Project: DrinkStudio
          </Link>
          <Link
            href="/projects/street-feast"
            className="flex items-center gap-2 text-[16px] md:text-[24px] font-semibold font-montserrat text-black hover:opacity-70 transition-opacity"
          >
            Next Project: StreetFeast
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default LeaderboardGolfPage;
