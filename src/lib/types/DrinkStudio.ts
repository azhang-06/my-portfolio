import { Project } from "./Project";

export interface DrinkStudioProjectSub {
    overview?: DrinkStudioOverview;
    discover?: DrinkStudioDiscover;
    oldDesigns?: DrinkStudioOldDesigns;
    newDesigns?: DrinkStudioNewDesigns;
    prototype?: DrinkStudioPrototype;
    testing?: DrinkStudioTesting;
    research?: DrinkStudioResearch;
    ideationAndWireframes?: DrinkStudioIdeationAndWireframes;
}

export type DrinkStudioProject = Project<DrinkStudioProjectSub>;

export interface DrinkStudioOverview {
    discover?: string;
    ideaPrototype?: string;
    evaluate?: string;
    outreachEducation?: string;
    projectOverview?: string;
    goal?: string;
    duration?: string;
    role?: string;
    team?: string;
    tools?: string;
}

export interface DrinkStudioDiscover {
    problem: string;
    userResearch: string;
    highlights: string[];
}

export interface DrinkStudioOldDesigns {
    images: string[];
}

export interface DrinkStudioNewDesigns {
    images: string[];
}

export interface DrinkStudioPrototype {
    images: string[];
}

export interface DrinkStudioTesting {
    results: string;
    successRate: number;
    systemUsabilityScale: number;
    productReactionCardResponses?: string[];
    participants?: number;
    tasks?: number;
    nextStep?: string;
}


export interface DrinkStudioResearch {
    problem: string;
    surveyDescription: string;
    survey: DrinkStudioSurvey[];
    userPersona: string[];
    keyInsights?: string[];
    researchQuestions?: string[];
}

export interface DrinkStudioIdeationAndWireframes {
    sections: DrinkStudioSection[];
}

export interface DrinkStudioSurvey {
    title: string;
    description: string;
    image: string;
}

export interface DrinkStudioSection {
    title: string;
    description: string;
    image: string[];
    credits?: string[];
}
