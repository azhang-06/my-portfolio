import Image from "next/image";
import Link from "next/link";
import { DrinkStudio } from "../../public/data/DrinkStudio";
import { SunSketcher } from "../../public/data/SunSketcher";
import { StreetFeast } from "../../public/data/StreetFeast";
import { LeaderboardGolf } from "../../public/data/LeaderboardGolf";

const projects = [StreetFeast, LeaderboardGolf, DrinkStudio, SunSketcher];

export default function Home() {
  return (
    <main className="bg-offwhite">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 md:pt-20 md:pb-12">
        <h1 className="text-[32px] md:text-[44px] font-bold text-onyx font-montserrat">
          Hai! Hai!
        </h1>
        <p className="text-[80px] md:text-[152px] font-script italic text-onyx leading-tight">
          I&apos;m Amanda
        </p>
        <p className="max-w-[917px] text-center text-[20px] md:text-[32px] font-medium text-onyx font-montserrat mt-4 px-4">
          A UX designer who&apos;s curious and empathetic. I focus on mobile app designs and love figuring out what can be improved through research and design solutions.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="/about"
            className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
          >
            More About Me
          </Link>
          <a
            href="#featured-projects"
            className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
          >
            Featured Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-12 md:py-16 max-w-5xl mx-auto">
        <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0">
          <Image
            src="/amanda-headshot.png"
            alt="Amanda Zhang"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[464px]">
          <p className="text-[16px] md:text-[20px] font-quicksand text-onyx">
            I&apos;m a UX designer based in Bowling Green, Kentucky. I specialize in UX research, UX design for mobile applications, and would love to expand my knowledge. My goal is to create solutions that prioritizes users first; focusing on finding out how users think and interact with a digital product.
          </p>
          <div className="flex gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
            >
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/zhang-amanda"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="px-4 py-12 md:py-16 max-w-[1312px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[24px] md:text-[32px] font-bold text-onyx font-montserrat whitespace-nowrap">
            Featured Projects
          </h2>
          <div className="flex-1 h-[1px] bg-black" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="group">
              <article className="cursor-pointer">
                <div className="aspect-[638/564] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2">
                  <p className="text-[14px] md:text-[16px] font-quicksand font-medium text-onyx mb-2">
                    {project.projectType} — {project.projectName}
                  </p>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-onyx mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-onyx mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-quicksand font-medium text-onyx">
                    {project.dateInformation.startDate} - {project.dateInformation.endDate} | Role: {project.role}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
