import { Project } from "@/lib/types/Project";
import { projects } from "../../../public/data/projects"
import Image from "next/image";


const Projects = ({setModal}: {setModal: React.Dispatch<React.SetStateAction<Project | undefined>>}) => {
    return (
        <section className="max-w-3xl mx-auto p-4">
            {projects.map((project) => (
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
                        <h4 className="text-[16px] md:text-[28px] font-[800] mb-2 ">{project.title}</h4>
                        <p className="mb-10 text-[12px] md:text-[20px] !font-[300] font-quicksand">{project.description}</p>
                        <p className="font-quicksand text-[10px] md:text-[16px] !font-[500]">{project.dateInformation.startDate} - {project.dateInformation.endDate} | Role: {project.role}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects