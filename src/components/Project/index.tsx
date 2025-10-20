import { DrinkStudioProject } from "@/lib/types/DrinkStudio";
import { SunSketcherProject } from "@/lib/types/SunSketcher";
import Image from "next/image";
import Link from "next/link";

type ProjectUnion = DrinkStudioProject | SunSketcherProject;

const Projects = ({ project }: { project: ProjectUnion }) => {
    return (
        <section className="max-w-3xl mx-auto p-4">
            <Link href={`/projects/${project.slug}`} key={project.id}>
                <div className="cursor-pointer">
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        width={2000}
                        height={2000}
                        className="w-full aspect-[1.5/1] mb-4 rounded-md shadow-lg"
                    />
                    <div className="p-2">
                        <p className="mb-2 text-[10px] md:text-[16px] font-quicksand !font-[500]">{project.projectType} - {project.projectName}</p>
                        <h4 className="text-[16px] md:text-[24px] font-[600] mb-2">{project.title}</h4>
                        <p className="mb-10 text-[12px] md:text-[20px] !font-[400] font-quicksand">{project.description}</p>
                        <p className="font-quicksand text-[10px] md:text-[16px] !font-[500]">{project.dateInformation.startDate} - {project.dateInformation.endDate} | Role: {project.role}</p>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Projects