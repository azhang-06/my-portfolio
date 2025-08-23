import { Project } from "@/lib/types/Project";

export const projects: Project[] = [
  {
    id: "1",
    projectType: "Mobile App Design",
    projectName: "SunSketcher",
    role: "UX Designer",
    dateInformation: {
      startDate: "March",
      endDate: "May 2025"
    },
    title: "Eclipse captured through citizen science photography",
    description: "An app that helps scientist collect a database of comprehensive images from citizens.",
    mainImage: "/projectImages/SunSketcher/ProjectCover.png",
    overview: {
      discover: "Research on users in the next total solar eclipse path: Greenland, Iceland, & Spain.",
      ideaPrototype: "Based on user research, creating the next iteration of the app in Figma.",
      evaluate: "Create UX testing materials (consent form, script, any other instruments), recruit participants, & lead testing!",
      outreachEducation: "A new & improved animated video tutorial explaining how & why to use SunSketcher.",
      projectOverview: "SunSketcher was an app that helps scientists collect image datas from citizens to study the Bailey’s beads. We developed the next iteration of SunSketcher to better accommodate users within the area of the eclipse. As well as redesigned the current SunSketch interface to create a streamlined experience.",
      goal: "Create a streamline experience for users that are non-English speakers to use the app.",
      duration: "Aug-Nov 2024",
      role: "UX Researcher"
    },
    discover: {
      problem: "The next total solar eclipse will be on August 12, 2026. The users at the next total solar eclipse may not understand English and there are too much text within the current interface.",
      userResearch: "We begin with a user research to better understand how users in Greenland, Iceland, and Spain will use the app. Since we can’t conduct any “user” research because we are unable to connect with users in other countries, we will focus on gaining insights into how they interact with technology and document patterns that will support the other members of our team to begin on the iterations of the newest version of SunSketcher! Because the previous total eclipse was in the North America region, the app is currently an English version.",
      highlights: ["Designers should rely on icons and visuals to aid users with a language barrier.", "Words or phrases should be limited, due to language barriers.",]
    },
    userPersona: {
      images: ["/projectImages/SunSketcher/UserPersona/UserPersona1.png", "/projectImages/SunSketcher/UserPersona/UserPersona2.png"]
    },
    oldDesigns: {
      images: [
        "/projectImages/SunSketcher/Old/Old_4_SplashScreen.png",
        "/projectImages/SunSketcher/Old/Old_5_Home.png",
        "/projectImages/SunSketcher/Old/Old_6_YourLocation.png",
        "/projectImages/SunSketcher/Old/Old_7_OhNo.png",
        "/projectImages/SunSketcher/Old/Old_8_SkipTutorial.png",
        "/projectImages/SunSketcher/Old/Old_9_Tutorial1.png",
        "/projectImages/SunSketcher/Old/Old_10_Tutorial2.png",
        "/projectImages/SunSketcher/Old/Old_11_Tutorial3.png",
        "/projectImages/SunSketcher/Old/Old_12_WhatIs1.png",
        "/projectImages/SunSketcher/Old/Old_13_WhatIs2.png",
        "/projectImages/SunSketcher/Old/Old_14_WhatIs3.png",
        "/projectImages/SunSketcher/Old/Old_15_DoNotDisturb.png",
        "/projectImages/SunSketcher/Old/Old_16_SharePhoto.png",
        "/projectImages/SunSketcher/Old/Old_17_ThankYou1.png",
        "/projectImages/SunSketcher/Old/Old_18_ThankYou2.png"
      ]
    },
    newDesigns: {
      images: [
        "/projectImages/SunSketcher/New/New_4_SplashScreen.png",
        "/projectImages/SunSketcher/New/New_5_SplashScreen.png",
        "/projectImages/SunSketcher/New/New_6_Location.png",
        "/projectImages/SunSketcher/New/New_7_LocationNo.png",
        "/projectImages/SunSketcher/New/New_8_AreYouSure.png",
        "/projectImages/SunSketcher/New/New_9_Tutorial1.png",
        "/projectImages/SunSketcher/New/New_10_What1.png",
        "/projectImages/SunSketcher/New/New_11_What2.png",
        "/projectImages/SunSketcher/New/New_12_What3.png",
        "/projectImages/SunSketcher/New/New_13_What6.png",
        "/projectImages/SunSketcher/New/New_14_InProgress.png",
        "/projectImages/SunSketcher/New/New_15_Photos.png",
        "/projectImages/SunSketcher/New/New_16_ThankYouYes.png",
        "/projectImages/SunSketcher/New/New_17_ThankYouNo.png",
        "/projectImages/SunSketcher/New/New_18_DataRecieved.png"
      ]
    },
    prototype: {
      images: ["/images/prototype1.png", "/images/prototype2.png"]
    },
    testing: {
      results: "We conducted testing with 16 participants, and have concluded that the redesign in navigation was successful.",
      successRate: 85,
      systemUsabilityScale: 75,
      productReactionCardResponses: ["Accessible", "Effective", "Engaging", "Organized", "Simplistic"]
    }
  },
];