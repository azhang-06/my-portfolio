import { SunSketcherProject } from "@/lib/types/SunSketcher";

export const SunSketcher: SunSketcherProject = {
    id: "1",
    slug: "sunsketcher",
    projectType: "Academic, Mobile App Design",
    projectName: "SunSketcher",
    role: "UX Researcher",
    dateInformation: {
        startDate: "Aug",
        endDate: "Nov 2024"
    },
    title: "Eclipse captured through citizen science photography",
    description: "An app that helps scientists collect a database of comprehensive images from citizens.",
    mainImage: "/projectImages/SunSketcher/ProjectCover.png",
    projectSub: {
        overview: {
            projectOverview: "SunSketcher was an app that helps scientists collect image datas from citizens to study the Bailey's beads. We developed the next iteration of SunSketcher to better accommodate users within the area of the eclipse. As well as redesigned the current SunSketch interface to create a streamlined experience.",
            goal: "Create a streamlined experience for users that are non-English speakers to use the app.",
            duration: "Aug-Nov 2024",
            role: "UX Researcher"
        },
        discover: {
            challenge: "The next total solar eclipse will cross countries that maybe non-English speakers. While SunSketcher helped researchers during the last eclipse, its English interface maybe difficult for other countries.",
            researchObjective: "Our goal was to understand how non-English-speaking users in eclipse regions navigate science or data-collection apps, and identify barriers to comprehension and interaction.",
            research: "We used secondary research to understand how users in Greenland, Iceland, and Spain will use technologies since direct user contact was not feasible. We will focus on gaining insights into how they interact with technology and document patterns that will support the other members of our team to begin on the iterations of the newest version of SunSketcher! Because the previous total eclipse was in the North America region, the app is currently an English version.",
            eclipseMapImage: "/projectImages/SunSketcher/EclipseMap.png",
            highlights: [
                "Designers should rely on icons and visuals to aid users with a language barrier.",
                "Words and/or phrases should be limited, due to the language barriers."
            ],
            techAnalysis: "After some online research, we see that the most popular phone brands are iPhone and Samsung. Most common apps used are WhatsApp, Facebook, and Instagram. So for the design of the app, we want to keep it simple and make minor changes."
        },
        iterations: {
            firstIteration: {
                description: "In the first iteration, we observed sizes of the buttons are large and there was no way to get back to the home screen.",
                images: [
                    "/projectImages/SunSketcher/Iterations/Home1.png",
                    "/projectImages/SunSketcher/Iterations/YourLocation1.png"
                ]
            },
            secondIteration: {
                description: "While we did scale down the buttons and added in the option to go back home, we also removed the tutorial button. The tutorial still exists, nested in start. By pressing start, the user will be taken to a screen prompting if you'd like a tutorial. The second iteration design looks more modern.",
                images: [
                    "/projectImages/SunSketcher/Iterations/Home2.png",
                    "/projectImages/SunSketcher/Iterations/Tutorial2.png",
                    "/projectImages/SunSketcher/Iterations/Location2.png"
                ]
            }
        },
        testing: {
            results: "We tested the redesign with 16 participants to evaluate whether navigation improved usability.",
            successRate: 92.7,
            systemUsabilityScale: 86,
            productReactionCardResponses: ["Accessible", "Effective", "Engaging", "Organized", "Simplistic"],
            nextStep: "The next step is to implement the designs and push into development for the next solar eclipse. If there is one thing I would suggest, would be to add the tutorial button back to the home screen. Although it provides more options, it limits the amount of presses the user needs to take when they want to start. This way if they want to see the tutorial again, they don't have to go to start to see tutorial."
        }
    },
};
