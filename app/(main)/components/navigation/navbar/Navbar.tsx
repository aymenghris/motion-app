"use client"

import { MenuIcon } from "lucide-react"
import { useParams } from "next/navigation"
import type { FC } from "react"
import { cn } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"
import { DocumentNavbar } from "./DocumentNavbar"

interface NavbarProps {
    navbarRef: React.RefObject<HTMLDivElement | null>
    isResetting: boolean
    isCollapsed: boolean
    isMobile: boolean
    onMenuClick: () => void
}

export const Navbar: FC<NavbarProps> = ({
    navbarRef,
    isResetting,
    isCollapsed,
    isMobile,
    onMenuClick,
}) => {
    const { documentId } = useParams()

    return (
        <div
            ref={navbarRef}
            className={cn(
                "absolute top-0 left-60 z-50",
                "w-[calc(100%-240px)]",
                isResetting && "transition-all duration-300 ease-in-out",
                isMobile && "left-0 w-full",
            )}
        >
            {documentId ? (
                <DocumentNavbar
                    documentId={documentId as DocumentId}
                    isCollapsed={isCollapsed}
                    onMenuClick={onMenuClick}
                />
            ) : (
                <nav className="w-full bg-transparent px-3 py-2">
                    {isCollapsed && (
                        <MenuIcon
                            onClick={onMenuClick}
                            role="button"
                            className="cursor-pointer text-muted-foreground"
                        />
                    )}
                </nav>
            )}
        </div>
    )
}
