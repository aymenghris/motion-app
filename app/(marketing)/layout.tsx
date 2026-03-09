import { Navbar } from "@marketing/components/Navbar"
import type { FC } from "react"

interface MarketingLayoutProps {
    children: React.ReactNode
}

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
    return (
        <div className="dark:bg-obsidian">
            <Navbar />
            <main className="pt-40">{children}</main>
        </div>
    )
}

export default MarketingLayout
