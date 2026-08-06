export interface SkillItem {
  name: string;
  type: string;
  vcHash?: string;
  verifiedAt?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights?: string[];
  architecture?: string[];
  deliverables?: string[];
  demoUrl?: string;
  githubUrl?: string;
  schemaVersion?: string;
}

export interface Web5Profile {
  did: string;
  dwnEndpoint: string;
  developer: {
    id: number;
    name: string;
    initials: string;
    role: string;
    location: string;
    availability: string;
    bio: string;
    publicKey: string;
  };
  skills: Record<string, Array<SkillItem>>;
  projects: Array<ProjectItem>;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  verifiableCredentials: Array<{
    id: string;
    issuer: string;
    type: string;
    issuanceDate: string;
    credentialSubject: {
      id: string;
      claim: string;
      proofHash: string;
    };
  }>;
}

export const profileData: Web5Profile = {
  did: "did:dwn:ph:lhandel-vicente-pamisa-v1",
  dwnEndpoint: "https://dwn.cyber.node/lhandel-pamisa/data",
  developer: {
    id: 1,
    name: "Lhandel Vicente Pamisa",
    initials: "LP",
    role: "Full-Stack Developer",
    location: "Philippines",
    availability: "Available for freelance & full-time roles",
    bio: "I build products end to end — from relational data models and REST APIs to the interfaces people actually touch. Comfortable owning a system from the database up to the pixel.",
    publicKey: "z6MkpTHR8VNsBxY9nK2v4xJ8sQ6u9w1y3z5a7b9c1d3e5f7"
  },
  skills: {
    backend_and_apis: [
      { name: "PHP", type: "core", vcHash: "0x8f3c...9a12", verifiedAt: "2026-01-15" },
      { name: "Laravel", type: "framework", vcHash: "0x4b7d...e311", verifiedAt: "2026-02-01" },
      { name: "Node.js", type: "runtime", vcHash: "0x91ae...78c2", verifiedAt: "2026-02-10" },
      { name: "RESTful API development", type: "pattern", vcHash: "0x33f1...b908", verifiedAt: "2026-03-01" },
      { name: "Custom logic & algorithms", type: "core", vcHash: "0x6e2c...14d9", verifiedAt: "2026-03-20" }
    ],
    frontend_and_ui_ux: [
      { name: "React", type: "library", vcHash: "0x77ab...66e1", verifiedAt: "2026-01-20" },
      { name: "Vue.js", type: "framework", vcHash: "0x12dc...98a3", verifiedAt: "2026-02-15" },
      { name: "Quasar CLI", type: "framework", vcHash: "0x55ef...31b7", verifiedAt: "2026-03-05" },
      { name: "Tailwind CSS", type: "styling", vcHash: "0x88c4...44f9", verifiedAt: "2026-03-12" },
      { name: "Blade templates", type: "templating", vcHash: "0x29ba...70d1", verifiedAt: "2026-03-25" },
      { name: "Responsive design / CSS / HTML", type: "core", vcHash: "0x94f8...11a2", verifiedAt: "2026-04-01" }
    ],
    databases_and_modeling: [
      { name: "MySQL", type: "rdbms", vcHash: "0x31a9...88c3", verifiedAt: "2026-01-10" },
      { name: "Supabase", type: "baas / postgres", vcHash: "0x55aa...99b2", verifiedAt: "2026-02-05" },
      { name: "Schema design", type: "core", vcHash: "0x66ff...22e4", verifiedAt: "2026-02-08" },
      { name: "Relational data modeling", type: "core", vcHash: "0x44dd...55a7", verifiedAt: "2026-02-22" },
      { name: "Query optimization", type: "perf", vcHash: "0x77ee...99b1", verifiedAt: "2026-03-18" }
    ],
    devops_os_and_deploy: [
      { name: "Linux (Ubuntu / WSL)", type: "os", vcHash: "0x11bb...33c9", verifiedAt: "2026-01-05" },
      { name: "Hostinger / web hosting deploy", type: "deploy", vcHash: "0x55aa...88d2", verifiedAt: "2026-02-14" },
      { name: "Nginx", type: "server", vcHash: "0x88ee...22f1", verifiedAt: "2026-03-02" },
      { name: "Git", type: "vcs", vcHash: "0x33cc...44e8", verifiedAt: "2026-03-15" },
      { name: "Bash / terminal", type: "tooling", vcHash: "0x99dd...11f3", verifiedAt: "2026-04-05" }
    ],
    hardware_and_it_support: [
      { name: "PC assembly & troubleshooting", type: "hw", vcHash: "0x77fa...33d4", verifiedAt: "2026-01-01" },
      { name: "System diagnostics", type: "hw", vcHash: "0x22eb...66c8", verifiedAt: "2026-01-25" },
      { name: "Network traffic analysis concepts", type: "network", vcHash: "0x88dc...99a5", verifiedAt: "2026-02-28" },
      { name: "Reformatting & OS setup", type: "hw", vcHash: "0x44ac...77e9", verifiedAt: "2026-03-10" }
    ]
  },
  projects: [
    {
      id: "🎓 0001",
      title: "Learning Management System",
      description: "A comprehensive LMS with automated task scheduling and progress tracking for students.",
      tags: ["Laravel", "PHP", "Python", "MySQL", "Tailwind"],
      architecture: [
        "Designed automated task priority scoring based on deadlines and difficulty metrics.",
        "Structured complex relational database schemas for tracking student performance and schedules.",
        "Optimized backend queries for high-volume student progress tracking."
      ],
      deliverables: [
        "Automated Task Priority Engine for intelligent deadline scheduling.",
        "Relational Schema Architecture for performance analytics.",
        "Student & Admin Dashboard with interactive performance tracking."
      ],
      demoUrl: "https://lms-demo.lhandel.dev",
      githubUrl: "https://github.com/lhandel-pamisa/learning-management-system",
      schemaVersion: "v2.4.0-did"
    },
    {
      id: "📚 0002",
      title: "Subject & Curriculum Management System",
      description: "An intuitive academic portal for organizing course curriculums and subject hierarchies.",
      tags: ["Laravel", "PHP", "TailwindCSS", "MySQL", "REST APIs"],
      architecture: [
        "Laravel 12 & PHP 8.3: Secure backend framework using REST APIs and Eloquent ORM.",
        "Fast MySQL Database: Optimized database queries and custom indexing for fast data loading.",
        "Tailwind CSS & Vite: Modern UI design with quick page load speeds.",
        "AI & Document Tools: Integrated Google Gemini, OpenAI, and PDF parsing engines.",
        "Security & Biometrics: User authentication with role permissions and facial recognition 2FA."
      ],
      deliverables: [
        "Curriculum Management: Flexible tools for managing subjects, prerequisites, and course versions.",
        "AI Syllabus Reader: Automatically extracts PDF syllabus data into the system using AI.",
        "PDF & ZIP Exporters: One-click exports for official academic documents and curriculum matrices.",
        "Admin Dashboard: Easy-to-use portal for managing courses, grades, and school settings.",
        "Activity Log: Automated tracking of changes and updates made across the system."
      ],
      demoUrl: "https://curriculum-portal.lhandel.dev",
      githubUrl: "https://github.com/lhandel-pamisa/subject-curriculum-system",
      schemaVersion: "v1.8.2-did"
    },
    {
      id: "💊 0003",
      title: "Pharmacy Management Application",
      description: "A web application for inventory and operations management tailored to pharmacy workflows.",
      tags: ["PHP", "MySQL", "TailwindCSS"],
      architecture: [
        "Implemented Multi-Tier OTP authentication & Admin Login Approval workflow.",
        "Built modular POS, Inventory, and CMS portals with real-time activity logging.",
        "Configured database connection layers & server environment for production."
      ],
      deliverables: [
        "Implemented 2FA OTP security & Admin Approval workflow.",
        "Built modular POS, Inventory, and CMS management portals.",
        "Configured production environment & MySQL connection layers."
      ],
      demoUrl: "https://pharmacy-ops.lhandel.dev",
      githubUrl: "https://github.com/lhandel-pamisa/pharmacy-management-app",
      schemaVersion: "v3.1.0-did"
    }
  ],
  contact: {
    email: "lhandelpamisa0@gmail.com",
    linkedin: "https://linkedin.com/in/lhandel-pamisa",
    github: "https://github.com/lhandel-pamisa"
  },
  verifiableCredentials: [
    {
      id: "vc:credential:lhandel-fullstack-dev-01",
      issuer: "did:dwn:auth:ph-dev-council",
      type: "FullStackArchitectCredential",
      issuanceDate: "2026-01-10T00:00:00Z",
      credentialSubject: {
        id: "did:dwn:ph:lhandel-vicente-pamisa-v1",
        claim: "Mastery of End-to-End Web Architecture & Relational Schema Modeling",
        proofHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
      }
    },
    {
      id: "vc:credential:lhandel-database-expert-02",
      issuer: "did:dwn:auth:mysql-schema-authority",
      type: "RelationalDataEngineerCredential",
      issuanceDate: "2026-02-15T00:00:00Z",
      credentialSubject: {
        id: "did:dwn:ph:lhandel-vicente-pamisa-v1",
        claim: "High Performance Relational Schema Design & Query Optimization",
        proofHash: "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
      }
    }
  ]
};
