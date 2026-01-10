import { Project } from "./Project";

export interface LeaderboardGolfFinding {
  title: string;
  severity: "High" | "Medium" | "Low";
  description: string;
}

export interface LeaderboardGolfProjectSub {
  overview: {
    projectOverview: string;
    objectives: string[];
    methodology: string;
    duration: string;
    role: string;
    tools: string;
  };
  research: {
    method: string;
    timeline: string;
    participants: string;
    tasks: string;
    successCriteria: string[];
  };
  keyFindings: LeaderboardGolfFinding[];
}

export type LeaderboardGolfProject = Project<LeaderboardGolfProjectSub>;
