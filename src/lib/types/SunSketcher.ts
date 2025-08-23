import { Project } from "./Project";

export interface SunSketcherProjectSub {
    overview: SunSketcherOverview;
    discover: SunSketcherDiscover;
    userPersona: SunSketcherUserPersona;
    oldDesigns: SunSketcherOldDesigns;
    newDesigns: SunSketcherNewDesigns;
    prototype: SunSketcherPrototype;
    testing: SunSketcherTesting;
}

export type SunSketcherProject = Project<SunSketcherProjectSub>;

export interface SunSketcherOverview {
    discover: string;
    ideaPrototype: string;
    evaluate: string;
    outreachEducation: string;
    projectOverview: string;
    goal: string;
    duration: string;
    role: string;
}

export interface SunSketcherDiscover {
    problem: string;
    userResearch: string;
    highlights: string[];
}

export interface SunSketcherUserPersona {
    images: string[];
}

export interface SunSketcherOldDesigns {
    images: string[];
}

export interface SunSketcherNewDesigns {
    images: string[];
}

export interface SunSketcherPrototype {
    images: string[];
}

export interface SunSketcherTesting {
    results: string;
    successRate: number;
    systemUsabilityScale: number;
    productReactionCardResponses?: string[];
    participants?: number;
    tasks?: number;
}