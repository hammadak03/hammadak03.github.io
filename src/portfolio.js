/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Hammad Ahmed",
  title: "Hi all, I'm Hammad",
  subTitle: emoji(
    "A passionate Computer Systems Engineer & Mobile App Developer 📱 specializing in building clean, scalable applications with Flutter and React Native."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TkxXELQ7XW6IcPeeWi2tP_OQ4FNmA71h/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hammadak03",
  linkedin: "https://linkedin.com/in/hammadak03",
  gmail: "hammadak350@gmail.com",
  instagram: "https://instagram.com/hammadak03",
  facebook: "https://facebook.com/hammadak03",
  twitter: "https://x.com/hammadak03",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MOBILE APP DEVELOPER WHO LOVES UNDERSTANDING THE WHOLE SYSTEM",
  skills: [
    emoji(
      "⚡ Develop highly interactive cross-platform mobile applications using Flutter & React Native"
    ),
    emoji(
      "⚡ Build robust backend integrations using Node.js, Express.js, and FastAPI"
    ),
    emoji(
      "⚡ Integrate third-party services like Firebase, REST APIs, and Payment Gateways"
    )
  ],

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "devicon-dart-plain"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "devicon-react-original"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "devicon-firebase-plain"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "devicon-github-original"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "devicon-html5-plain"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Mehran University of Engineering and Technology",
      logo: require("./assets/images/muetLogo.png"), 
      subHeader: "Bachelor of Engineering in Computer Systems Engineering",
      duration: "November 2021 - November 2025",
      desc: "Graduated with a CGPA of 3.61/4.",
      descBullets: [
        "Hardware & Systems Coursework: Embedded Systems, Microprocessor & Interfacing, Digital Logic Design, Signals & Systems, and Internet of Things.",
        "Software Engineering Core: Object Oriented Programming, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks.",
        "Advanced Computing Coursework: Artificial Intelligence, Digital Image Processing, Web Engineering, and Mobile Application Development.",
        "Extracurriculars: Ambassador for NIC Hyderabad, Speaker at Flutter 101 Workshop."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Mobile App Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend / API Integration",
      progressPercentage: "70%"
    },
    {
      Stack: "System Architecture",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Mobile App Developer",
      company: "Gexton",
      companylogo: require("./assets/images/gextonLogo.png"), // ADD A LOGO TO src/assets/images
      date: "February 2026 – Present",
      desc: "Developing cross-platform mobile applications and building an AI-integrated WhatsApp chatbot for student query management."
    },
    {
      role: "React Native Intern",
      company: "Chaloo Technologies Pvt Limited",
      companylogo: require("./assets/images/chalooLogo.png"), // ADD A LOGO TO src/assets/images
      date: "October 2025 – November 2025",
      desc: "Developed an E-bike rental booking flow, integrated payment gateways, and implemented an in-app chatbot using real-time APIs.",
      descBullets: [
        "Built a client-side notification read-status system to reduce backend dependency."
      ]
    },
    {
      role: "Flutter Developer Intern",
      company: "Indus Technetronic Private Limited (GRIFTX)",
      companylogo: require("./assets/images/indusLogo.png"), // ADD A LOGO TO src/assets/images
      date: "May 2025 – June 2025",
      desc: "Improved UI maintainability by centralizing theme logic and integrated REST APIs for authentication and live data rendering.",
      descBullets: [
        "Enabled full dynamic theming (system, light, dark) across the application."
      ]
    },
    {
      role: "Flutter Fellow",
      company: "Bytewise Limited",
      companylogo: require("./assets/images/bytewiseLogo.png"), // ADD A LOGO TO src/assets/images
      date: "June 2024 – September 2024",
      desc: "Completed an intensive fellowship focused on advanced UI development, state management, and backend integration. Recognized as a Top Fellow."
    }
  ]
};

// Open Source Section to View Your Github Pinned Projects

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME MAJOR APPS AND SYSTEMS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/spotlessLogo.png"), // ADD A LOGO TO src/assets/images
      projectName: "Spotless Laundry",
      projectDesc:
        "An On-Demand Laundry App for a Dubai-based client featuring Stripe payments and Google Maps-based geocoding.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.superspotlesslaundry.app"
        }
      ]
    },
    {
      image: require("./assets/images/weddingLogo.png"), // ADD A LOGO TO src/assets/images
      projectName: "Lienkie's Wedding Guide",
      projectDesc:
        "A wedding planner app featuring an Inspiration Board, consultation bookings, and scheduled Firebase notifications.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.lovelienkie.app"
        }
      ]
    },
    {
      image: require("./assets/images/truemedLogo.png"), // ADD A LOGO TO src/assets/images
      projectName: "TrueMed (FYP)",
      projectDesc:
        "A real-time medicine verification system using a two-stage Computer Vision pipeline integrated with a Flutter app via FastAPI.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/hammadak03/truemed_app"
        }
      ]
    },
    {
      image: require("./assets/images/hairaiLogo.png"), // ADD A LOGO TO src/assets/images
      projectName: "Hair AI App",
      projectDesc:
        "A mobile application utilizing AI to recommend products based on hair condition and scalp images.",
      footerLink: [
        {
          name: "In Development",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Recognitions and certifications from my development journey.",
  achievementsCards: [
    {
      title: "Top Fellow",
      subtitle:
        "Recognized for outstanding performance in the Bytewise Limited advanced Flutter fellowship.",
      image: require("./assets/images/bytewiseLogo.png"), // ADD A LOGO TO src/assets/images
      imageAlt: "Bytewise Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://linkedin.com/in/hammadak03"
        }
      ]
    },
    {
      title: "Speaker - Flutter 101 Workshop",
      subtitle:
        "Led a beginner-friendly session teaching the fundamentals of Flutter and Dart.",
      image: require("./assets/images/flutterLogo.png"), // ADD A LOGO TO src/assets/images
      imageAlt: "Flutter Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section (Hidden)

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Turned off
};

// Talks Sections (Hidden)

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Turned off
};

// Podcast Section (Hidden)

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Turned off
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a mobile app project or just want to say hi? My inbox is open.",
  number: "+92 317 9772255",
  email_address: "hammadak350@gmail.com"
};

// Twitter Section (Hidden)

const twitterDetails = {
  userName: "hammadak03",
  display: false // Turned off
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
