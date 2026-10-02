export const SITE = {
  name: "IEEE Student Branch",
  institution: "SRM Institute of Science and Technology,Tiruchirapalli",
  email: "ieee.sb@srmist.edu.in",
  phone: "1800 202 4565",
  address:
    "SRM Institute of Science and Technology, SRM Nagar, Near Samayapuram, Tiruchirappalli - 621 105, Tamil Nadu, India",
};

export const NAV = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Events", to: "/events" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Team", to: "/team" as const },
  { label: "Activities", to: "/activities" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "News", to: "/news" as const },
  { label: "Contact", to: "/contact" as const },
];

export type Featured = {
  category: string;
  title: string;
  description: string;
  cta: string;
  to: string;
};

export const FEATURED: Featured[] = [
  {
    category: "Events",
    title: "Upcoming Events",
    description:
      "Technical workshops, industry talks and flagship events hosted by the branch through the academic year.",
    cta: "View Events",
    to: "/events",
  },
  {
    category: "Activities",
    title: "Student Activities",
    description:
      "Chapter meetups, project teams, hackathons and community outreach driven entirely by student volunteers.",
    cta: "Explore",
    to: "/activities",
  },
  {
    category: "IEEE EPICS",
    title: "Improving Mobility and Inclusivity",
    description:
      "SRM Institute of Science and Technology students develop a versatile and affordable electric wheelchair.",
    cta: "Learn More",
    to: "/activities",
  },
  {
    category: "Membership",
    title: "IEEE Opportunities",
    description:
      "Scholarships, IEEE Xplore access, conference travel support and global volunteering programmes.",
    cta: "Discover",
    to: "/membership",
  },
];

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image?: string;
  registerUrl?: string;
};

export const EVENTS: EventItem[] = [
  {
    title: "Engineer to Administrator",
    date: "September / October 2026 (Tentative — exact date to be announced)",
    time: "To be announced",
    location: "SRMIST FET, Tiruchirappalli",
    category: "Public service",
    description:
      "A career-awareness and guidance programme in collaboration with KingMakers IAS Academy – Trichy Branch and the SRMIST FET Placement Cell. Primary focus: UPSC Engineering Services Examination (ESE). Also covers UPSC CSE, TNPSC, SSC, CAT/MBA and other competitive pathways. The programme connects engineering education with public service, administration, government careers and alternative career routes. Expected outcome: students gain clarity on competitive-exam opportunities and a practical roadmap for choosing and preparing for their career path.",
  },
  {
    title: "IEEE Research Route",
    date: "October 2026 (Exact date to be announced)",
    time: "To be announced",
    location: "SRMIST Tiruchirappalli Campus",
    category: "IEEE Research Route",
    description:
      "A research-orientation programme explaining how students can move from an engineering idea to published research. Topics include identifying research problems, literature review, methodology, writing a research paper, IEEE conferences, journal publication, ethical research practices and presenting research work. Expected outcome: students are encouraged to begin research early and understand the pathway from project idea to conference or journal publication.",
  },
];

export type TeamMember = {
  name: string;
  position: string;
  department: string;
  email: string;
  linkedin: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Lakshmi Narayanan",
    position: "Branch Counsellor",
    department: "Faculty, Dept. of ECE",
    email: "counsellor.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kishanbala Pandiyan",
    position: "Chairperson",
    department: "Electronics & Communication Engineering",
    email: "chair.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Krittikka Mayilsamy",
    position: "Vice Chairperson",
    department: "Electrical & Electronics Engineering",
    email: "vicechair.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Yezhilvanan",
    position: "Secretary",
    department: "Computer Science & Engineering",
    email: "secretary.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Krishwin",
    position: "Joint Secretary",
    department: "Computer Science & Engineering",
    email: "jointsec.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Karthik",
    position: "Treasurer",
    department: "Information Technology",
    email: "treasurer.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Archana S",
    position: "Webmaster",
    department: "Computer Science & Engineering",
    email: "web.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ch Shanmukha Venkata Lakshman",
    position: "Technical Head",
    department: "Mechatronics Engineering",
    email: "technical.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Gowtham A",
    position: "Event Organizer",
    department: "Electronics & Communication Engineering",
    email: "events.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "P.R Akhil",
    position: "Design Head",
    department: "Computer Science & Engineering",
    email: "design.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lakshana Arulaprakasam",
    position: "External Affairs",
    department: "Electronics & Communication Engineering",
    email: "external.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Smita A",
    position: "Social Media Manager",
    department: "Information Technology",
    email: "social.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ramsaran M",
    position: "Internal Affairs",
    department: "Mechanical Engineering",
    email: "internal.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
];

export type NewsItem = {
  title: string;
  date: string;
  category: string;
  description: string;
};

export const NEWS: NewsItem[] = [
  {
    title: "IEEE Student Branch Successfully Conducts Technical Workshop",
    date: "22 August 2026",
    category: "Workshop",
    description:
      "Over 180 students completed the two-day workshop on IoT prototyping, ending with 24 working demonstrations judged by faculty.",
  },
  {
    title: "New Leadership Team Announced for 2026–27",
    date: "05 August 2026",
    category: "Announcement",
    description:
      "The branch welcomes its newly elected executive committee following the annual volunteer elections held in July.",
  },
  {
    title: "Upcoming Innovation Challenge Opens for Registration",
    date: "18 July 2026",
    category: "Competition",
    description:
      "Teams of up to four can register for the Innovation Challenge, with prototypes shortlisted for the Madras Section showcase.",
  },
  {
    title: "Branch Recognised as Outstanding Student Branch by Madras Section",
    date: "30 June 2026",
    category: "Award",
    description:
      "The recognition acknowledges sustained membership growth, technical activity volume and community outreach across the year.",
  },
  {
    title: "Signal Processing Society Chapter Inaugurated",
    date: "12 June 2026",
    category: "Chapter",
    description:
      "A new SPS chapter joins the branch, opening dedicated sessions on DSP, audio engineering and computer vision.",
  },
  {
    title: "Student Paper Accepted at Regional IEEE Conference",
    date: "02 June 2026",
    category: "Research",
    description:
      "A third-year student team had its paper on low-power sensor networks accepted for oral presentation.",
  },
];

export type Activity = {
  title: string;
  description: string;
  icon: string;
};

export const ACTIVITIES: Activity[] = [
  {
    title: "Technical Workshops",
    icon: "Wrench",
    description: "Hands-on sessions on hardware, firmware and modern software tooling.",
  },
  {
    title: "Hackathons",
    icon: "Code2",
    description: "Overnight build sprints solving real engineering and social problems.",
  },
  {
    title: "Coding Competitions",
    icon: "Terminal",
    description: "Algorithmic contests and interview-style challenges every semester.",
  },
  {
    title: "Seminars",
    icon: "Presentation",
    description: "Focused technical seminars led by faculty and senior volunteers.",
  },
  {
    title: "Guest Lectures",
    icon: "Mic",
    description: "Practitioners from industry and research share applied experience.",
  },
  {
    title: "Webinars",
    icon: "Video",
    description: "Online sessions connecting members with global IEEE speakers.",
  },
  {
    title: "Project Exhibitions",
    icon: "Lightbulb",
    description: "Annual showcase of student prototypes, judged and documented.",
  },
  {
    title: "Career Development",
    icon: "GraduationCap",
    description: "Resume clinics, mock interviews and internship guidance.",
  },
  {
    title: "Community Service",
    icon: "HeartHandshake",
    description: "STEM outreach in local schools and technology-for-good drives.",
  },
  {
    title: "Innovation Activities",
    icon: "Rocket",
    description: "Idea labs, design thinking sprints and patent awareness sessions.",
  },
];

export const RESOURCES = [
  {
    title: "CSS Libraries",
    description:
      "Resources and styling tools used to maintain a consistent visual experience across every branch page.",
  },
  {
    title: "JavaScript Libraries",
    description:
      "Interactive components and functionality used across the website, from the slider to the contact form.",
  },
  {
    title: "Customization",
    description:
      "Information about customizing the IEEE Student Branch website content, sections and branding.",
  },
  {
    title: "Header",
    description:
      "Information about the website header, branch identity and the primary navigation bar.",
  },
  {
    title: "Menus",
    description: "Primary navigation and footer navigation, including the accessible mobile menu.",
  },
  {
    title: "Footer",
    description: "Important links, social media channels and official IEEE policy information.",
  },
  {
    title: "Custom Functions",
    description:
      "Additional website functionality and integrations maintained by the webmaster team.",
  },
];

export const MEMBERSHIP_BENEFITS = [
  "Technical knowledge through IEEE Xplore and society publications",
  "Networking opportunities with engineers across 160+ countries",
  "Workshops and events hosted throughout the academic year",
  "Leadership opportunities as a branch or chapter volunteer",
  "Career development, mentoring and internship guidance",
  "Access to IEEE resources, standards and student scholarships",
];

export const SOCIALS = [
  {
    label: "LinkedIn",
    icon: "Linkedin",
    href: " https://www.linkedin.com/company/ieeesrmisttrichystudentbranch/",
  },
  { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/ieee_sb_srmist_try?stkn=YTJ2MXlnNXJ2amZx" },
];
