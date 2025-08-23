import React from 'react'
import ProjectSectionItem from '../../ProjectSectionItem'
import Image from 'next/image'
import { SunSketcherProjectSub } from '@/lib/types/SunSketcher'

const Section1 = ({ project }: { project: SunSketcherProjectSub }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.overview?.discover && (
                    <ProjectSectionItem
                        icon={"/icons/explore.png"}
                        title={"Discover"}
                        description={project.overview?.discover || ""}
                    />
                )}
                {project.overview?.ideaPrototype && (
                    <ProjectSectionItem
                        icon={"/icons/lightbulb.png"}
                        title={"Ideate & Prototype"}
                        description={project.overview?.ideaPrototype || ""}
                    />
                )}
                {project.overview?.evaluate && (
                    <ProjectSectionItem
                        icon={"/icons/checklist.png"}
                        title={"Evaluate"}
                        description={project.overview?.evaluate || ""}
                    />
                )}
                {project.overview?.outreachEducation && (
                    <ProjectSectionItem
                        icon={"/icons/diversity.png"}
                        title={"Outreach & Education"}
                        description={project.overview?.outreachEducation || ""}
                    />
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <h2 className="text-xl mb-2">Project Overview</h2>
                    <p className='font-quicksand font-light'>{project.overview?.projectOverview || ""}</p>
                </div>
                <div className="px-0 md:px-6">
                    <h2 className="text-xl mb-2">Project Goal</h2>
                    <p className="mb-4 font-quicksand font-light">{project.overview?.goal || ""}</p>
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