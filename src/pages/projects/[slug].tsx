import { GetStaticPaths, GetStaticProps } from "next";
import { DrinkStudio } from "../../../public/data/DrinkStudio";
import { SunSketcher } from "../../../public/data/SunSketcher";
import { DrinkStudioProject } from "@/lib/types/DrinkStudio";
import { SunSketcherProject } from "@/lib/types/SunSketcher";
import Image from "next/image";
import Section1 from "@/components/ProjectSections/SunSketcher/Section1";
import Section2 from "@/components/ProjectSections/SunSketcher/Section2";
import Section3 from "@/components/ProjectSections/SunSketcher/Section3";
import Section4 from "@/components/ProjectSections/SunSketcher/Section4";
import Section5 from "@/components/ProjectSections/SunSketcher/Section5";
import Section6 from "@/components/ProjectSections/SunSketcher/Section6";
import Section7 from "@/components/ProjectSections/SunSketcher/Section7";
import DrinkSection1 from "@/components/ProjectSections/DrinkStudio/Section1";
import DrinkSection2 from "@/components/ProjectSections/DrinkStudio/Section2";
import DrinkSection3 from "@/components/ProjectSections/DrinkStudio/Section3";
import DrinkSection4 from "@/components/ProjectSections/DrinkStudio/Section4";
import DrinkSection5 from "@/components/ProjectSections/DrinkStudio/Section5";
import DrinkSection6 from "@/components/ProjectSections/DrinkStudio/Section6";

type ProjectUnion = DrinkStudioProject | SunSketcherProject;

interface ProjectPageProps {
  project: ProjectUnion;
}

// Map of all projects by slug
const projectsMap: Record<string, ProjectUnion> = {
  [SunSketcher.slug]: SunSketcher,
  [DrinkStudio.slug]: DrinkStudio,
};

export default function ProjectPage({ project }: ProjectPageProps) {
  const isSunSketcher = project.projectName === "SunSketcher";
  const isDrinkStudio = project.projectName === "Drink Studio";

  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-12">
      <div className={`max-w-7xl mx-auto ${isDrinkStudio ? 'bg-[#FBF8F4]' : 'bg-white'} rounded-lg shadow-lg py-12 px-6 md:px-10 lg:px-20`}>
        <h3 className="text-2xl mb-2">{project.title}</h3>
        <p className="mb-4 font-quicksand font-light">{project.description}</p>

        <Image
          src={project.mainImage}
          alt={project.title}
          width={2000}
          height={2000}
          className="w-full aspect-[1.5/1] mb-4 rounded-md shadow-lg"
        />

        {isSunSketcher && (
          <>
            <h2 className="text-6xl mt-16">01</h2>
            <hr className="my-5" />
            <Section1 project={(project as SunSketcherProject).projectSub} />
            <h2 className="text-6xl mt-16">02</h2>
            <hr className="my-5" />
            <Section2 project={(project as SunSketcherProject).projectSub} />
            <h2 className="text-6xl mt-16">03</h2>
            <hr className="my-5" />
            <Section3 project={(project as SunSketcherProject).projectSub} />
            <h2 className="text-6xl mt-16">04</h2>
            <hr className="my-5" />
            <Section4 project={(project as SunSketcherProject).projectSub} />
            <h2 className="text-6xl mt-16">05</h2>
            <hr className="my-5" />
            <Section5 project={(project as SunSketcherProject).projectSub} />
            <h2 className="text-6xl mt-16">06</h2>
            <hr className="my-5" />
            <Section6 project={(project as SunSketcherProject).projectSub} />
            <h2 className="text-6xl mt-16">07</h2>
            <hr className="my-5" />
            <Section7 project={(project as SunSketcherProject).projectSub} />
          </>
        )}

        {isDrinkStudio && (
          <>
            <h2 className="text-6xl mt-16">01</h2>
            <hr className="my-5" />
            <DrinkSection1 project={(project as DrinkStudioProject).projectSub} />
            <h2 className="text-6xl mt-16">02 Research</h2>
            <hr className="my-5" />
            <DrinkSection2 project={(project as DrinkStudioProject).projectSub} />
            <h2 className="text-6xl mt-16">03 Ideation and Wireframes</h2>
            <hr className="my-5" />
            <DrinkSection3 project={(project as DrinkStudioProject).projectSub} />
            <h2 className="text-6xl mt-16">04 Designs</h2>
            <hr className="my-5" />
            <DrinkSection4 project={(project as DrinkStudioProject).projectSub} />
            <h2 className="text-6xl mt-16">05 Prototype</h2>
            <hr className="my-5" />
            <DrinkSection5 project={(project as DrinkStudioProject).projectSub} />
            <h2 className="text-6xl mt-16">06 Testing</h2>
            <hr className="my-5" />
            <DrinkSection6 project={(project as DrinkStudioProject).projectSub} />
          </>
        )}
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projectsMap).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projectsMap[slug];

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
