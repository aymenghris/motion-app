"use client"

import { ModeToggle } from "@/components/ModeToggle"
import { useScrollTop } from "@/hooks/useScrollTop"
import { cn } from "@/lib/utils"
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

            <div className={cn("flex items-center justify-between gap-x-2")}>
                <ModeToggle />
            </div>
        </div>
    )
}
