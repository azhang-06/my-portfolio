import { DrinkStudioProject } from "@/lib/types/DrinkStudio";

export const DrinkStudio: DrinkStudioProject = {
  id: "2",
  slug: "drink-studio",
  projectType: "Academic, Mobile App Design",
  projectName: "Drink Studio",
  role: "UX Researcher & UX Designer",
  dateInformation: {
    startDate: "Mar",
    endDate: "May 2025"
  },
  title: "Learn to craft delicious drinks at home",
  description: "A mobile app that empowers users to customize and make at-home drinks through step-by-step tutorials.",
  mainImage: "/projectImages/DrinkStudio/CoverImage.png",
  projectSub: {
    overview: {
      projectOverview: "DrinkStudio is a mobile app designed to help users learn to make drinks at home through clear, step-by-step tutorials and customizable recipe guides. Unlike traditional recipe videos or web pages that require pausing, scrolling, or rewinding, DrinkStudio offers a seamless, hands-on learning experience that keeps users focused on the process. It's built for home baristas and beginners alike.",
      goal: "To create an easy-to-use app that teaches users how to make drinks through guided, customizable tutorials. Helping beginners and enthusiasts learn new skills without frustration (primarily focusing on coffee drinks).",
      duration: "Mar-May 2025",
      role: "UX Researcher & UX designer",
      tools: "Figma, FigJam, Google Forms",
    },
    research: {
      problem: "Users who want to make drinks at home often rely on recipe websites or videos that require constant pausing, rewinding, or scrolling.",
      surveyDescription: "We began with a short survey to validate assumptions about user motivations and identify the main challenges of at-home drink making. The survey was completed by 8 participants, most were students or young professionals who regularly enjoy coffees and teas.",
      survey: [
        {
          title: "Experience Level",
          description: "What is your experience level with making drinks at home?",
          image: "/projectImages/DrinkStudio/Survey/PieChart.svg"
        },
        {
          title: "Motivation",
          description: "Why would you make drinks at home?",
          image: "/projectImages/DrinkStudio/Survey/Chart1.png"
        },
        {
          title: "References",
          description: "What do you usually reference when making drinks?",
          image: "/projectImages/DrinkStudio/Survey/Chart2.png"
        },
      ],
      keyInsights: [
        "Users primarily make drinks to save money and try new recipes.",
        "Most rely on online recipes and experimenting on their own.",
        "Beginners may feel less confident."
      ],
      researchQuestions: [
        "What motivates people to make drinks at home?",
        "What pain points they face when following recipes and tutorials?",
        "How skilled and confident they are?"
      ],
      userPersona: []
    },
    ideationAndWireframes: {
      sections: [
        {
          title: "FigJam",
          description: "Our team used FigJam to share ideas, brainstorms and ideate. For example, we used it so keep track of features we wanted to include in the app so we can start with sketches.",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/FigJam.png"]
        },
        {
          title: "User Flow",
          description: "The user flow helps us identify what screens needs to be created and how the user might navigate through the app.",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/UserFlow.png"]
        },
        {
          title: "Sketches",
          description: "Quick initial sketches to help generate ideas on how we would like the interface to look.",
          image: ["/projectImages/DrinkStudio/IdeationAndWireframing/Sketch1.png", "/projectImages/DrinkStudio/IdeationAndWireframing/Sketch2.png"],
          credits: ["Created by Tabby", "Created by Amanda"]
        }
      ]
    },
    newDesigns: {
      images: [
        "/projectImages/DrinkStudio/Designs/Splash.png",
        "/projectImages/DrinkStudio/Designs/Home.png",
        "/projectImages/DrinkStudio/Designs/HomeBrews.png",
        "/projectImages/DrinkStudio/Designs/HomeBrews2.png",
        "/projectImages/DrinkStudio/Designs/HomeBrews3.png",
        "/projectImages/DrinkStudio/Designs/HomeBrews4.png",
        "/projectImages/DrinkStudio/Designs/HomeBrews5.png",
        "/projectImages/DrinkStudio/Designs/HomeBrews12.png",
        "/projectImages/DrinkStudio/Designs/EnjoyEndScreen.png",
        "/projectImages/DrinkStudio/Designs/FavoritesMine.png",
        "/projectImages/DrinkStudio/Designs/BrowseRecipes.png",
        "/projectImages/DrinkStudio/Designs/Recipe.png",
        "/projectImages/DrinkStudio/Designs/FriendList.png",
        "/projectImages/DrinkStudio/Designs/FriendListProfile.png",
        "/projectImages/DrinkStudio/Designs/UserProfile.png",
      ]
    },
    testing: {
      results: "We conducted testing with 6 participants, and made small adjustments. The goal of our usability test was to evaluate whether the flow allowed users to complete drink tutorials without needing to pause or backtrack.",
      nextStep: "Majority of the participants expected to be able to swipe between instructions, so we added in the function to be able to swipe as well as clicking the next button.",
      successRate: 100,
      systemUsabilityScale: 91.67,
      participants: 6,
      tasks: 9
    }
  },
}