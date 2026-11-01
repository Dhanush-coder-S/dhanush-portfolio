
import {
    FaPython,
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiDjango,
    SiMysql,
    SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import {
    Layers,
    Terminal,
    Code2,
    Zap,
    Database,
    Wrench,
} from "lucide-react";

export const categories = [
    "All",
    "Programming",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
];

export const skillsData = [
    {
        name: "Python",
        category: "Programming",
        icon: FaPython,
        level: 90,
        experience: "Core Language",
        description: "Building application logic, solving programming problems, using OOP concepts and working with Python libraries.",
        concepts: ["OOP", "Functions", "Data Structures", "Exception Handling"],
    },
    {
        name: "JavaScript",
        category: "Programming",
        icon: FaJsSquare,
        level: 85,
        experience: "Core Language",
        description: "Building interactive web applications using modern JavaScript concepts and asynchronous programming.",
        concepts: ["ES6+", "DOM", "Promises", "Async/Await", "Event Loop"],
    },
    {
        name: "React.js",
        category: "Frontend",
        icon: FaReact,
        level: 85,
        experience: "Frontend Development",
        description: "Developing reusable UI components and interactive applications using React.",
        concepts: ["Hooks", "Props", "State", "Context API", "React Router"],
    },
    {
        name: "HTML5",
        category: "Frontend",
        icon: FaHtml5,
        level: 90,
        experience: "Frontend Development",
        description: "Creating semantic and accessible structures for modern web applications.",
        concepts: ["Semantic HTML", "Forms", "Tables", "SEO Basics"],
    },
    {
        name: "CSS3",
        category: "Frontend",
        icon: FaCss3Alt,
        level: 85,
        experience: "Frontend Development",
        description: "Styling responsive web applications with modern CSS layouts and animations.",
        concepts: ["Flexbox", "Grid", "Responsive Design", "Transitions"],
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: SiTailwindcss,
        level: 85,
        experience: "Frontend Development",
        description: "Building responsive and modern interfaces using utility-first CSS classes.",
        concepts: ["Flex", "Grid", "Responsive Classes", "Animations"],
    },
    {
        name: "Django",
        category: "Backend",
        icon: SiDjango,
        level: 85,
        experience: "Backend Development",
        description: "Developing backend applications with Django, ORM, authentication and database integration.",
        concepts: ["Models", "Views", "ORM", "Authentication", "Middleware"],
    },
    {
        name: "Django REST Framework",
        category: "Backend",
        icon: SiDjango,
        level: 80,
        experience: "Backend Development",
        description: "Building RESTful APIs with serializers, API views and CRUD operations.",
        concepts: ["Serializers", "API Views", "CRUD", "Authentication"],
    },
    {
        name: "MySQL",
        category: "Database",
        icon: SiMysql,
        level: 80,
        experience: "Database Management",
        description: "Managing relational databases and writing SQL queries for application data.",
        concepts: ["Joins", "Subqueries", "CRUD", "Constraints"],
    },
    {
        name: "SQL",
        category: "Database",
        icon: Database,
        level: 80,
        experience: "Database Management",
        description: "Writing SQL queries to retrieve, insert, update and manage relational data.",
        concepts: ["SELECT", "JOIN", "GROUP BY", "Aggregate Functions"],
    },
    {
        name: "Git & GitHub",
        category: "Tools",
        icon: FaGitAlt,
        level: 80,
        experience: "Development Tools",
        description: "Managing source code and collaborating on development projects using Git and GitHub.",
        concepts: ["Commits", "Branches", "Push", "Pull", "Repositories"],
    },
    {
        name: "Postman",
        category: "Tools",
        icon: SiPostman,
        level: 80,
        experience: "Development Tools",
        description: "Testing and validating REST API endpoints during backend development.",
        concepts: ["GET", "POST", "PUT", "DELETE", "API Testing"],
    },
    {
        name: "VS Code",
        category: "Tools",
        icon: VscCode,
        level: 90,
        experience: "Development Tools",
        description: "Using Visual Studio Code for coding, debugging and managing development projects.",
        concepts: ["Extensions", "Debugging", "Terminal", "Git Integration"],
    },
];

export const categoryIcons = {
    All: Layers,
    Programming: Terminal,
    Frontend: Code2,
    Backend: Zap,
    Database: Database,
    Tools: Wrench,
};
