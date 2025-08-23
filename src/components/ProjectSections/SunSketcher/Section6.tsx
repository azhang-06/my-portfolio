  import { SunSketcherProjectSub } from '@/lib/types/SunSketcher'
import React from 'react'

const Section6 = ({ project }: { project: SunSketcherProjectSub }) => {
  return (
    <div>
        <h4 className='text-2xl  mb-4'>Prototype</h4>
        {/* <div className='w-full aspect-[2/1] bg-gray-300' /> */}
        <iframe className="w-full aspect-[1.85/1] bg-gray-300" src="https://embed.figma.com/proto/dvb5wfrRfxTajGF3ExSEg9/SunSketcher-V2?page-id=0%3A1&node-id=14536-1140&starting-point-node-id=719%3A182&embed-host=share" allowFullScreen></iframe>
    </div>
  )
}

export default Section6