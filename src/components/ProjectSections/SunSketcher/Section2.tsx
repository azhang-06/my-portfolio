import { SunSketcherProjectSub } from '@/lib/types/SunSketcher'

const Section2 = ({ project }: { project: SunSketcherProjectSub }) => {
    return (
        <div>
            <h3 className='text-xl mb-5'>Discover</h3>
            <h3 className='text-lg'>Problem Statement</h3>
            <p className='mb-5'>{project.discover?.problem}</p>
            <h3 className='text-lg'>User Research</h3>
            <p>{project.discover?.userResearch}</p>
            <h3 className='text-lg mt-8'>Highlight</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-4'>
                {project.discover?.highlights.map((item, index) => (
                    <p key={index} className='text-md'>{index + 1}. {item}</p>
                ))}
            </div>
        </div>
    )
}

export default Section2