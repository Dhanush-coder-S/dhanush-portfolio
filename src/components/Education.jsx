import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { educationDetails } from "../data/educationDetails"

const Education = () => {

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#070B18] px-5 py-24 text-white sm:px-8 lg:px-16">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        <BookOpen size={16} />
                        My Academic Background
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        My{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
                        My academic journey, educational qualifications, and learning
                        experiences.
                    </p>
                </div>

                {/* Education Cards */}
                <div className="relative mx-auto max-w-3xl space-y-8">
                    {/* Timeline */}
                    <div className="absolute bottom-8 left-5 top-8 w-px bg-linear-to-b from-cyan-400 via-purple-500 to-cyan-400 sm:left-7" />
                    {
                        educationDetails.map((item, index) => {
                            const isCyan = item.color === "cyan";
                            return (
                                <div key={index} className="relative pl-14 sm:pl-20">
                                    {/* Timeline Icon */}
                                    <div
                                        className={`absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[#10172B] sm:left-2 ${isCyan
                                            ? "border-cyan-400 text-cyan-400"
                                            : "border-purple-400 text-purple-400"
                                            }`}
                                    >
                                        <GraduationCap size={20} />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`group rounded-2xl border bg-[#10172B]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-8 ${isCyan
                                            ? "border-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
                                            : "border-white/10 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${isCyan
                                                ? "bg-cyan-400/10 text-cyan-300"
                                                : "bg-purple-400/10 text-purple-300"
                                                }`}
                                        >
                                            {item.year}
                                        </span>

                                        <h2 className="mt-5 text-xl font-bold leading-relaxed text-white sm:text-2xl">
                                            {item.degree}
                                        </h2>

                                        <p
                                            className={`mt-3 text-sm font-semibold ${isCyan ? "text-cyan-300" : "text-purple-300"
                                                }`}
                                        >
                                            {item.institution}
                                        </p>

                                        <p className="mt-2 text-sm text-slate-400">
                                            {item.college}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {/* Bottom Text */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-slate-500">
                        Learning never stops. Always growing and improving.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Education;
