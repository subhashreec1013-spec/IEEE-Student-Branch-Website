export const SITE = {
  name: "IEEE Student Branch",
  institution: "SRM Institute of Science and Technology, Tiruchirappalli",
  email: "ieeestudentchapter@ist.srmtrichy.edu.in",
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
  { label: "Propose an Event", to: "/event-proposal" as const },
  { label: "Submit a Query", to: "/complaints-queries" as const },
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
  pdfUrl?: string;
  inauguratedBy?: string;
  presidedBy?: string[];
  note?: string;
};

export const EVENTS: EventItem[] = [
  {
    title: "Inauguration Ceremony of the IEEE Student Branch",
    date: "14 November 2026",
    time: "10:30 AM IST",
    location: "501, Seminar Hall — SRM Institute of Science and Technology, Tiruchirappalli",
    category: "Upcoming Event",
    description:
      "SRM Institute of Science and Technology, Faculty of Engineering and Technology, cordially invites you to the Inauguration Ceremony of the IEEE Student Branch. Join us as we embark on a journey of innovation, collaboration, and excellence in technology.",
    pdfUrl: "/posters/upcoming-event-poster.pdf",
    inauguratedBy:
      "Dr. M. Venkateshkumar (Associate Editor IEEE Access Journal, Chairman IEEE PES Madras Section)",
    presidedBy: [
      "Dr. R. Shivakumar — Chairman, SRM Group of Institutions Ramapuram and Tiruchirappalli",
      "Prof.(Dr.) Md. Sameeruddin Khan — Pro Vice Chancellor, SRM Institute of Science and Technology",
      "Prof. Dr. G. Vairavel — Director of Academics and Educational Initiatives, SRM Group of Institutions Tiruchirappalli",
      "Dr. R. Balasundaram — Dean of FET, SRM Institute of Science and Technology",
    ],
    note: "Join us as we embark on a journey of innovation, collaboration, and excellence in technology.",
  },
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
  {
    title: "Women in Engineering Leadership Summit",
    date: "10 December 2026",
    time: "10:00 AM – 4:30 PM",
    location: "Tech Park Auditorium, SRM IST",
    category: "IEEE WIE",
    description:
      "Panels, mentoring circles and workshops celebrating women engineers across academia and industry.",
  },
];

export type TeamMember = {
  name: string;
  position: string;
  department: string;
  email: string;
  linkedin: string;
  isVacant?: boolean;
};

export const EXECUTIVE_MEMBERS: TeamMember[] = [
  {
    name: "Kishanbala Pandiyan",
    position: "Chairperson",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "chair.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/in/kishanbala-pandiyan-889195326/",
  },
  {
    name: "Krittikka Mayilsamy",
    position: "Vice Chairperson",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "vicechair.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/in/krittikka-mayilsamy-2250b4323",
  },
  {
    name: "Yezhilvanan",
    position: "Secretary",
    department: "Electronics & Communication Engineering",
    email: "secretary.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/in/yezhilh13",
  },
  {
    name: "Krishwin",
    position: "Joint Secretary",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "jointsec.ieee@srmist.edu.in",
    linkedin:
      "https://www.linkedin.com/in/krishwin-ds-10a158290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Karthik",
    position: "Treasurer",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "treasurer.ieee@srmist.edu.in",
    linkedin:
      "https://www.linkedin.com/in/karthik-r-612939353?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Archana Sivakumar",
    position: "Webmaster",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "web.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/in/archana-s-765179444/",
  },
];

export const FUNCTIONAL_LEADS: TeamMember[] = [
  {
    name: "Ch Shanmukha Venkata Lakshman",
    position: "Technical Lead",
    department: "Mechatronics Engineering",
    email: "technical.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Gowtham A",
    position: "Event Organiser",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "events.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "K R Vaishak",
    position: "Research and Innovation Lead",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "research.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lakshana Arulaprakasam",
    position: "Social Media Incharge",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "external.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Smita A",
    position: "Membership and External Relation Coordinator",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "social.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ramsaran M",
    position: "Operations Lead",
    department: "Mechanical Engineering",
    email: "internal.ieee@srmist.edu.in",
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

export const TEAM: TeamMember[] = [
  ...EXECUTIVE_MEMBERS,
  ...FUNCTIONAL_LEADS.filter((m) => !m.isVacant),
];

export const WEB_TEAM: TeamMember[] = [
  {
    name: "Bharathik RS",
    position: "Core Member",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "web.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rutuvaani D",
    position: "Core Member",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "web.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Subha Shree C",
    position: "Core Member",
    department: "Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning",
    email: "web.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
];

export const TREASURY_TEAM: TeamMember[] = [
  {
    name: "Priyadharshini M",
    position: "Core Member",
    department: "Artificial Intelligence & Machine Learning (AIML - C Section, 2nd Year)",
    email: "treasury.ieee@srmist.edu.in",
    linkedin: "https://www.linkedin.com/",
  },
];

export type NewsDetail = {
  venue?: string;
  time?: string;
  prizePool?: string;
  teamSize?: string;
  registrationFee?: string;
  eligibility?: string;
  organizers?: string;
  phases?: string[];
  contact?: string;
  contactPhone?: string;
  highlights?: string[];
  registerUrl?: string;
  pdfUrl?: string;
};

export type NewsItem = {
  id?: string;
  title: string;
  date: string;
  category: string;
  description: string;
  isFeatured?: boolean;
  tagline?: string;
  details?: NewsDetail;
};

export const NEWS: NewsItem[] = [
  {
    id: "innovate-x",
    title: "INNOVATE X — Build. Showcase. Inspire.",
    date: "15 October 2026",
    category: "Invitation",
    tagline: "A platform where innovation meets technology and creativity",
    description:
      "IEEE Student Branch X NEX-COMM Community, SRM IST Tiruchirappalli cordially invites you to INNOVATE X. Join us in celebrating the talent, ideas, and hard work of our young innovators at Academic Block IST 502 & 518.",
    details: {
      venue: "IST 502, 518 Academic Block, SRMIST Tiruchirappalli",
      time: "9:00 AM – 5:00 PM (15th Oct 2026)",
      organizers: "IEEE Student Branch (STB60221343) × NEX-COMM Community",
      highlights: [
        "Chief Guest: Dr. R. Shivakumar (Chairman, SRM Group of Institutions)",
        "Chief Guest: Prof. (Dr.) Md. Saameeruddin Khan (Pro Vice Chancellor, SRM IST)",
        "Chief Guest: Prof. Dr. G. Vairavel (Director of Academics & Educational Initiatives)",
        "Chief Guest: Dr. R. Balasundaram (Dean-FET, SRM IST Tiruchirappalli)",
        "Core Pillars: Innovation · Collaboration · Practical Learning",
        "Your Presence Will Inspire Our Innovators!",
      ],
    },
  },
  {
    id: "tensor26",
    title: "TENSOR'26 — AI Curated Software Development",
    date: "16–17 April 2026",
    category: "Flagship Hackathon",
    tagline: "From Prompt to Product: Architecting Autonomous Software for Global Challenges",
    description:
      "SRMIST School of Computing – Department of AIML, in prestigious association with IEEE Student Branch (STB60221343), ACM Student Chapter, and IIC, organizes TENSOR'26. A 24-hour national hackathon with a ₹56,000 cash prize pool.",
    details: {
      venue: "SRMIST Academic Block, Tiruchirappalli Campus",
      time: "24-Hour Continuous Sprint (16–17 April 2026)",
      prizePool: "₹56,000 Total (1st: ₹25,000 · 2nd: ₹15,000 · 3rd: ₹10,000 + Special Awards)",
      teamSize: "1 to 4 Members per team",
      registrationFee:
        "₹1,000 per team (Includes Welcome Kit + Official Certificates + Refreshments)",
      eligibility: "Open to all UG/PG students of all engineering & science streams",
      organizers:
        "Department of AIML · IEEE Student Branch · ACM Chapter · Institution's Innovation Council (IIC)",
      phases: [
        "Phase 1: AI-Based Development & Prompt Engineering",
        "Phase 2: Manual Debugging & Model Fine-Tuning",
        "Phase 3: Cloud Deployment & Live Evaluation",
      ],
      contact: "Mr. K.S. Karthik, Chairperson, IEEE Students Branch",
      contactPhone: "+91 6381275583",
      registerUrl: "#register",
      pdfUrl: "/event-poster.pdf",
      highlights: [
        "24-Hour continuous software development hackathon",
        "Theme: AI Curated Software Development & Autonomous Systems",
        "Aligned with UN Sustainable Development Goals (SDGs)",
        "Phase-based evaluation by academic and industry judges",
        "Welcome kit, certificates, and refreshments for all participants",
      ],
    },
  },
  {
    id: "digital-security",
    title: "Digital Security Workshop by SFLC Cyber Law Experts",
    date: "22 August 2025",
    category: "Workshop",
    description:
      "A focused hands-on workshop on cyber law, digital privacy, and security protocols conducted by legal and cybersecurity experts from SFLC.in and FOSS United in IST 501.",
    details: {
      venue: "IST 501, SRMIST Tiruchirappalli",
      time: "11:00 AM onwards",
      organizers: "IEEE Student Branch · SFLC.in · FOSS United · YUVA",
      registrationFee: "Free Registration",
      highlights: [
        "Focused workshop on cyber law, personal privacy, and digital rights",
        "Led by expert attorneys and security practitioners from Software Freedom Law Center",
        "Hands-on insights into cyber hygiene and defensive digital practices",
      ],
    },
  },
  {
    id: "webforge",
    title: "Inauguration Ceremony of WebForge Technical Club",
    date: "18 September 2026",
    category: "Club Launch",
    description:
      "Department of AIML and IEEE Student Branch celebrated the grand inauguration of WebForge Technical Club in IST 301 with eminent tech founders and professors.",
    details: {
      venue: "IST 301, SRMIST Tiruchirappalli",
      time: "10:00 AM onwards",
      organizers: "Department of AIML · IEEE Student Branch · School of Computing",
      highlights: [
        "Chief Guest: Mr. Ravishankar Rajagopalan (Founder, augurAI)",
        "Chief Guest: Dr. S.R. Balasundaram (Professor HAG, NIT Trichy)",
        "Guest of Honor: Mr. Varun Aditya (AI Engineer, iNextlabs)",
        "Presided by Pro-VC & Dean FET, SRMIST Tiruchirappalli",
      ],
    },
  },
  {
    id: "brain-insights",
    title: "Brain Data Insights: Architecting the Human Signal",
    date: "04 May 2026",
    category: "Neurotech",
    description:
      "Innoflux and DataForge presented a specialized masterclass on EEG recording, signal processing algorithms, 3D brain visualization, and scientific Python tools in IST 512.",
    details: {
      venue: "IST 512, SRMIST Tiruchirappalli",
      time: "10:00 AM onwards",
      organizers: "Innoflux × DataForge · SRM Student Club · IIC",
      registrationFee: "Open to all students (E-Certificates for all participants)",
      highlights: [
        "EEG data collection and bio-signal processing",
        "Real-time 3D signal visualization",
        "Python neuro-toolkits and analytical pipelines",
      ],
    },
  },
  {
    id: "data-canvas",
    title: "Data Canvas 2026: SDG Research and Innovation Pitch",
    date: "15 October 2026",
    category: "Innovation Pitch",
    description:
      "Department of Data Science & Big Data Analytics and Data Forge Club hosted an SDG-focused innovation pitch. Top 18 teams presented live 2.5-minute pitches before jury panels in IST 119.",
    details: {
      venue: "IST 119, SRMIST Tiruchirappalli",
      time: "3:00 PM to 5:00 PM",
      organizers: "Data Forge Club · Department of Data Science",
      teamSize: "2 Members per team",
      highlights: [
        "Transforming SDG challenges into viable data solutions",
        "Top 18 teams shortlisted for live stage pitches",
        "Free industry workshop access, swags, and goodies for winners",
      ],
    },
  },
  {
    id: "data-wars",
    title: "Data Wars: The 6-Hour Big Data Science Challenge",
    date: "30 September 2026",
    category: "Competition",
    description:
      "An intense 6-hour data science competition across 4 demanding phases: Clean, Visualize, Predict, and Present with a ₹10,000 prize pool in IST 602.",
    details: {
      venue: "SRM IST 602, Tiruchirappalli",
      prizePool: "₹10,000 Prize Pool",
      teamSize: "1 to 4 Members per team",
      highlights: [
        "6 hours duration spanning 4 rigorous analytical phases",
        "Clean, Visualize, Predict, and Present workflow",
        "Live judging and cash rewards for top performers",
      ],
    },
  },
  {
    id: "data-spark",
    title: "Data Spark: Foundations of Data Science & Big Data",
    date: "22 April 2026",
    category: "Inaugural Session",
    description:
      "An insightful foundational session covering Big Data Analytics, Business Analytics, and Predictive Machine Learning pipelines in IST-101.",
    details: {
      venue: "IST-101, SRMIST Tiruchirappalli",
      time: "11:30 AM – 1:30 PM",
      organizers: "Data Forge Club · SRM Student Club · IIC",
      highlights: [
        "Comprehensive overview of data science stacks",
        "Predictive modeling and enterprise analytics primer",
        "Q&A session with student and faculty mentors",
      ],
    },
  },
  {
    id: "award",
    title: "Branch Recognised as Outstanding Student Branch by Madras Section",
    date: "30 June 2026",
    category: "Award",
    description:
      "The recognition acknowledges sustained membership growth, technical activity volume and community outreach across the year.",
  },
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
    href: "https://www.linkedin.com/company/ieeesrmisttrichystudentbranch/",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/ieee_sb_srmist_try?stkn=YTJ2MXlnNXJ2amZx",
  },
];
