import { DrinkStudioProjectSub } from '@/lib/types/DrinkStudio'
import Image from 'next/image'

const Section2 = ({ project }: { project: DrinkStudioProjectSub }) => {
    return (
        <div>
            <h3 className='text-xl mb-5'>Discover</h3>
            <h3 className='text-lg'>Problem Statement</h3>
            <p className='mb-5'>{project.research?.problem}</p>
            <h3 className='text-lg'>Survey</h3>
            <p className='mb-5'>{project.research?.surveyDescription}</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
                    {project.research?.survey.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2 justify-self-center md:last:col-span-2 md:last:justify-self-center'>
                            <p>{item.description}</p>
                            <Image
                                src={item.image}
                                alt={`Survey Image ${index + 1}`}
                                width={400}
                                height={400}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <h3 className='text-lg mt-8'>User Persona</h3>
            <div className='grid grid-cols-1 justify-self-center gap-8 mt-8'>
                {project.research?.userPersona.map((item, index) => (
                    <Image
                        key={index}
                        src={item}
                        alt={`User Persona Image ${index + 1}`}
                        width={600}
                        height={600}
                        className='rounded-lg'
                    />
                ))}
            </div>
        </div>
    )
}

export default Section2