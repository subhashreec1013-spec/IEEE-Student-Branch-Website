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
    title: "IEEE Technical Workshop: Embedded Systems with ARM Cortex-M",
    date: "19 September 2026 (Saturday)",
    time: "8:30 PM – 10:00 PM",
    location: "Online",
    category: "Workshop",
    description:
      "A hands-on workshop covering CTF basics, Linux fundamentals, live demonstrations and interactive problem solving.",
  },
  {
    title: "IEEE Day Celebration & Project Exhibition",
    date: "6 October 2026",
    time: "9:30 AM – 5:00 PM",
    location: "University Main Auditorium, SRM IST",
    category: "Flagship",
    description:
      "Student teams demonstrate year-long projects, followed by an IEEE Day address from senior section volunteers.",
  },
  {
    title: "YUVA MEGATHON – 36-Hour National Hackathon",
    date: "28 – 30 September 2026 (Monday – Wednesday)",
    time: "36 Hours (Overnight)",
    location: "SRMIST Academic Block, Tiruchirappalli",
    category: "Hackathon",
    description:
      "National level 36-hour hackathon featuring the IEEE Student Branch Hardware Track, ₹25,000 cash prizes, internship opportunities and hardware kits.",
    registerUrl: "https://unstop.com/o/epOAXwk",
  },
  {
    title: "Guest Lecture: Careers in Semiconductor Design",
    date: "12 November 2026",
    time: "2:00 PM – 4:00 PM",
    location: "ECE Department Seminar Hall, SRM IST",
    category: "Guest Lecture",
    description:
      "An industry practitioner walks through VLSI design flows, verification roles and internship pathways for students.",
  },
  {
    title: "Research Paper Writing Bootcamp",
    date: "28 November 2026",
    time: "11:00 AM – 3:00 PM",
    location: "Central Library Conference Room, SRM IST",
    category: "Bootcamp",
    description:
      "Learn IEEE paper formatting, literature review technique and conference submission strategy with faculty mentors.",
  },
  {
    title: "EPICS in IEEE: Improving Mobility and Inclusivity",
    date: "10 December 2026",
    time: "10:00 AM – 4:30 PM",
    location: "Tech Park Auditorium, SRM IST",
    category: "IEEE EPICS",
    description:
      "SRM Institute of Science and Technology students develop a versatile and affordable electric wheelchair prototype under EPICS in IEEE.",
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
    name: "Aravind Krishnan",
    position: "Student Branch Chair",
    department: "Electronics & Communication Engineering",
    email: "chair.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Meera Sundaram",
    position: "Vice Chair",
    department: "Electrical & Electronics Engineering",
    email: "vicechair.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rohit Verma",
    position: "Secretary",
    department: "Computer Science & Engineering",
    email: "secretary.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Nandhini Raghavan",
    position: "Treasurer",
    department: "Information Technology",
    email: "treasurer.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Karthik Balaji",
    position: "Webmaster",
    department: "Computer Science & Engineering",
    email: "web.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sneha Iyer",
    position: "Technical Head",
    department: "Mechatronics Engineering",
    email: "technical.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Vikram Desai",
    position: "Event Coordinator",
    department: "Electronics & Instrumentation",
    email: "events.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Dr. Lakshmi Narayanan",
    position: "Branch Counsellor",
    department: "Faculty, Dept. of ECE",
    email: "counsellor.ieee@srmist.edu.in",
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
