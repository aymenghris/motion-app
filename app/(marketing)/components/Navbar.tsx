"use client"

import { ModeToggle } from "@/components/ModeToggle"
import { useScrollTop } from "@/hooks/useScrollTop"
import { cn } from "@/lib/utils"
import { NavbarAuth } from "./auth/NavbarAuth"
import { Logo } from "./Logo"

export const Navbar = () => {
    const scrolled = useScrollTop()

    return (
        <div
            className={cn(
                "flex items-center justify-between",
                "fixed top-0 z-50 w-full p-6",
                "bg-background",
                "dark:bg-obsidian",
                scrolled && "border-b",
            )}
        >
            <Logo />

            <div className="flex items-center justify-between gap-x-4 max-md:grow">
                <NavbarAuth />
                <ModeToggle />
            </div>
        </div>
    )
}
