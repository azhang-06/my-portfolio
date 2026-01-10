import { Project } from "./Project";

export interface StreetFeastProjectSub {
  overview: {
    challenge: string;
    objectives: string[];
    methodology: string[];
    tools: string;
    duration: string;
    role: string;
  };
  research: {
    method: string;
    customerResponses: {
      description: string;
      charts: {
        image: string;
        alt: string;
      }[];
    };
    vendorResponses: {
      description: string;
      image: string;
    };
  };
  appScreenshots: string[];
}

export type StreetFeastProject = Project<StreetFeastProjectSub>;
