import React from "react";
import { Link } from "react-router-dom";
import { UserRound, Code2, BriefcaseBusiness, GraduationCap, MapPin, Mail, Lightbulb, Rocket, Target, Heart, Sparkles, Terminal, Database, Globe, ArrowUpRight, CheckCircle2, } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { highlights, technologies, strengths } from "../data/about"

const About = () => {

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070B18] px-5 py-24 text-white sm:px-8 lg:px-16">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        <UserRound size={16} />
                        Get to know me
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        About{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        A passionate developer who enjoys building applications,
                        learning modern technologies, and turning ideas into reality.
                    </p>
                </div>

                {/* Main About Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Profile Card */}
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-cyan-500 to-purple-600 opacity-30 blur-lg" />

                        <div className="relative rounded-3xl border border-white/10 bg-[#10172B]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

                            <div className="mb-7 flex items-center gap-5">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-cyan-500/20">
                                    DS
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold">Dhanush S</h2>
                                    <p className="mt-1 text-sm text-cyan-300">
                                        Full Stack Python Developer
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm leading-8 text-slate-400 sm:text-base">
                                I am a motivated fresher with a strong foundation in Python
                                and full-stack web development. I have completed Python Full
                                Stack training at JSpiders, Bangalore, and have experience
                                building web applications using Django, Django REST
                                Framework, React.js, and MySQL.
                            </p>

                            <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
                                I enjoy developing user-friendly interfaces, creating REST
                                APIs, working with databases, and learning new technologies.
                                My goal is to start my career as a software developer and
                                contribute to meaningful projects.
                            </p>

                            {/* Location */}
                            <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
                                <MapPin size={18} className="text-cyan-400" />
                                Vellore, Tamil Nadu, India
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex flex-wrap gap-4">

                                <a
                                    href="https://github.com/Dhanush-coder-S"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                                >
                                    <FaGithub size={19} />
                                    GitHub
                                    <ArrowUpRight size={15} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/dhanush-coder-s/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-300"
                                >
                                    <FaLinkedin size={19} />
                                    LinkedIn
                                    <ArrowUpRight size={15} />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-white/10 bg-[#10172B]/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-[#151F37]"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300 transition-all duration-300 group-hover:scale-110">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="mb-3 text-lg font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Technologies */}
                <div className="mt-24">
                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                            My Technical Stack
                        </span>

                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            Technologies I Work With
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="rounded-xl border border-white/10 bg-[#10172B] px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Strengths */}
                <div className="mt-24 grid gap-10 lg:grid-cols-2">

                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                            What I Bring
                        </span>

                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            My Strengths
                        </h2>

                        <p className="mt-5 max-w-lg leading-8 text-slate-400">
                            I believe in writing clean code, learning from challenges,
                            and continuously improving my technical and communication
                            skills.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {strengths.map((strength, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#10172B] p-4 transition-all duration-300 hover:border-purple-400/40"
                            >
                                <CheckCircle2
                                    size={20}
                                    className="shrink-0 text-cyan-400"
                                />
                                <span className="text-sm text-slate-300">
                                    {strength}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education / Course */}
                <div className="mt-24 rounded-3xl border border-white/10 bg-linear-to-br from-[#10172B] to-[#11152B] p-8 sm:p-10">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                            <GraduationCap size={30} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                                Professional Training
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Python Full Stack Development
                            </h2>

                            <p className="mt-2 text-slate-400">
                                JSpiders, Bangalore
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote / CTA */}
                <div className="mt-20 text-center">
                    <Sparkles className="mx-auto mb-5 text-cyan-400" size={30} />

                    <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed sm:text-4xl">
                        "Building my skills today to create better solutions tomorrow."
                    </h2>

                    <p className="mt-5 text-slate-400">
                        Open to learning, opportunities, and exciting challenges.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-cyan-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
                    >
                        Let's Connect
                        <ArrowUpRight size={19} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default About;
