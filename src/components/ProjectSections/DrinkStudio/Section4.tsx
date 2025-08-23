import { DrinkStudioProjectSub } from '@/lib/types/DrinkStudio'
import Image from 'next/image'

const Section4 = ({ project }: { project: DrinkStudioProjectSub }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-8'>
            {project.newDesigns?.images.map((image, index) => (
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
    )
}

export default Section4