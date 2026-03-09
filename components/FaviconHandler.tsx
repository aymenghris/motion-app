"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"
import { assets } from "@/constants"

export const FaviconHandler = () => {
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        // Find the existing favicon link tags
        const icons = document.querySelectorAll('link[rel*="icon"]')

        // Use the mapping you confirmed:
        // Light theme -> White icon (assets.logo.favicon.light)
        // Dark theme -> Black icon (assets.logo.favicon.dark)
        const iconUrl =
            resolvedTheme === "dark"
                ? assets.brand.favicon.dark
                : assets.brand.favicon.light

        icons.forEach((icon) => {
            const link = icon as HTMLLinkElement
            link.href = iconUrl
            // Remove media queries that might override our manual change
            link.removeAttribute("media")
        })
    }, [resolvedTheme])

    return null
}
