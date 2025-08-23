import { Project } from '@/lib/types/Project'
import Image from 'next/image'
import React from 'react'

const Section5 = ({ project }: { project: Project }) => {
    return (
        <>
            <h4 className='text-2xl  mb-4'>New Designs</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                {project.newDesigns.images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`User Persona Image ${index + 1}`}
                        width={500}
                        height={500}
                        className='rounded-lg'
                    />
                ))}
            </div>
        </>
    )
}

export default Section5