import { DrinkStudioProjectSub } from '@/lib/types/DrinkStudio'
import Image from 'next/image'
import React from 'react'

const Section3 = ({ project }: { project: DrinkStudioProjectSub }) => {
    return (
        <>
            <h4 className='text-2xl  mb-4'>Ideation and Wireframes</h4>
            <div className='grid grid-cols-1 gap-8 mt-8'>
                {project.ideationAndWireframes?.sections.map((section, index) => (
                    <div key={index} className='flex flex-col gap-2 justify-self-center w-full'>
                        <h5 className='text-lg'>{section.title}</h5>
                        <p>{section.description}</p>
                        <div className={`grid ${section.image.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-8 mt-8 w-full`}>
                            {section.image.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Ideation and Wireframes Image ${index + 1}`}
                                    width={600}
                                    height={600}
                                    className='rounded-lg w-full h-auto'
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Section3