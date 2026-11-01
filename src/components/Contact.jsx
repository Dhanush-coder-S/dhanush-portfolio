import React from 'react'

const Contact = () => {
    return (
        <section className="scroll-mt-20 border-t border-white/10 px-6 py-24 lg:px-16">
            <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-linear-to-br from-[#15152E] to-[#0D1930] p-8 text-center shadow-2xl shadow-purple-950/20 sm:p-14">
                <p className="mb-4 font-semibold tracking-widest text-cyan-400">
                    GET IN TOUCH
                </p>
                <h2 className="text-4xl font-extrabold sm:text-5xl">
                    Let's Work <span className="text-cyan-400">Together</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
                    I am actively looking for opportunities to start my career as
                    a Software Developer. Feel free to connect with me for job
                    opportunities, collaborations and professional discussions.
                </p>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanushs1624@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-block rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-9 py-4 font-bold transition hover:scale-105"
                >
                    Contact Me ↗
                </a>

                <div className="mt-10 flex flex-wrap justify-center gap-7">
                    <a
                        href="https://github.com/Dhanush-coder-S"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 transition hover:text-cyan-400"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dhanush-coder-s"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 transition hover:text-cyan-400"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanushs1624@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 transition hover:text-cyan-400"
                    >
                        Email
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact