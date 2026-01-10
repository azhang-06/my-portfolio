import { StreetFeastProject } from "@/lib/types/StreetFeast";

export const StreetFeast: StreetFeastProject = {
  id: "3",
  slug: "streetfeast",
  projectType: "Mobile App Design",
  projectName: "StreetFeast",
  role: "UX Researcher & UX Designer",
  dateInformation: {
    startDate: "July 2025",
    endDate: "Present",
  },
  title: "Can't find your favorite food truck? We got you covered!",
  description:
    "Easily find your favorite food truck, view their schedule and menu, and keep track of where they travel.",
  mainImage: "/projectImages/StreetFeast/ProjectCover.png",
  projectSub: {
    overview: {
      challenge:
        "Customers want to support local food trucks, but finding them often feels like a guessing game. Schedules are scattered across social media, locations and hours change frequently, and there is no reliable way for customers to discover nearby food trucks in real time. At the same time, food truck owners lack a centralized tool to communicate updates as their plans change. This disconnect leads to missed sales and frustrated customers. The challenge was to bridge this gap without adding operational burden for food truck owners or friction for their customers.",
      objectives: [
        "Provide a way for customers to discover nearby food trucks.",
        "Allow food truck owners to share real-time location and schedule updates with minimal effort.",
        "Reduce dependency on social media posts for critical information.",
      ],
      methodology: [
        "Conducted discovery research to validate the need for food truck discovery tool.",
        "Design customer and vendor experiences while development in progressed.",
        "Collaborated with developers to iterate on designs during implementation.",
        "Tested flows with food truck owners and customers to identify usability issues.",
        "Refined designs based on feedback and testing insights.",
      ],
      tools: "Figma, Google Forms, Affinity, Canvas",
      duration: "July 2025-Present",
      role: "UX Researcher & UX Designer",
    },
    research: {
      method:
        "To assess whether a food truck discovery tool was worth building, an exploratory survey was distributed locally. The goal was to understand how people are currently finding food trucks and how they track schedules. Along with this, we did a food truck vendor survey, to discover how they reach their audiences.",
      customerResponses: {
        description:
          "Responses revealed that majority relies on social media, word of mouth, events/festivals, and driving by. Many participants describe schedules/hours are inconsistent and difficult to track. The survey was not intended to inform decisions for interfaces, it was to validate discovery issues and common pain points.\n\nThese findings helped us move forward with design and development, while more detailed usability decisions were addressed through iteration and testing later in the process.",
        charts: [
          {
            image: "/projectImages/StreetFeast/Research/CustomerChart1.png",
            alt: "Customer survey chart 1",
          },
          {
            image: "/projectImages/StreetFeast/Research/CustomerChart2.png",
            alt: "Customer survey chart 2",
          },
          {
            image: "/projectImages/StreetFeast/Research/CustomerChart3.png",
            alt: "Customer survey chart 3",
          },
          {
            image: "/projectImages/StreetFeast/Research/CustomerChart4.png",
            alt: "Customer survey chart 4",
          },
        ],
      },
      vendorResponses: {
        description:
          "Vendors were provided a different survey to evaluate how they reach their customers. The main pain point they have is relying on social media to present their information, posting on different platforms, and getting word out.",
        image: "/projectImages/StreetFeast/Research/VendorResponses.png",
      },
    },
    appScreenshots: [
      "/projectImages/StreetFeast/AppScreenshots/Screen1.png",
      "/projectImages/StreetFeast/AppScreenshots/Screen2.png",
      "/projectImages/StreetFeast/AppScreenshots/Screen3.png",
      "/projectImages/StreetFeast/AppScreenshots/Screen4.png",
    ],
  },
};
