'use client'

import { CompassIcon, HomeIcon, SearchIcon, SquarePlusIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [ 
    { label: "Home", href: "/", Icon: HomeIcon},
    { label: "Search", href: "/search", Icon: SearchIcon},
    { label: "Explore", href: "/explore", Icon: CompassIcon},
    { label: "Create", href: "/create", Icon: SquarePlusIcon},
    { label: "Profile", href: "/profile", Icon: UserIcon},
]

export const Navbar = () => {
    const pathname = usePathname()


    return (
        <aside className="border border-transparent border-r-black h-screen w-72 bg-white pl-4 pt-2">
            <Image src="/logo.svg" alt="Instagram logo" width={100} height={100} />

            <div className="flex gap-4 flex-col">
                {navLinks.map(({ label, href, Icon }) => (
                <div key={label}>
                    <Link href={href} className="flex justify-start items-center gap-2">
                        <Icon className="h-6 w-6" />
                        <span className='font-semibold ml-2 text-xl'>{label}</span>
                    </Link>
                </div>
            ))}
            </div>
        </aside>
    )
}