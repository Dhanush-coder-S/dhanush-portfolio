import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Heart, Mail, MapPin, Code2, } from "lucide-react";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { quickLinks } from '../data/const quickLinks'

const Footer = () => {
    const currentYear = new Date().getFullYear();   

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#070B18] px-5 pt-16 text-white sm:px-8 lg:px-16">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
            <div className="relative mx-auto max-w-7xl">
                {/* Main Footer */}
                <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-purple-600 text-lg font-extrabold">
                                DS
                            </div>
                            <span className="text-xl font-bold">
                                Dhanush<span className="text-cyan-400">.</span>
                            </span>
                        </Link>
                        <h3 className="mt-6 text-xl font-bold">
                            Full Stack Python Developer
                        </h3>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                            Passionate about building responsive web applications,
                            developing REST APIs, and transforming ideas into
                            practical digital solutions.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="https://github.com/Dhanush-coder-S"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dhanush-coder-s/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:text-purple-400"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://www.naukri.com/mnjuser/profile"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
                            >
                                <FaBriefcase size={20} />
                                Naukri Profile
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">
                            Quick Links
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {
                                quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">
                            Get In Touch
                        </h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <MapPin size={19} className="mt-1 shrink-0 text-cyan-400" />
                                <p className="text-sm leading-6 text-slate-400">
                                    Vellore, Tamil Nadu, India
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail size={19} className="mt-1 shrink-0 text-cyan-400" />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanushs1624@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="break-all text-sm text-slate-400 transition hover:text-cyan-400"
                                >
                                    dhanushs1624@gmail.com
                                </a>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20"
                            >
                                Let's Connect
                                <Code2 size={16} />
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row">
                    <p className="text-sm text-slate-500">
                        © {currentYear} Dhanush S. All rights reserved.
                    </p>
                    <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
                        Built with
                        <Heart size={15} className="mx-1 fill-red-500 text-red-500" />
                        using
                        <span className="font-medium text-cyan-400">React.js</span>
                        &
                        <span className="font-medium text-purple-400">Tailwind CSS</span>
                    </p>
                    <a
                        href="#home"
                        onClick={(event) => {
                            event.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        Back to Top
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
                            <ArrowUp size={16} />
                        </span>
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
