import Link from "next/link"

const links = [
    {
        name: "Product",
        path: "/products"
    },
    {
        name: "Pricing",
        path: "/pricing"
    },
    {
        name: "Industry",
        path: "/industry"
    },
    {
        name: "Customer Stories",
        path: "/customer-stories"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Blog",
        path: "/blog"
    },
]
export default function Header() {
    return(
        <div className="flex justify-between items-center px-32 py-2 bg-primary text-white">
            <div className="flex items-center gap-6 text-3xl">
                <h1>Y</h1>
                <h1>Crest</h1>
            </div>
            <div className="flex items-center gap-7">
                {
                    links.map((link) => (
                        <Link href={link.path} key={link.path}>{link.name}</Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-10">
                <button>Login</button>
                <button className="px-6 py-3 rounded-full border">Talk to Us</button>
            </div>
        </div>
    )
}