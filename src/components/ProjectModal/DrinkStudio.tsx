import Section1 from "../ProjectSections/DrinkStudio/Section1"
import Image from "next/image"
import { DrinkStudioProject } from "@/lib/types/DrinkStudio"
import Section2 from "../ProjectSections/DrinkStudio/Section2"
import Section3 from "../ProjectSections/DrinkStudio/Section3"
import Section4 from "../ProjectSections/DrinkStudio/Section4"
import Section5 from "../ProjectSections/DrinkStudio/Section5"
import Section6 from "../ProjectSections/DrinkStudio/Section6"

const DrinkStudioModal = ({ project, setModal }: { project: DrinkStudioProject, setModal: React.Dispatch<React.SetStateAction<DrinkStudioProject | undefined>> }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#FBF8F4] rounded-lg shadow-lg py-12 px-10 lg:px-20 max-w-7xl w-11/12 relative z-10 max-h-10/12 overflow-y-auto">

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
        <Section1 project={project.projectSub} />
        <h2 className="text-6xl mt-16">02 Reasearch</h2>
        <hr className="my-5" />
        <Section2 project={project.projectSub} />
        <h2 className="text-6xl mt-16">03 Ideation and Wireframes</h2>
        <hr className="my-5" />
        <Section3 project={project.projectSub} />
        <h2 className="text-6xl mt-16">04 Designs</h2>
        <hr className="my-5" />
        <Section4 project={project.projectSub} />
        <h2 className="text-6xl mt-16">05 Prototype</h2>
        <hr className="my-5" />
        <Section5 project={project.projectSub} />
        <h2 className="text-6xl mt-16">06 Testing</h2>
        <hr className="my-5" />
        <Section6 project={project.projectSub} />
      </div>
      <div className="absolute z-0 top-0 h-screen left-0 w-screen bg-black/50" onClick={() => setModal(undefined)} />
    </div>
  )
}

export default DrinkStudioModal