import React from "react";
import Link from "next/link";

export default function Page3() {
    const techStack = [
        { name: "Next.js 15", description: "React framework with App Router" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "App Router", description: "Modern routing system" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950">
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Page 3</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">About This Project</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Built with modern web technologies for optimal performance</p>
                </div>

                {/* About Content */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-2xl border border-zinc-200 dark:border-zinc-800 mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">Project Overview</h2>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
                        This Next.js routing demonstration showcases the power of modern web routing, including internal navigation, dynamic routes with parameterized URLs, and seamless integration with external resources. Built as a learning project to explore the capabilities of Next.js 15's App
                        Router.
                    </p>

                    <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Tech Stack</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                                <span className="text-2xl">•</span>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{tech.name}</h4>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{tech.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Key Features</h3>
                    <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                            <span>Internal page routing with smooth transitions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                            <span>Dynamic product routes using [id] parameter syntax</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                            <span>External link navigation with proper security attributes</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                            <span>Programmatic routing using useRouter hook</span>
                        </li>
                    </ul>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg">
                        ← Back to Home
                    </Link>
                    <Link href="/products" className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-semibold border-2 border-zinc-200 dark:border-zinc-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all hover:scale-105">
                        Browse Products →
                    </Link>
                </div>
            </div>
        </div>
    );
}
