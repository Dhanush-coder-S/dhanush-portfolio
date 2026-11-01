import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code2, Home, UserRound, Folder, Settings, GraduationCap, Send, Menu, X, } from "lucide-react";
import { navItems } from "../data/navItems"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 ${isActive
            ? "border border-indigo-400/20 bg-indigo-500/15 text-white"
            : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
        }`;

    const mobileLinkClasses = ({ isActive }) =>
        `flex items-center gap-4 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${isActive
            ? "bg-indigo-500/15 text-cyan-400"
            : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
        }`;

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 pt-3">
            <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-indigo-400/20 bg-[#080B1C]/95 px-5 py-2 backdrop-blur-xl sm:px-7">
                {/* LOGO */}
                <NavLink to="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-2" >
                    <Code2 className="h-9 w-9 text-cyan-400" />
                    <h1 className="text-lg font-bold tracking-wide text-white sm:text-xl">
                        Dhanush <span className="text-purple-400">S</span>
                    </h1>
                </NavLink>
                {/* DESKTOP NAVIGATION */}
                <div className="hidden items-center gap-1 lg:flex">
                    {
                        navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink key={item.name} to={item.link} end={item.link === "/"} className={navLinkClasses} >
                                    {
                                        ({ isActive }) => (<> <Icon size={17} className={isActive ? "text-cyan-400" : ""} /> {item.name} </>)
                                    }
                                </NavLink>
                            );
                        })
                    }
                </div>

                {/* CONTACT BUTTON */}
                <NavLink to="/contact" className="hidden items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:scale-105 lg:flex">
                    <Send size={16} />
                    Contact Me
                </NavLink>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="rounded-full p-2 text-cyan-400 transition hover:bg-white/10 lg:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>

            </nav>

            {/* MOBILE NAVIGATION */}
            {
                menuOpen && (
                    <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-indigo-400/20 bg-[#0B1020]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
                        <div className="flex flex-col gap-2">
                            {
                                navItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <NavLink key={item.name} to={item.link} end={item.link === "/"} onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
                                            <Icon size={19} />
                                            {item.name}
                                        </NavLink>
                                    );
                                })
                            }
                            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-5 py-3 font-semibold text-white" >
                                <Send size={17} />
                                Contact Me
                            </NavLink>

                        </div>
                    </div>
                )}

        </header>
    );
};

export default Navbar;
