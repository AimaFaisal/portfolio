/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * 
 * Edit this file in VS Code to customize your portfolio!
 * All content (text, projects, skills, links, and contact information)
 * will automatically update across the entire website.
 */

const PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // 1. Personal & Brand Info
  // --------------------------------------------------------------------------
  personal: {
    fullName: "Aima Faisal",
    title: "Aspiring Software Engineer",
    // These roles rotate in the animated typing hero banner:
    typingRoles: [
      "Aspiring Software Engineer",
      "Software Engineering Student",
      "AI & Tech Enthusiast",
      "Creative Problem Solver"
    ],
    heroSubtitle: "Software Engineering student passionate about technology, AI, and innovative problem-solving. A curious learner driven by continuous growth, creativity, and building meaningful digital experiences.",
    statusBadge: {
      isAvailable: true,
      text: "Open to Internships & Part-Time Roles"
    },
    avatarUrl: "profile.jpg", // Local Profile picture
    resumeUrl: "resume.pdf", // Place your resume PDF in the same folder or paste a Google Drive link
    socials: {
      github: "https://github.com/AimaFaisal",
      linkedin: "https://www.linkedin.com/in/aima-faisal-5a997336b",
      email: "aimafaisalbutt@gmail.com",
      leetcode: "",
      twitter: ""
    }
  },

  // --------------------------------------------------------------------------
  // 2. Quick Highlight Numbers
  // --------------------------------------------------------------------------
  stats: [
    { number: "3.55", label: "Current CGPA" },
    { number: "5th", label: "Semester (BS SE)" },
    { number: "4+", label: "Projects & Studios" },
    { number: "2028", label: "Graduation Year" }
  ],

  // --------------------------------------------------------------------------
  // 3. About Me Section
  // --------------------------------------------------------------------------
  about: {
    storyParagraphs: [
      "I am an undergraduate Software Engineering student at Lahore College for Women University (LCWU), currently in my 5th semester with a 3.55 CGPA. My journey in tech is driven by an innate curiosity for how software shapes our world and a dedication to creative, impactful problem-solving.",
      "With a solid academic foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms, and Database Systems, I enjoy turning theoretical concepts into clean, functional digital solutions. I am deeply enthusiastic about expanding my skills in modern web development and delving into Artificial Intelligence."
    ],
    currentFocus: "Python programming, Artificial Intelligence fundamentals, and Modern Web Development (HTML5, CSS3, JavaScript).",
    highlights: [
      {
        icon: "code",
        title: "Object-Oriented Design",
        desc: "Practicing modular architecture, clean code standards, and standard OOP paradigms."
      },
      {
        icon: "brain",
        title: "Algorithms & Logic",
        desc: "Solid foundation in Data Structures, algorithmic complexity, and structured problem-solving."
      },
      {
        icon: "layout",
        title: "Web & UI/UX Design",
        desc: "Crafting intuitive, accessible, and responsive user experiences using modern HTML, CSS, and JavaScript."
      },
      {
        icon: "sparkles",
        title: "AI & Innovation",
        desc: "Fascinated by emerging intelligent systems, machine learning concepts, and technological growth."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. Education & Milestones Timeline
  // --------------------------------------------------------------------------
  education: [
    {
      type: "education",
      icon: "graduation-cap",
      role: "Bachelor of Science in Software Engineering (BS SE)",
      institution: "Lahore College for Women University (LCWU) • Lahore, Pakistan",
      period: "2024 — Present (Expected 2028) • 5th Semester",
      description: "Pursuing in-depth study of software engineering principles, software construction, database systems, and intelligent technologies with a 3.55 CGPA.",
      coursework: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms (DSA)",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Construction & Development",
        "Artificial Intelligence",
        "Web Technologies",
        "UI/UX Design",
        "Linear Algebra"
      ]
    },
    {
      type: "achievement",
      icon: "award",
      role: "Academic Excellence & High Standing (3.55 CGPA)",
      institution: "Department of Software Engineering, LCWU",
      period: "2024 — Present",
      description: "Maintaining a high academic standing with a 3.55 CGPA across core theoretical and practical software engineering coursework."
    },
    {
      type: "experience",
      icon: "book-open",
      role: "Software Construction & Practical Lab Projects",
      institution: "LCWU Department of Computer Science & SE",
      period: "Ongoing",
      description: "Hands-on implementation of relational database schemas, algorithm implementations, and frontend user interfaces as part of departmental curriculum."
    }
  ],

  // --------------------------------------------------------------------------
  // 5. Featured Projects
  // Categories: 'all' (default), 'software', 'design'
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "hostel-dsa",
      title: "Hostel Management System (DSA Edition)",
      category: "software",
      categoryLabel: "C++ & Data Structures",
      description: "Re-engineered the hostel management application using advanced data structures and algorithms to optimize student record handling, room allocation, and data retrieval efficiency.",
      keyPoints: [
        "Optimized search, insertion, and retrieval operations with structured DSA techniques",
        "Iterated and refactored core algorithms to improve computational speed and memory efficiency",
        "Developed at Lahore College for Women University (LCWU)"
      ],
      techStack: ["C++", "Data Structures", "Algorithms", "Optimization", "File I/O"],
      githubUrl: "https://github.com/AimaFaisal",
      demoUrl: ""
    },
    {
      id: "hostel-core",
      title: "Hostel Management System (Semester Project)",
      category: "software",
      categoryLabel: "C++ Console System",
      description: "A complete console-based system designed for managing student records, automated room allocation, and reliable data persistence through structured file operations.",
      keyPoints: [
        "Applied core programming constructs including functions, arrays, structs, and robust file I/O",
        "Independently broke down real-world administrative workflows into modular, maintainable logic",
        "Developed at Lahore College for Women University (LCWU)"
      ],
      techStack: ["C++", "Modular Programming", "File Handling", "Console UI"],
      githubUrl: "https://github.com/AimaFaisal",
      demoUrl: ""
    },
    {
      id: "bake-the-cookies",
      title: "Bake The Cookies — Website Design & Launch",
      category: "design",
      categoryLabel: "UI/UX & Web Design",
      description: "Designed and published an inviting, visually appealing confectionery brand website at bakethecookies.my.canva.site, applying user-centric UI/UX design principles and responsive layouts.",
      keyPoints: [
        "Applied modern visual hierarchy, brand aesthetics, and typography to enhance user engagement",
        "Gained practical experience in end-to-end web publishing through independent initiative"
      ],
      techStack: ["UI/UX Design", "Web Design", "Canva", "Visual Hierarchy", "Responsive"],
      githubUrl: "",
      demoUrl: "https://bakethecookies.my.canva.site"
    },
    {
      id: "the-visual-edit",
      title: "The Visual Edit (@thevisualedit.hq) — Digital Studio",
      category: "design",
      categoryLabel: "Branding & Digital Design",
      description: "Founded and branded a custom digital design studio offering premium visual solutions under the tagline 'Your story, visually edited to perfection'. Created diverse marketing, social media, and conceptual brand systems.",
      keyPoints: [
        "Designed event posters, wedding stationery, business flyers, newsletters, and social media brand templates",
        "Engineered full visual identity concepts including restaurant branding for Ember & Olive"
      ],
      techStack: ["Brand Identity", "Graphic Design", "Social Media", "Typography", "Visual Presentation"],
      githubUrl: "",
      demoUrl: "https://instagram.com/thevisualedit.hq"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. Technical Skills Categories
  // --------------------------------------------------------------------------
  skills: [
    {
      category: "Programming & Web",
      icon: "terminal",
      items: [
        { name: "C++", level: "Proficient" },
        { name: "Python", level: "Intermediate" },
        { name: "HTML5 & CSS3", level: "Proficient" },
        { name: "JavaScript", level: "Learning" },
        { name: "File I/O & Streams", level: "Proficient" }
      ]
    },
    {
      category: "Mathematical & Algorithmic Thinking",
      icon: "brain",
      items: [
        { name: "Data Structures & Algorithms", level: "Strong" },
        { name: "Algorithmic Reasoning", level: "Strong" },
        { name: "Problem Solving", level: "Proficient" },
        { name: "Linear Algebra", level: "Academic" },
        { name: "Object-Oriented Design", level: "Strong" }
      ]
    },
    {
      category: "Design & Creative Media",
      icon: "layout",
      items: [
        { name: "Graphic Design", level: "Proficient" },
        { name: "UI/UX Design", level: "Proficient" },
        { name: "Brand & Identity Design", level: "Strong" },
        { name: "Print & Digital Layouts", level: "Proficient" },
        { name: "Visual Presentation", level: "Strong" }
      ]
    },
    {
      category: "Tools & Professional Strengths",
      icon: "layers",
      items: [
        { name: "Canva (Web & Graphics)", level: "Advanced" },
        { name: "Git & GitHub", level: "Active" },
        { name: "MS Office Suite", level: "Proficient" },
        { name: "Strong Communication", level: "Strong" },
        { name: "Structured Planning", level: "Strong" },
        { name: "Time Management", level: "Strong" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 7. Contact Info & Channels
  // --------------------------------------------------------------------------
  contact: {
    heading: "Get In Touch",
    intro: "I am actively seeking internship opportunities and part-time positions. Whether you have an opportunity, want to discuss a project, or just say hi, my inbox is always open!",
    email: "aimafaisalbutt@gmail.com",
    location: "Lahore, Pakistan (Open to Remote)",
    channels: [
      {
        icon: "mail",
        label: "Email",
        value: "aimafaisalbutt@gmail.com",
        link: "mailto:aimafaisalbutt@gmail.com"
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/aima-faisal-5a997336b",
        link: "https://www.linkedin.com/in/aima-faisal-5a997336b"
      },
      {
        icon: "github",
        label: "GitHub",
        value: "github.com/AimaFaisal",
        link: "https://github.com/AimaFaisal"
      },
      {
        icon: "map-pin",
        label: "Location",
        value: "Lahore, Pakistan",
        link: null
      }
    ]
  }
};
