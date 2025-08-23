import { Project } from "@/lib/types/Project"
import Section1 from "../ProjectSections/Section1"
import Section2 from "../ProjectSections/Section2"
import Section3 from "../ProjectSections/Section3"
import Section4 from "../ProjectSections/Section4"
import Section5 from "../ProjectSections/Section5"
import Section6 from "../ProjectSections/Section6"
import Section7 from "../ProjectSections/Section7"
import Image from "next/image"

const ProjectModal = ({ project, setModal }: { project: Project, setModal: React.Dispatch<React.SetStateAction<Project | undefined>> }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg py-12 px-10 lg:px-20 max-w-7xl w-11/12 relative z-10 max-h-10/12 overflow-y-auto">

        <h3 className="text-2xl mb-2 ">{project.title}</h3>
        <p className="mb-4 font-quicksand font-light">{project.description}</p>
        
        <Image
          src={project.mainImage}
          alt={project.title}
          width={2000}
          height={2000}
          className="w-full aspect-[1.5/1] mb-4 rounded-md shadow-lg"
        />

        <h2 className="text-6xl mt-16">01</h2>
        <hr className="my-5" />
        <Section1 project={project} />
        <h2 className="text-6xl mt-16">02</h2>
        <hr className="my-5" />
        <Section2 project={project} />
        <h2 className="text-6xl mt-16">03</h2>
        <hr className="my-5" />
        <Section3 project={project} />
        <h2 className="text-6xl mt-16">04</h2>
        <hr className="my-5" />
        <Section4 project={project} />
        <h2 className="text-6xl mt-16">05</h2>
        <hr className="my-5" />
        <Section5 project={project} />
        <h2 className="text-6xl mt-16">06</h2>
        <hr className="my-5" />
        <Section6 project={project} />
        <h2 className="text-6xl mt-16">07</h2>
        <hr className="my-5" />
        <Section7 project={project} />
      </div>
      <div className="absolute z-0 top-0 h-screen left-0 w-screen bg-black/50" onClick={() => setModal(undefined)} />
    </div>
  )
}

export default ProjectModal