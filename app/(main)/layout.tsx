import type { FC } from "react"
import { AuthLoadingScreen } from "@/components/AuthLoadingScreen"
import { Navigation } from "./components/navigation/Navigation"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <AuthLoadingScreen />

            <div className="flex dark:bg-obsidian">
                <Navigation />
                <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
        </>
    )
}

export default MainLayout
