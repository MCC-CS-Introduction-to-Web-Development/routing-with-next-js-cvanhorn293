"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page1() {
    const router = useRouter();

    const navigateToExternal = (url: string) => {
        window.location.href = url;
    };

    const navigateToInternal = (path: string) => {
        router.push(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Page 1</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">Router Navigation Demo</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Programmatic navigation using Next.js router and window location API</p>
                </div>

                <div className="mb-8 p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-shadow">
                    <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">Internal Navigation (router.push)</h2>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigateToInternal("/")}
                            className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>Go to Home</span>
                            </span>
                        </button>
                        <button
                            onClick={() => navigateToInternal("/page2")}
                            className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>Go to Page 2</span>
                            </span>
                        </button>
                        <button
                            onClick={() => navigateToInternal("/page3")}
                            className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>Go to Page 3</span>
                            </span>
                        </button>
                        <button
                            onClick={() => navigateToInternal("/products")}
                            className="group px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>Browse Products</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mb-8 p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-shadow">
                    <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">External Navigation (window.location)</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">For external URLs, we use window.location.href or window.open()</p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigateToExternal("https://nextjs.org")}
                            className="group px-6 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>Next.js Official Site</span>
                            </span>
                        </button>
                        <button
                            onClick={() => navigateToExternal("https://tailwindcss.com")}
                            className="group px-6 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>Tailwind CSS</span>
                            </span>
                        </button>
                        <button
                            onClick={() => navigateToExternal("https://jsonplaceholder.typicode.com/posts")}
                            className="group px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-left font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                        >
                            <span className="flex items-center justify-between">
                                <span>API Example - JSONPlaceholder</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
                    <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Traditional Link Components</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">These use the standard Link component from Next.js</p>
                    <div className="flex flex-col gap-3">
                        <Link href="/" className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all text-center font-semibold shadow-lg hover:scale-105">
                            Back to Home
                        </Link>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all text-center font-semibold shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
