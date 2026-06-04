import Link from "next/link";

const products = [
    { id: "1", name: "Laptop", price: "$999", color: "from-blue-500 to-cyan-500" },
    { id: "2", name: "Smartphone", price: "$699", color: "from-purple-500 to-pink-500" },
    { id: "3", name: "Headphones", price: "$199", color: "from-orange-500 to-red-500" },
    { id: "4", name: "Tablet", price: "$499", color: "from-green-500 to-emerald-500" },
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">Dynamic Routes</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Products</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">Click any product to see dynamic routing in action</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`} className="group relative overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${product.color}`}></div>
                            <div className="p-8">
                                <h2 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{product.name}</h2>
                                <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{product.price}</p>
                                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    <span className="font-medium">View Details</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
