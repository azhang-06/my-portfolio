import { DrinkStudioProject } from "@/lib/types/DrinkStudio";

export const DrinkStudio: DrinkStudioProject = {
  id: "2",
  slug: "drink-studio",
  projectType: "Academic, Mobile App Design",
  projectName: "Drink Studio",
  role: "UX Researcher and Designer",
  dateInformation: {
    startDate: "March",
    endDate: "May 2025"
  },
  title: "Learning to craft delicious drinks at home",
  description: "A mobile app that empowers users to customize and make at-home drinks through step-by-step tutorials.",
  mainImage: "/projectImages/DrinkStudio/ProjectCover.png",
  projectSub: {
    overview: {
      projectOverview: "DrinkStudio is a mobile app designed to help users make better drinks at home through clear, step-by-step tutorials and customizable recipe guides. Unlike traditional recipe videos or web pages that require pausing, scrolling, or rewinding, DrinkStudio offers a seamless, hands-on learning experience that keeps users focused on the process. It’s built for home baristas and beginners alike.",
      goal: "To create an easy-to-use app that teaches users how to make drinks through guided, customizable tutorials. Helping beginners and enthusiasts learn new skills without frustration (primarily focusing on coffee drinks).",
      duration: "March - May 2025",
      role: "UX Researcher and Designer",
      team: "Tabby, Nika, Jessica, Lacey, and Amanda (me)",
      tools: "Figma, FigJam, Google Forms",
    },
    research: {
      problem: "Users who want to make drinks at home often rely on recipe websites or videos that require constant pausing, rewinding, or scrolling.",
      surveyDescription: "I conducted a survey to understand users' pain points when making drinks at home. The survey was distributed to 100 users, and the results were analyzed using Google Forms.",
      survey: [
        {
          title: "Survey 1",
          description: "What is your experience level with making drinks at home? ",
          image: "/projectImages/DrinkStudio/Survey/Chart 1.png"
        },
        {
          title: "Survey 2",
          description: "Why would you make drinks at home?",
          image: "/projectImages/DrinkStudio/Survey/Chart 2.png"
        },
        {
          title: "Survey 3",
          description: "What do you usually reference when making drinks?",
          image: "/projectImages/DrinkStudio/Survey/Chart 3.png"
        },
      ],
      userPersona: ["/projectImages/DrinkStudio/UserPersona/UserPersona1.png"]
    },
    ideationAndWireframes: {
      sections: [
        {
          title: "FigJam",
          description: "Our team used FigJam to share ideas, brainstorm and ideate. For example, we used it so keep track of features we wanted to include in the app so we can start with sketches.",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/Wireframe1.png"]
        },
        {
          title: "User Flow",
          description: "",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/Wireframe2.png"]
        },
        {
          title: "Branding",
          description: "",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/Wireframe3.png"]
        },
        {
          title: "Sketches",
          description: "",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/Wireframe4.png", "/projectImages/DrinkStudio/IdeationAndWireframing/Wireframe5.png"]
        }
      ]
    },
    newDesigns: {
      images: [
        "/projectImages/DrinkStudio/Designs/Design1.png",
        "/projectImages/DrinkStudio/Designs/Design2.png",
        "/projectImages/DrinkStudio/Designs/Design3.png",
        "/projectImages/DrinkStudio/Designs/Design4.png",
        "/projectImages/DrinkStudio/Designs/Design5.png",
        "/projectImages/DrinkStudio/Designs/Design6.png",
        "/projectImages/DrinkStudio/Designs/Design7.png",
        "/projectImages/DrinkStudio/Designs/Design8.png",
        "/projectImages/DrinkStudio/Designs/Design9.png",
        "/projectImages/DrinkStudio/Designs/Design10.png",
        "/projectImages/DrinkStudio/Designs/Design11.png",
        "/projectImages/DrinkStudio/Designs/Design12.png",
        "/projectImages/DrinkStudio/Designs/Design13.png",
        "/projectImages/DrinkStudio/Designs/Design14.png",
        "/projectImages/DrinkStudio/Designs/Design15.png",
      ]
    },
    testing: {
      results: "We conducted testing with 6 participants, and made small adjustments. Most participants expected to be able to swipe between instructions, so we added in the function to be able to swipe as well as clicking the next button. ",
      successRate: 100,
      systemUsabilityScale: 91.67,
      participants: 6,
      tasks: 9
    }
  },
}