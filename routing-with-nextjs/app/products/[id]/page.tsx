import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
    {
        id: "1",
        name: "Laptop",
        price: "$999",
        description: "High-performance laptop with 16GB RAM and 512GB SSD",
        specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "15.6 inch Display"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: "2",
        name: "Smartphone",
        price: "$699",
        description: "Latest smartphone with advanced camera and 5G connectivity",
        specs: ["6.5 inch OLED", "128GB Storage", "5G", "Triple Camera System"],
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "3",
        name: "Headphones",
        price: "$199",
        description: "Premium wireless headphones with active noise cancellation",
        specs: ["Wireless", "Noise Cancellation", "30hr Battery", "Premium Sound"],
        color: "from-orange-500 to-red-500",
    },
    {
        id: "4",
        name: "Tablet",
        price: "$499",
        description: "Versatile tablet perfect for work and entertainment",
        specs: ["10.5 inch Display", "128GB Storage", "All-day Battery", "Stylus Support"],
        color: "from-green-500 to-emerald-500",
    },
];

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} - Products`,
        description: product.description,
    };
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950">
            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className={`h-3 bg-gradient-to-r ${product.color}`}></div>

                    <div className="p-10">
                        <div className="mb-6">
                            <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">{product.name}</h1>
                            <p className={`text-4xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>{product.price}</p>
                        </div>

                        <div className="mb-8 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-2xl">
                            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">{product.description}</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">Specifications</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {product.specs.map((spec, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
                                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            <button className={`group flex-1 min-w-[200px] px-8 py-4 bg-gradient-to-r ${product.color} text-white rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105`}>
                                <span className="flex items-center justify-center gap-2">
                                    Add to Cart
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </button>
                            <Link href="/products" className="flex-1 min-w-[200px] px-8 py-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full font-bold text-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all hover:scale-105 text-center">
                                Back to Products
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="inline-block px-8 py-3 text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
