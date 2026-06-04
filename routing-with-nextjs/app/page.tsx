import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950 font-sans">
            <main className="max-w-6xl mx-auto px-6 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Next.js 15 App Router</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Next.js Routing</h1>
                </div>

                {/* Navigation Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Internal Pages Section */}
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">Internal Pages</h2>
                        <div className="flex flex-col gap-3">
                            <Link href="/page1" className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200">
                                <span className="flex items-center justify-center gap-2">Page 1 - Router Demo</span>
                            </Link>
                            <Link href="/page2" className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200">
                                <span className="flex items-center justify-center gap-2">Page 2 - Features</span>
                            </Link>
                            <Link href="/page3" className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200">
                                <span className="flex items-center justify-center gap-2">Page 3 - About</span>
                            </Link>
                            <Link href="/products" className="group px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all text-center font-semibold shadow-md hover:shadow-lg hover:scale-105 transform duration-200">
                                <span className="flex items-center justify-center gap-2">
                                    Browse Products
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Dynamic</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* External Resources Section */}
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">External Resources</h2>
                        <div className="flex flex-col gap-3">
                            <Link
                                href="https://nextjs.org/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                            >
                                <span className="flex items-center justify-center gap-2">Next.js Docs</span>
                            </Link>
                            <Link
                                href="https://react.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                            >
                                <span className="flex items-center justify-center gap-2">React Docs</span>
                            </Link>
                            <Link
                                href="https://api.github.com/users/octocat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                            >
                                <span className="flex items-center justify-center gap-2">GitHub API</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
