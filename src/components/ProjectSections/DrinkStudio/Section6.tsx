import { DrinkStudioProjectSub } from '@/lib/types/DrinkStudio'

const Section6 = ({ project }: { project: DrinkStudioProjectSub }) => {
    return (
        <div>
            <h3 className='text-lg '>Takeaway</h3>
            <p>{project.testing?.results}</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-8'>
                <div className='col-span-1'>
                    <h5 className='text-lg '>{project.testing?.successRate}%</h5>
                    <p>Total Success Rate</p>
                </div>
                <div className='col-span-2'>
                    <h5 className='text-lg '>{project.testing?.systemUsabilityScale}</h5>
                    <p>System Usability Scale Score</p>
                </div>
                <div className='col-span-1'>
                    <h5 className='text-lg '>{project.testing?.participants}</h5>
                    <p>Participants</p>
                </div>
                <div className='col-span-1'>
                    <h5 className='text-lg '>{project.testing?.tasks}</h5>
                    <p>Tasks</p>
                </div>
            </div>
        </div >
    )
}

export default Section6 