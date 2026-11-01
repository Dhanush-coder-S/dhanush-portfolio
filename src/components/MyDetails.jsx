import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Mail, Send, Code2, } from "lucide-react";
import { FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { Link } from "react-router-dom";
import Profile from "../assets/images/Profile.png";
import Resume from "../assets/pdf/Dhanush_S_Python_Full_Stack_Resume.pdf"

const MyDetails = () => {
    const technologies = [
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Django", icon: <SiDjango />, color: "text-green-400" },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070B18] px-5 pt-28 pb-16 text-white sm:px-8 lg:px-16">

            {/* Background glow effects */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

            <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />

            <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

            {/* Background grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                }}
            />

            {/* Main content */}
            <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="z-10 text-center lg:text-left"
                >
                    {/* Availability */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                            Aspiring Software Developer
                        </span>
                    </motion.div>

                    {/* Introduction */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-8 text-xl font-medium text-slate-300 sm:text-2xl"
                    >
                        Hello, I'm 👋
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
                    >
                        Dhanush{" "}
                        <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            S
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        variants={itemVariants}
                        className="mt-5 text-2xl font-bold text-slate-200 sm:text-3xl"
                    >
                        Full Stack{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Python Developer
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-400 lg:mx-0"
                    >
                        Motivated and detail-oriented fresher with a strong
                        foundation in Python and full-stack web development.
                        Passionate about building responsive web applications
                        using Django, REST APIs, React.js, and MySQL.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-purple-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
                        >
                            <Send size={18} />
                            View My Projects
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href={Resume}
                            download="Dhanush_S_Python_Full_Stack_Resume.pdf"
                            className="inline-flex items-center gap-3 rounded-full border border-purple-400/60 bg-white/5 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Contact details */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-9 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400 lg:justify-start"
                    >
                        <a
                            href="mailto:dhanushs1624@gmail.com"
                            className="flex items-center gap-2 transition-colors hover:text-cyan-400"
                        >
                            <Mail size={17} className="text-cyan-400" />
                            dhanushs1624@gmail.com
                        </a>

                        <span className="flex items-center gap-2">
                            <MapPin size={17} className="text-purple-400" />
                            Vellore, Tamil Nadu
                        </span>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex justify-center gap-4 lg:justify-start"
                    >
                        <a
                            href="https://github.com/Dhanush-coder-S"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dhanush-coder-s/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT PROFILE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.75, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mx-auto flex w-full max-w-lg items-center justify-center"
                >
                    {/* Outer glow */}
                    <div className="absolute h-85 w-85 rounded-full bg-linear-to-r from-purple-600 to-cyan-500 opacity-30 blur-[80px] sm:h-110 sm:w-110" />

                    {/* Animated rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-80 w-[320px] rounded-full border border-dashed border-cyan-400/30 sm:h-107.5 sm:w-107.5"
                    />

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-70 w-70 rounded-full border border-purple-400/30 sm:h-95 sm:w-95"
                    />

                    {/* Profile image frame */}
                    <div className="relative z-10 h-75 w-75 overflow-hidden rounded-full border-2 border-cyan-400/70 bg-[#10172B] shadow-[0_0_50px_rgba(34,211,238,0.20)] sm:h-100 sm:w-100">

                        <img
                            src={Profile}
                            alt="Dhanush S - Full Stack Python Developer"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Floating Python icon */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute right-0 top-8 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-[#10172B] text-yellow-400 shadow-lg shadow-yellow-500/10 sm:-right-2 sm:top-12"
                    >
                        <FaPython size={35} />
                    </motion.div>

                    {/* Floating React icon */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity }}
                        className="absolute -left-2 top-1/3 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#10172B] text-cyan-400 shadow-lg shadow-cyan-500/10 sm:-left-5"
                    >
                        <FaReact size={35} />
                    </motion.div>

                    {/* Floating Django icon */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -right-1 bottom-1/4 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/30 bg-[#10172B] text-green-400 shadow-lg shadow-green-500/10 sm:-right-4"
                    >
                        <SiDjango size={34} />
                    </motion.div>

                    {/* Floating code icon */}
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity }}
                        className="absolute bottom-8 left-3 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-[#10172B] text-purple-400 shadow-lg shadow-purple-500/10 sm:left-0"
                    >
                        <Code2 size={30} />
                    </motion.div>

                    {/* Small decorative dots */}
                    <div className="absolute -right-5 top-1/4 grid grid-cols-4 gap-2 opacity-50">
                        {Array.from({ length: 16 }).map((_, index) => (
                            <span
                                key={index}
                                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
        </section>
    );
};

export default MyDetails;
