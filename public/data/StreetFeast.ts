import { StreetFeastProject } from "@/lib/types/StreetFeast";

export const StreetFeast: StreetFeastProject = {
  id: "3",
  slug: "streetfeast",
  projectType: "Mobile App Design",
  projectName: "StreetFeast",
  role: "UX Researcher & UX Designer",
  dateInformation: {
    startDate: "August 2025",
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
        "Conducted discovery research (69 survey responses) to validate the need for a food truck discovery tool.",
        "Designed the customer and vendor experiences in Figma while development was in progress.",
        "Collaborated with developers to iterate on designs during implementation.",
        "Tested flows with food truck owners and customers to identify usability issues.",
        "Refined designs based on feedback and testing insights.",
      ],
      tools: "Figma, Google Forms, Canva",
      duration: "August 2025 - Present",
      role: "UX Researcher & UX Designer",
    },
    research: {
      method:
        "To assess whether a food truck discovery tool was worth building, an exploratory survey was distributed locally. The goal was to understand how people currently find food trucks and how they track schedules. Alongside this, we ran a separate food truck vendor survey to learn how vendors reach their audiences. Across both surveys we collected 69 responses.",
      customerResponses: {
        description:
          "Responses revealed that the majority rely on social media, word of mouth, events/festivals, and driving by. Many participants described schedules and hours as inconsistent and difficult to track. The survey was not intended to inform interface decisions; it was to validate the discovery problem and common pain points.\n\nThese findings helped us move forward with design and development, while more detailed usability decisions were addressed through iteration and testing later in the process.",
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
          "Vendors were given a separate survey to evaluate how they reach their customers. Their main pain point is relying on social media to share information: posting across multiple platforms and struggling to get the word out.",
        image: "/projectImages/StreetFeast/Research/VendorResponses.png",
      },
      keyInsights: [
        "Discovery is a manual search \u2014 there is no way of knowing about a truck unless you hear it by word of mouth, happen to see a post on social media, or drive by.",
        "Inconsistent and difficult to track \u2014 customers reported that schedules and hours are often inconsistent, and when something changes they usually don't see it until after the post goes up on social media.",
      ],
    },
    design: {
      wireframing: {
        description:
          "While the research was in progress, I drafted wireframes for a few key screens, mainly covering the flow from onboarding to viewing a food truck's profile.",
        image: "/projectImages/StreetFeast/Design/Wireframes.png",
      },
      highFidelity: {
        description:
          "After discussing the wireframes with the developers, I moved into high-fidelity designs, made some structural changes, and added color. As the app was being developed, I continued refining the designs based on how they fit on different screen sizes.",
        images: [
          {
            image: "/projectImages/StreetFeast/Design/HighFidelity1.png",
            alt: "High-fidelity wireframes for the onboarding and home screens",
          },
          {
            image: "/projectImages/StreetFeast/Design/HighFidelity2.png",
            alt: "High-fidelity wireframes for the food truck profile screens",
          },
          {
            image: "/projectImages/StreetFeast/Design/HighFidelity3.png",
            alt: "High-fidelity wireframes for the schedule and menu screens",
          },
        ],
      },
      finalDesigns: [
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen01.png",
          alt: "Splash screen with the StreetFeast food truck logo and tagline 'Discover & Taste'",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen02.png",
          alt: "Welcome screen asking whether the user wants to find food trucks or is a food truck owner",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen03.png",
          alt: "Sign in or register screen with a phone number field for SMS login",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen04.png",
          alt: "Enter code screen for the 6-digit SMS verification code",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen05.png",
          alt: "Create your account form with first name, last name, phone number, and email fields",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen06.png",
          alt: "Notification permission screen explaining alerts for nearby trucks and schedule changes",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen07.png",
          alt: "Location permission screen explaining nearby truck discovery and real-time updates",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen08.png",
          alt: "NorCal Crepe food truck profile showing rating, address, and the weekly schedule tab",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen09.png",
          alt: "NorCal Crepe food truck profile on the Menu tab listing savory crepes with prices",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen10.png",
          alt: "Home screen with search bar and sections for featured, nearby, and new trucks plus nearby events",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen11.png",
          alt: "Notifications screen listing today's and yesterday's schedule updates from followed trucks",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen12.png",
          alt: "My Profile screen with account information and notification preference toggles",
        },
        {
          image: "/projectImages/StreetFeast/FinalDesigns/Screen13.png",
          alt: "My Profile screen in edit mode with editable account fields and Save/Discard buttons",
        },
      ],
    },
    testing: {
      results:
        "I conducted usability testing with 10 participants, a mix of students at Western Kentucky University and local food truck owners, and made small adjustments based on the results. The goal was to evaluate whether the flow allowed users to complete onboarding, easily search for food trucks, and view a truck's schedule and menu.",
      metrics: [
        { value: "100%", label: "Total Success Rate" },
        { value: "10", label: "Participants" },
        { value: "9", label: "Tasks" },
      ],
      download: {
        heading: "Download the StreetFeast App",
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/streetfeast/id6749815073",
          },
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.streetfeast.streetfeast&hl=en_US",
          },
        ],
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
