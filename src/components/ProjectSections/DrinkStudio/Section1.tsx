import React from 'react'
import Image from 'next/image'
import { DrinkStudioProjectSub } from '@/lib/types/DrinkStudio'

const Section1 = ({ project }: { project: DrinkStudioProjectSub }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <h2 className="text-xl mb-2">Project Overview</h2>
                    <p className='font-quicksand font-light'>{project.overview?.projectOverview || ""}</p>
                    {project.overview?.tools && (
                        <>
                            <h2 className="text-xl mb-2 mt-3">Tools</h2>
                            <p className='font-quicksand font-light'>{project.overview?.tools || ""}</p>
                        </>
                    )}
                </div>
                <div className="px-0 md:px-6">
                    <h2 className="text-xl mb-2">Project Goal</h2>
                    <p className="mb-4 font-quicksand font-light">{project.overview?.goal || ""}</p>
                    {/* team */}
                    {project.overview?.team && (
                        <div className='mb-4 mt-3'>
                            <h2 className="text-xl">Team</h2>
                            <p className='font-quicksand font-light'>{project.overview?.team || ""}</p>
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* duration */}
                        <div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/icons/alarm.png"
                                    alt="Duration"
                                    width={35}
                                    height={35}
                                />
                                <h5 className="font-bold text-xl">Project Duration</h5>
                            </div>
                            <p className="ml-12 font-quicksand font-light">{project.overview?.duration || ""}</p>
                        </div>
                        {/* role */}
                        <div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/icons/person.png"
                                    alt="Person"
                                    width={35}
                                    height={35}
                                />
                                <h5 className="font-bold text-xl">My Role</h5>
                            </div>
                            <p className="ml-12 font-quicksand font-light">{project.overview?.role || ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1