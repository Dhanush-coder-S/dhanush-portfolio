import React, { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, ArrowUpRight, Code2, ShoppingBag, Music, GraduationCap, X, } from "lucide-react";
import { categories, projectsData } from "../data/projects"

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter(
                (project) => project.category === activeCategory
            );

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070B18] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-16">
            {/* BACKGROUND EFFECTS */}
            <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
            <div className="relative mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-14 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-semibold text-cyan-400">
                        <Sparkles size={16} />
                        MY CREATIVE WORK
                    </div>
                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        My{" "}
                        <span className="bg-linear-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Explore the applications I have developed using
                        modern frontend and backend technologies.
                        Each project represents my learning and practical experience.
                    </p>
                    <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />
                </div>

                {/* PROJECT STATISTICS */}
                <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3">
                    {
                        [
                            {
                                number: projectsData.length + '+',
                                label: "Projects Built",
                                icon: FolderGit2,
                            },
                            {
                                number: "10+",
                                label: "Technologies Used",
                                icon: Code2,
                            },
                            {
                                number: "100%",
                                label: "Learning Mindset",
                                icon: Sparkles,
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/10 bg-[#11182A] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                                >
                                    <Icon className="mx-auto mb-3 text-cyan-400" size={25} />

                                    <h3 className="text-2xl font-extrabold text-white">
                                        {item.number}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                                        {item.label}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>

                {/* CATEGORY FILTER */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {
                        categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${activeCategory === category
                                    ? "border-cyan-400 bg-linear-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-purple-900/30"
                                    : "border-white/10 bg-[#11182A] text-gray-400 hover:border-cyan-400/40 hover:text-cyan-400"
                                    }`}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>

                {/* PROJECT COUNT */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold sm:text-2xl">
                        Featured Work
                    </h2>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-400">
                        {filteredProjects.length} Projects
                    </span>
                </div>

                {/* PROJECT CARDS */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {
                        filteredProjects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <article
                                    key={project.id}
                                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11182A] transition-all duration-500 hover:-translate-y-3 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-950/30"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >

                                    {/* PROJECT IMAGE */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-60`} />

                                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#080B18]/80 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                                            <Icon size={15} />
                                            {project.category}
                                        </div>

                                        <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#080B18]/80 text-2xl backdrop-blur-md">
                                            {project.emoji}
                                        </div>

                                    </div>

                                    {/* PROJECT DETAILS */}

                                    <div className="p-6">

                                        <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 min-h-16 text-sm leading-6 text-gray-400">
                                            {project.description}
                                        </p>

                                        {/* TECHNOLOGIES */}

                                        <div className="mt-5 flex flex-wrap gap-2">

                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300 transition hover:border-cyan-400/40"
                                                >
                                                    {technology}
                                                </span>
                                            ))}

                                        </div>

                                        {/* ACTION BUTTONS */}

                                        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-cyan-400"
                                            >
                                                View Details
                                                <ArrowUpRight size={17} />
                                            </button>

                                            <div className="flex gap-3">

                                                {project.liveLink && (
                                                    <a
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="Live demo"
                                                        className="rounded-full border border-purple-400/30 p-2.5 text-purple-400 transition hover:bg-purple-500 hover:text-white"
                                                    >
                                                        <ExternalLink size={17} />
                                                    </a>
                                                )}

                                                {project.githubLink && (
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="GitHub repository"
                                                        className="rounded-full border border-cyan-400/30 p-2.5 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                                                    >
                                                        <Github size={17} />
                                                    </a>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </article>
                            );
                        })}

                </div>

                {/* EMPTY STATE */}

                {filteredProjects.length === 0 && (
                    <p className="py-16 text-center text-gray-400">
                        No projects found.
                    </p>
                )}

                {/* BOTTOM SECTION */}

                <div className="mt-20 rounded-3xl border border-purple-400/20 bg-linear-to-r from-purple-600/10 via-[#11182A] to-cyan-500/10 p-8 text-center sm:p-12">

                    <Sparkles className="mx-auto mb-5 text-cyan-400" size={35} />

                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Have an Interesting Project?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
                        I am interested in building innovative applications,
                        learning new technologies and collaborating on
                        exciting development projects.
                    </p>

                    <a
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-semibold transition duration-300 hover:scale-105"
                    >
                        Let's Connect
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </div>

            {/* PROJECT DETAILS MODAL */}

            {selectedProject && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >

                    <div
                        className="relative my-auto w-full max-w-xl rounded-3xl border border-purple-400/30 bg-[#11182A] p-7 shadow-2xl shadow-purple-950/40"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-gray-400 transition hover:bg-red-500 hover:text-white"
                            aria-label="Close project details"
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600 to-cyan-500 text-3xl">
                            {selectedProject.emoji}
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                            {selectedProject.category} Project
                        </span>

                        <h2 className="mt-3 text-2xl font-extrabold">
                            {selectedProject.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            {selectedProject.description}
                        </p>

                        <h3 className="mb-4 mt-7 font-bold">
                            Key Features
                        </h3>

                        <div className="space-y-3">

                            {selectedProject.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 text-sm text-gray-300"
                                >
                                    <Sparkles size={16} className="shrink-0 text-cyan-400" />
                                    {feature}
                                </div>
                            ))}

                        </div>

                        <h3 className="mb-4 mt-7 font-bold">
                            Technologies Used
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {selectedProject.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300"
                                >
                                    {technology}
                                </span>
                            ))}

                        </div>

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="mt-8 w-full rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 py-3 font-semibold transition hover:scale-[1.02]"
                        >
                            Close Details
                        </button>

                    </div>

                </div>
            )}

        </section>
    );
};

export default Projects;
