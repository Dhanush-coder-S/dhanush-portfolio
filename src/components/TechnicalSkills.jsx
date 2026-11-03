import React, { useEffect, useState } from "react";
import { Code2, Sparkles, Terminal, Database, Layers, Wrench, ArrowUpRight, CheckCircle2, Zap, X, } from "lucide-react";
import { skillsData, categories, categoryIcons } from "../data/Skills";

const TechnicalSkills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
    const [animateBars, setAnimateBars] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    // Animate progress bars when component loads
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setAnimateBars(true);
        });

        return () => cancelAnimationFrame(frame);
    }, []);

    // Dynamic category filtering
    const filteredSkills =
        activeCategory === "All"
            ? skillsData
            : skillsData.filter(
                (skill) => skill.category === activeCategory
            );

    // Category selection
    const handleCategory = (category) => {
        setActiveCategory(category);
        setShowDetails(false);

        const firstSkill =
            category === "All"
                ? skillsData[0]
                : skillsData.find(
                    (skill) => skill.category === category
                );

        setSelectedSkill(firstSkill);
    };

    // Skill selection
    const handleSkill = (skill) => {
        setSelectedSkill(skill);
        setShowDetails(true);
    };

    return (
        <section
            id="skills"
            className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[#070B18] px-5 py-24 text-white sm:px-8 lg:px-16"
        >

            {/* ================= BACKGROUND EFFECTS ================= */}

            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 animate-pulse rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= SECTION HEADER ================= */}

                <div className="mb-14 text-center">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-semibold text-cyan-400">
                        <Sparkles size={16} />
                        MY TECHNICAL EXPERTISE
                    </div>

                    <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Technical{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Technologies, programming languages and tools I use
                        to build modern, scalable and user-friendly applications.
                    </p>

                    <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />

                </div>

                {/* ================= CATEGORY FILTERS ================= */}

                <div className="mb-12 flex flex-wrap justify-center gap-3">

                    {categories.map((category) => {
                        const Icon = categoryIcons[category];

                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => handleCategory(category)}
                                className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${isActive
                                    ? "border-cyan-400 bg-linear-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-cyan-900/30"
                                    : "border-white/10 bg-[#11182A] text-gray-400 hover:border-cyan-400/40 hover:text-cyan-400"
                                    }`}
                            >
                                <Icon size={17} />
                                {category}
                            </button>
                        );
                    })}

                </div>

                {/* ================= MAIN SKILLS LAYOUT ================= */}

                <div className="grid items-start gap-10 lg:grid-cols-3">

                    {/* LEFT: SKILL CARDS */}

                    <div className="lg:col-span-2">

                        <div className="mb-7 flex items-center justify-between">
                            <h3 className="text-xl font-bold">
                                {activeCategory === "All"
                                    ? "My Technology Stack"
                                    : `${activeCategory} Skills`}
                            </h3>

                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-400">
                                {filteredSkills.length} Skills
                            </span>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            {filteredSkills.map((skill, index) => {
                                const isSelected =
                                    selectedSkill.name === skill.name;

                                return (
                                    <button
                                        key={skill.name}
                                        onClick={() => handleSkill(skill)}
                                        className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-950/30 ${isSelected
                                            ? "border-cyan-400/60 bg-[#14223A]"
                                            : "border-white/10 bg-[#11182A] hover:border-purple-400/50"
                                            }`}
                                        style={{
                                            animationDelay: `${index * 70}ms`,
                                        }}
                                    >

                                        {/* Hover Glow */}

                                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                                        <div className="relative">

                                            {/* Skill Name */}

                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center gap-4">

                                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1B2540] text-2xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/40">
                                                        {typeof skill.icon === "string" ? skill.icon : React.createElement(skill.icon)}
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold text-white">
                                                            {skill.name}
                                                        </h4>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {skill.category}
                                                        </p>
                                                    </div>

                                                </div>

                                                <ArrowUpRight
                                                    size={20}
                                                    className="text-gray-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                                                />

                                            </div>

                                            {/* Progress Bar */}

                                            <div className="mt-7">

                                                <div className="mb-3 flex items-center justify-between">
                                                    <span className="text-xs text-gray-400">
                                                        Self-assessed level
                                                    </span>

                                                    <span className="text-sm font-bold text-cyan-400">
                                                        {skill.level}%
                                                    </span>
                                                </div>

                                                <div className="h-2 overflow-hidden rounded-full bg-[#28314D]">

                                                    <div
                                                        className={`h-full rounded-full bg-linear-to-r from-purple-600 to-cyan-400 transition-transform duration-1000 ease-out origin-left ${animateBars
                                                            ? "scale-x-100"
                                                            : "scale-x-0"
                                                            }`}
                                                        style={{ width: `${skill.level}%` }}
                                                    />

                                                </div>

                                            </div>

                                            {/* Selected Label */}

                                            {isSelected && (
                                                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                                                    <CheckCircle2 size={15} />
                                                    Selected Skill
                                                </div>
                                            )}

                                        </div>

                                    </button>
                                );
                            })}

                        </div>

                    </div>

                    {/* RIGHT: SKILL DETAILS */}

                    <div className="lg:sticky lg:top-28">

                        <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-linear-to-br from-[#151B35] to-[#0D192C] p-7 shadow-2xl shadow-purple-950/20">

                            {/* Background Decoration */}

                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl" />

                            <div className="relative">

                                <div className="mb-7 flex items-center justify-between">

                                    <span className="text-sm font-semibold tracking-widest text-cyan-400">
                                        SKILL DETAILS
                                    </span>

                                    <Sparkles className="text-purple-400" size={22} />

                                </div>

                                {/* Selected Skill */}

                                <div className="mb-6 flex items-center gap-4">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#202945] text-4xl shadow-lg shadow-cyan-950/20">
                                        {typeof selectedSkill.icon === "string"
                                            ? selectedSkill.icon
                                            : React.createElement(selectedSkill.icon)}
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold">
                                            {selectedSkill.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-400">
                                            {selectedSkill.experience}
                                        </p>
                                    </div>

                                </div>

                                {/* Description */}

                                <p className="text-sm leading-7 text-gray-400">
                                    {selectedSkill.description}
                                </p>

                                {/* Skill Level */}

                                <div className="mt-8 rounded-2xl border border-white/10 bg-[#0A1020]/70 p-5">

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">
                                            Self-assessed level
                                        </span>

                                        <span className="text-xl font-extrabold text-cyan-400">
                                            {selectedSkill.level}%
                                        </span>
                                    </div>

                                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#29314C]">

                                        <div
                                            key={selectedSkill.name}
                                            className="h-full rounded-full bg-linear-to-r from-purple-600 to-cyan-400 transition-all duration-1000 ease-out"
                                            style={{ width: `${selectedSkill.level}%` }}
                                        />

                                    </div>

                                </div>

                                {/* Concepts */}

                                <div className="mt-8">

                                    <h4 className="mb-5 font-bold">
                                        Related Concepts
                                    </h4>

                                    <div className="flex flex-wrap gap-2">

                                        {selectedSkill.concepts.map((concept) => (
                                            <span
                                                key={concept}
                                                className="rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-3 py-2 text-xs text-cyan-300 transition hover:border-purple-400/50 hover:bg-purple-500/10"
                                            >
                                                {concept}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                                {/* Close Details */}

                                {showDetails && (
                                    <button
                                        onClick={() => setShowDetails(false)}
                                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
                                    >
                                        <X size={16} />
                                        Close Selection
                                    </button>
                                )}

                            </div>

                        </div>

                    </div>

                </div>

                {/* ================= BOTTOM HIGHLIGHT ================= */}

                <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-linear-to-r from-purple-600/10 via-[#11182A] to-cyan-500/10 p-8 text-center sm:p-12">

                    <div className="mb-5 flex justify-center">
                        <div className="rounded-2xl border border-cyan-400/20 bg-[#18243B] p-4">
                            <Code2 size={35} className="text-cyan-400" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold sm:text-3xl">
                        Always Learning, Always Building
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
                        I continuously improve my development skills by learning
                        new technologies, solving problems and building practical
                        applications.
                    </p>

                    <a
                        href="#projects"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-semibold transition duration-300 hover:scale-105"
                    >
                        Explore My Projects
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default TechnicalSkills;
