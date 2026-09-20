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
      projectOverview: "Wolf is a side-game golfers play inside Leaderboard. Because its rules differ from standard scoring, we needed to confirm whether new and experienced golfers could interpret the wager/scoring interactions.",
      objectives: [
        "Assess if users can interpret the wager/scoring logic.",
        "Identify sources of confusion in how wager/scoring works.",
        "Gather feedback on interface language and visual cues."
      ],
      methodology: "I recruited golfers through a local golf course, where I got permission to approach players and invite them to participate. I moderated 5 in-person sessions in total: 3 complete sessions and 2 that ended early due to participant availability.",
      duration: "Mar-Apr 2025",
      role: "UX Researcher",
      tools: "Google Docs"
    },
    research: {
      method: "Moderated usability sessions with task-based prompts, supported by interview questions.",
      timeline: "Approximately one month.",
      participants: "5 golfers semi-familiar with Wolf (3 complete sessions, 2 ended early)",
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
        description: "Most participants could explain why points changed after a decision, but several hesitated or second-guessed themselves. Clearer visual cues when points update would help reinforce the scoring logic in the moment."
      }
    ]
  }
};
