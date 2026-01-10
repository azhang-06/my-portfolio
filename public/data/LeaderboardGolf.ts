import { LeaderboardGolfProject } from "@/lib/types/LeaderboardGolf";

export const LeaderboardGolf: LeaderboardGolfProject = {
  id: "4",
  slug: "leaderboard-golf",
  projectType: "Academic, Volunteer, Mobile App Design",
  projectName: "Leaderboard Golf",
  role: "UX Researcher",
  dateInformation: {
    startDate: "March",
    endDate: "April 2025"
  },
  title: "Do golfers understand the \"wolf\" scoring/wager flow?",
  description: "Leaderboard Golf, a platform that allows you to host games, keep scores and wagers, and posting after the round is over.",
  mainImage: "/projectImages/LeaderboardGolf/CoverImage.png",
  projectSub: {
    overview: {
      projectOverview: "Wolf is a side-game golfers play inside Leaderboard. Because its rules differ from standard scoring, we needed to confirm whether new and experienced golfers could interpret the wage/scoring interactions.",
      objectives: [
        "Assess if users can interpret the wage/scoring logic.",
        "Identify sources of confusion in how wage/scoring works.",
        "Gather feedback on interface language and visual cues."
      ],
      methodology: "I reached out to participants that play golf, and got permission from nearby golf course to interview players and ask if they would like to participate in the testing. Overall, we had about 3-5 participants.",
      duration: "Mar-Apr 2025",
      role: "UX Researcher",
      tools: "Google Docs"
    },
    research: {
      method: "Moderated usability sessions with task-based prompts, supported by interview questions.",
      timeline: "Approximately one month.",
      participants: "3-5 (golfers that are semi-familiar with wolf)",
      tasks: "Participants completed representative flows tied to starting a Wolf round and interpreting point changes.",
      successCriteria: [
        "Participants can start a Wolf game without assistance.",
        "Participants can explain why points changed after a decision."
      ]
    },
    keyFindings: [
      {
        title: "Participants struggled to start a game",
        severity: "High",
        description: "Participants were unable to start a game due to not knowing how to get to the flow and needed guidance. Design suggestion: create a flow that can easily allow users to start any game."
      },
      {
        title: "Brief description of how the game works",
        severity: "Medium",
        description: "Some participants know of the game \"wolf,\" but not quite familiar with it. Participants would like to be able to read a short brief description."
      },
      {
        title: "Comprehension of the point system was acceptable, but can be improved",
        severity: "Medium",
        description: ""
      }
    ]
  }
};
