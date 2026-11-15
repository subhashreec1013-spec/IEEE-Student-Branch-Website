# IEEE Student Branch Website
### SRM Institute of Science and Technology, Tiruchirappalli


<p align="center">
  <a href="https://www.ieeetsrm.in/">Live Website</a> |
  <a href="https://github.com/subhashreec1013-spec/IEEE-Student-Branch-Website">GitHub Repository</a>
</p>

---

## About the Project

The IEEE Student Branch Website of SRM Institute of Science and Technology, Tiruchirappalli, is a dedicated digital platform developed to establish a professional online presence for the student branch.

The platform provides students, IEEE members, and visitors with a centralised destination to explore branch information, events, membership opportunities, team details, technical activities, resources, and announcements.

Designed with a focus on accessibility, usability, and responsive design, the website aims to strengthen student engagement, encourage technical innovation, promote professional development, and improve communication within the student community.

## Project Objectives

- Establish a professional digital presence for the IEEE Student Branch.
- Provide easy access to branch information and announcements.
- Promote technical events, workshops, and student activities.
- Encourage student participation and IEEE membership.
- Simplify event proposal submissions and enquiries.
- Improve communication between students and the student branch.
- Provide access to useful academic and technical resources.

## Website Features

### 1. Home
- Introduction to the IEEE Student Branch.
- Featured homepage banners and highlights.
- Quick navigation to important website sections.
- Direct access to membership information.

### 2. About
- Information about the IEEE Student Branch.
- Branch vision, mission, and objectives.
- Overview of the organisation and its initiatives.

### 3. Events
- Information about branch events.
- Upcoming and previous event details.
- Event highlights and announcements.

### 4. Membership
- IEEE membership information.
- Membership opportunities and guidance.
- Information for students interested in joining IEEE.

### 5. Team
- Student branch leadership information.
- Team member profiles and responsibilities.
- Organisational representation.

### 6. Activities
- Technical and non-technical activities.
- Workshops, seminars, and student initiatives.
- Highlights of student participation.

### 7. Resources
- Academic and technical learning resources.
- Useful references and learning materials.

### 8. News
- Important announcements.
- Student branch updates.
- Latest information and activities.

### 9. Contact
- Student branch contact information.
- Communication facilities for students and visitors.

### 10. Propose an Event
- Event proposal submission facility.
- Collection of event-related information.
- Event proposal verification workflow.

### 11. Submit a Query
- Query submission facility.
- Communication support for students and visitors.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend development |
| TypeScript | Type-safe application development |
| TanStack Start | Application framework and routing |
| Tailwind CSS | Responsive user interface styling |
| Vite | Development and build tooling |
| npm | Package management |
| Git | Version control |
| GitHub | Source code management |
| Vercel | Hosting and deployment |

---

## Project Architecture

The application follows a component-based frontend architecture.

**Presentation Layer**
- Handles the visual interface and user experience.
- Provides responsive layouts and reusable UI elements.

**Routing Layer**
- Manages navigation between website sections.
- Organises individual pages and application routes.

**Component Layer**
- Contains reusable interface components.
- Maintains consistency across website sections.

**Application Logic**
- Handles user interactions.
- Supports forms and website functionality.

**Styling Layer**
- Manages layouts, typography, and responsive styling.
- Maintains a consistent visual appearance.

**Deployment Layer**
- Supports production builds.
- Enables deployment and hosting through Vercel.

---

## Project Structure

```text
IEEE-Student-Branch-Website/
│
├── public/
│   └── Static assets and images
│
├── src/
│   ├── components/
│   ├── routes/
│   ├── hooks/
│   ├── lib/
│   └── styles/
│
├── .gitignore
├── components.json
├── eslint.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*Note: The structure illustrates the main application organisation. Existing project-specific directories and configuration files are retained wherever required.*

---

## Installation and Setup

Follow the instructions below to run the project locally.

### Prerequisites

Ensure the following software is installed:

- Node.js
- npm
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/subhashreec1013-spec/IEEE-Student-Branch-Website.git
```

### Step 2: Navigate to the Project Directory

```bash
cd IEEE-Student-Branch-Website
```

### Step 3: Switch to the Main Development Branch

```bash
git switch ieee-main
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Start the Development Server

```bash
npm run dev
```

Open the local development URL displayed in the terminal.

### Step 6: Create a Production Build

```bash
npm run build
```

---

## Environment Configuration

The application may require environment variables for external services and integrations.

For local development:

1. Create the appropriate environment configuration file.
2. Add the required environment variables.
3. Configure the corresponding variables in the deployment environment.
4. Keep API keys, credentials, and sensitive information private.

### Security Guidelines

- Never commit API keys or secret credentials.
- Do not expose private environment variables in frontend code.
- Keep environment configuration files excluded from version control.
- Configure production environment variables securely through Vercel.

---

## Deployment

The IEEE Student Branch Website is deployed using Vercel.

**Live Website:**  
https://www.ieeetsrm.in/

### Deployment Configuration

| Configuration | Details |
|---|---|
| Hosting Platform | Vercel |
| Source Repository | GitHub |
| Production Branch | ieee-main |
| Custom Domain | www.ieeetsrm.in |

### Deployment Workflow

1. Maintain the source code in the GitHub repository.
2. Connect the repository to the Vercel project.
3. Configure the production branch as `ieee-main`.
4. Add the required environment variables.
5. Build and deploy the application.
6. Verify the production website after deployment.

New commits pushed to the configured production branch can automatically trigger deployments through Vercel.

---

## Version Control and Collaboration

GitHub is used for source code management and collaborative development.

**Repository:**  
https://github.com/subhashreec1013-spec/IEEE-Student-Branch-Website

**Primary Branch:** `ieee-main`

### Common Git Commands

Check repository status:

```bash
git status
```

Switch to the primary branch:

```bash
git switch ieee-main
```

Pull the latest changes:

```bash
git pull origin ieee-main
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Update IEEE Student Branch website"
```

Push changes:

```bash
git push origin ieee-main
```

---

## Future Enhancements

Potential improvements to the platform include:

- Enhanced event management capabilities.
- Improved membership engagement.
- Additional technical and academic resources.
- Enhanced accessibility and user experience.
- Expanded student interaction features.
- Continuous improvements to website performance.
- Additional digital services for the student community.

---

## Acknowledgement

This project is developed for the IEEE Student Branch of SRM Institute of Science and Technology, Tiruchirappalli, Tamil Nadu, India.

The platform reflects the branch's commitment to technical excellence, innovation, collaboration, knowledge sharing, and professional development.

---

<p align="center">
  <strong>IEEE Student Branch</strong>
  <br>
  SRM Institute of Science and Technology
  <br>
  Tiruchirappalli, Tamil Nadu, India
  <br><br>
  <a href="https://www.ieeetsrm.in/">www.ieeetsrm.in</a>
  <br><br>
  <strong>Building the Next Generation of Innovators.</strong>
</p>
