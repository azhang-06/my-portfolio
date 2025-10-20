import { DrinkStudioProject } from "@/lib/types/DrinkStudio";
import { SunSketcherProject } from "@/lib/types/SunSketcher";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import DrinkStudioModal from "../ProjectModal/DrinkStudio";
import SunSketcherModal from "../ProjectModal/SunSketcher";

type ProjectUnion = DrinkStudioProject | SunSketcherProject;

const Projects = ({ project }: { project: ProjectUnion }) => {

    const [modal, setModal] = useState<ProjectUnion | undefined>(undefined);

    const ProjectModal = useMemo(() => {
        if (project.projectName === "SunSketcher") {
            return <SunSketcherModal project={project as SunSketcherProject} setModal={(value) => setModal(value as ProjectUnion | undefined)} />
        } else if (project.projectName === "Drink Studio") {
            return <DrinkStudioModal project={project as DrinkStudioProject} setModal={(value) => setModal(value as ProjectUnion | undefined)} />
        }
    }, [project, setModal]);

    useEffect(() => {
        if (modal) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
    
        return () => {
          document.body.classList.remove("overflow-hidden");
        };
      }, [modal]);
    
    return (
        <section className="max-w-3xl mx-auto p-4">
            <div key={project.id} onClick={() => setModal(project)}>
                <Image
                    src={project.mainImage}
                    alt={project.title}
                    width={2000}
                    height={2000}
                    className="w-full aspect-[1.5/1] mb-4 rounded-md shadow-lg"
                />
                <div className="p-2 cursor-pointer">
                    <p className="mb-2 text-[10px] md:text-[16px] font-quicksand !font-[500]">{project.projectType} - {project.projectName}</p>
                    <h4 className="text-[16px] md:text-[24px] font-[600] mb-2">{project.title}</h4>
                    <p className="mb-10 text-[12px] md:text-[20px] !font-[400] font-quicksand">{project.description}</p>
                    <p className="font-quicksand text-[10px] md:text-[16px] !font-[500]">{project.dateInformation.startDate} - {project.dateInformation.endDate} | Role: {project.role}</p>
                </div>
            </div>
            {modal && ProjectModal}
        </section>
    )
}

export default Projects