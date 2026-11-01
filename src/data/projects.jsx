
import { FolderGit2, ExternalLink, Sparkles, ArrowUpRight, Code2, ShoppingBag, Music, GraduationCap, X, } from "lucide-react";

export const categories = ["All", "Frontend", "Full Stack", "Backend"];

export const projectsData = [
    {
        id: 1,
        title: "Tamil Music Player",
        category: "Frontend",
        icon: Music,
        emoji: "🎵",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900",
        description: "A modern Tamil music player with an interactive interface, audio controls and dynamic song management.",
        technologies: ["React.js", "Tailwind CSS", "Audio API"],
        features: [
            "Play and pause music",
            "Next and previous songs",
            "Dynamic progress bar",
            "Song selection",
            "Responsive UI",
        ],
        liveLink: "",
        githubLink: "",
        gradient: "from-purple-600/30 to-pink-500/10",
    },
    {
        id: 2,
        title: "ShopSphere",
        category: "Frontend",
        icon: ShoppingBag,
        emoji: "🛍️",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
        description: "An interactive e-commerce platform with product browsing, shopping cart and wishlist functionality.",
        technologies: ["React.js", "Redux Toolkit", "MockAPI"],
        features: [
            "Product listing",
            "Shopping cart",
            "Wishlist management",
            "User authentication",
            "Dynamic product details",
        ],
        liveLink: "https://sundari-shop.netlify.app/",
        githubLink: "",
        gradient: "from-blue-600/30 to-cyan-500/10",
    },
    {
        id: 3,
        title: "Student Management System",
        category: "Full Stack",
        icon: GraduationCap,
        emoji: "🎓",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
        description: "A student management application for maintaining student records and managing academic information.",
        technologies: ["Django", "MySQL", "Bootstrap"],
        features: [
            "Student registration",
            "Student record management",
            "CRUD operations",
            "Database integration",
            "Responsive interface",
        ],
        liveLink: "",
        githubLink: "",
        gradient: "from-indigo-600/30 to-purple-500/10",
    },
];