import { Project } from "./Project";

export interface SimpleProjectSub {
    overview?: {
        projectOverview?: string;
        goal?: string;
        duration?: string;
        role?: string;
    };
}

export type SimpleProject = Project<SimpleProjectSub>;
