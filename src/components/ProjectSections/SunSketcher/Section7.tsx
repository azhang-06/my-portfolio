import { SunSketcherProjectSub } from '@/lib/types/SunSketcher'
import React from 'react'

const Section7 = ({ project }: { project: SunSketcherProjectSub }) => {
    return (
        <div>
            <h3 className='text-xl  mb-5'>Testing</h3>
            <h3 className='text-lg '>Results</h3>
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
                <div className='col-span-3'>
                <h5 className='text-lg '>{project.testing?.productReactionCardResponses?.join('-')}</h5>
                <p>Product Reaction Cards Top Response</p>
            </div>
        </div>
    </div >
  )
}

export default Section7 