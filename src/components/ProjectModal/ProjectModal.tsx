import { Project } from "@/lib/types/Project"

const ProjectModal = ({ project, setModal }: { project?: React.ReactNode, setModal?: React.Dispatch<React.SetStateAction<Project<any> | undefined>> }) => {
    return project;
}

export default ProjectModal