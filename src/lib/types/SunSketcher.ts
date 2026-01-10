import { Project } from "./Project";

export interface SunSketcherProjectSub {
    overview: SunSketcherOverview;
    discover: SunSketcherDiscover;
    iterations: SunSketcherIterations;
    testing: SunSketcherTesting;
    // Keep old fields for backward compatibility
    userPersona?: SunSketcherUserPersona;
    oldDesigns?: SunSketcherOldDesigns;
    newDesigns?: SunSketcherNewDesigns;
    prototype?: SunSketcherPrototype;
}

export type SunSketcherProject = Project<SunSketcherProjectSub>;

export interface SunSketcherOverview {
    projectOverview: string;
    goal: string;
    duration: string;
    role: string;
    // Keep old fields for backward compatibility
    discover?: string;
    ideaPrototype?: string;
    evaluate?: string;
    outreachEducation?: string;
}

export interface SunSketcherDiscover {
    challenge: string;
    researchObjective: string;
    research: string;
    eclipseMapImage: string;
    highlights: string[];
    techAnalysis: string;
    // Keep old fields for backward compatibility
    problem?: string;
    userResearch?: string;
}

export interface SunSketcherIterations {
    firstIteration: {
        description: string;
        images: string[];
    };
    secondIteration: {
        description: string;
        images: string[];
    };
}

export interface SunSketcherTesting {
    results: string;
    successRate: number;
    systemUsabilityScale: number;
    productReactionCardResponses: string[];
    nextStep: string;
    participants?: number;
    tasks?: number;
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
