import React from "react";
import Link from "next/link";

export default function Page2() {
    const features = [
        { title: "Fast Routing", description: "Instant page transitions with Next.js App Router" },
        { title: "Modern UI", description: "Beautiful Tailwind CSS styling with dark mode" },
        { title: "Dynamic Routes", description: "Parameterized URLs for flexible content" },
        { title: "External Links", description: "Seamless navigation to external resources" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-purple-950">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Page 2</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Features</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Discover what makes this Next.js routing demo special</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/" className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all hover:scale-105 shadow-lg">
                        Back to Home
                    </Link>
                    <Link href="/page3" className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-semibold border-2 border-zinc-200 dark:border-zinc-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:scale-105">
                        Next: About
                    </Link>
                </div>
            </div>
        </div>
    );
}
