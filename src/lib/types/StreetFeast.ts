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
    keyInsights: string[];
  };
  design: {
    wireframing: {
      description: string;
      image: string;
    };
    highFidelity: {
      description: string;
      images: {
        image: string;
        alt: string;
      }[];
    };
    finalDesigns: {
      image: string;
      alt: string;
    }[];
  };
  testing: {
    results: string;
    metrics: {
      value: string;
      label: string;
    }[];
    download: {
      heading: string;
      links: {
        label: string;
        href: string;
      }[];
    };
  };
  appScreenshots: string[];
}

export type StreetFeastProject = Project<StreetFeastProjectSub>;
