import type { Metadata } from "next"
import "./globals.css"
import type { FC } from "react"

export const metadata: Metadata = {
    title: "Motion App",
    description:
        "Motion App is a flexible, all-in-one workspace for your notes, tasks, and projects.",
    icons: {
        icon: [
            {
                url: "/favicon-light.svg",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicon-dark.svg",
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
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
