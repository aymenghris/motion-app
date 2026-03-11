import type { Metadata } from "next"
import "./globals.css"
import type { FC } from "react"
import { FaviconHandler } from "@/components/FaviconHandler"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { assets } from "@/constants"

export const metadata: Metadata = {
    title: "Motion",
    description:
        "Motion is a flexible, all-in-one workspace for your notes, tasks, and projects.",
    icons: {
        icon: [
            {
                url: assets.brand.favicon.light,
                media: "(prefers-color-scheme: light)",
            },
            {
                url: assets.brand.favicon.dark,
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    storageKey="theme"
                >
                    <FaviconHandler />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
