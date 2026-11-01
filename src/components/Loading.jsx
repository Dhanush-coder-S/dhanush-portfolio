
import React from "react";
import { Code2 } from "lucide-react";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center bg-[#070B18]">
            <div className="flex flex-col items-center">
                {/* Animated Logo */}
                <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500" />
                    {/* Inner Ring */}
                    <div className="absolute inset-3 animate-[spin_3s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-purple-500 border-l-cyan-400" />
                    {/* Logo */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600/30 to-cyan-500/20 shadow-lg shadow-cyan-500/20">
                        <Code2 size={32} className="text-cyan-400" />
                    </div>
                </div>

                {/* Name */}
                <h2 className="text-2xl font-bold tracking-wider text-white">
                    DHANUSH <span className="text-cyan-400">S</span>
                </h2>
                <p className="mt-2 text-sm tracking-[0.3em] text-slate-400">
                    FULL STACK DEVELOPER
                </p>
                {/* Loading Animation */}
                <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />
                </div>
                <p className="mt-4 animate-pulse text-xs text-slate-500">
                    Initializing experience...
                </p>
            </div>

            <style>{`
                @keyframes loading {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(200%);
                    }
                }
            `}</style>

        </div>
    );
};

export default Loader;
