import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { DrinkStudio } from "../../../public/data/DrinkStudio";
import { SunSketcher } from "../../../public/data/SunSketcher";
import { LeaderboardGolf } from "../../../public/data/LeaderboardGolf";
import { StreetFeast } from "../../../public/data/StreetFeast";
import { DrinkStudioProject } from "@/lib/types/DrinkStudio";
import { SunSketcherProject } from "@/lib/types/SunSketcher";
import { LeaderboardGolfProject } from "@/lib/types/LeaderboardGolf";
import { StreetFeastProject } from "@/lib/types/StreetFeast";
import SunSketcherPage from "@/components/ProjectPages/SunSketcherPage";
import DrinkStudioPage from "@/components/ProjectPages/DrinkStudioPage";
import LeaderboardGolfPage from "@/components/ProjectPages/LeaderboardGolfPage";
import StreetFeastPage from "@/components/ProjectPages/StreetFeastPage";

type ProjectUnion = DrinkStudioProject | SunSketcherProject | LeaderboardGolfProject | StreetFeastProject;

interface ProjectPageProps {
  project: ProjectUnion;
}

// Map of all projects by slug
const projectsMap: Record<string, ProjectUnion> = {
  [SunSketcher.slug]: SunSketcher,
  [DrinkStudio.slug]: DrinkStudio,
  [LeaderboardGolf.slug]: LeaderboardGolf,
  [StreetFeast.slug]: StreetFeast,
};

export default function ProjectPage({ project }: ProjectPageProps) {
  const pageTitle = `${project.projectName} — Amanda Zhang`;
  const head = (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={project.description} />
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.mainImage} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );

  const isSunSketcher = project.projectName === "SunSketcher";
  const isDrinkStudio = project.projectName === "Drink Studio";
  const isLeaderboardGolf = project.projectName === "Leaderboard Golf";
  const isStreetFeast = project.projectName === "StreetFeast";

  // Use dedicated page component for SunSketcher
  if (isSunSketcher) {
    return <>{head}<SunSketcherPage project={project as SunSketcherProject} /></>;
  }

  // Use dedicated page component for DrinkStudio
  if (isDrinkStudio) {
    return <>{head}<DrinkStudioPage project={project as DrinkStudioProject} /></>;
  }

  // Use dedicated page component for LeaderboardGolf
  if (isLeaderboardGolf) {
    return <>{head}<LeaderboardGolfPage project={project as LeaderboardGolfProject} /></>;
  }

  // Use dedicated page component for StreetFeast
  if (isStreetFeast) {
    return <>{head}<StreetFeastPage project={project as StreetFeastProject} /></>;
  }

  return null;
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
