"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { useSidebarResize } from "@/hooks/useSidebarResize"
import { useSidebarState } from "@/hooks/useSidebarState"
import { cn } from "@/lib/utils"
import { DocumentList } from "../document-list/DocumentList"
import {
    AddPageButton,
    NewPageButton,
    SearchItem,
    SettingsItem,
} from "../items"
import { UserItems } from "../UserItems"
import { Navbar } from "./Navbar"
import { SidebarResizer } from "./SidebarResizer"
import { SidebarToggleButton } from "./SidebarToggleButton"

export const Navigation = () => {
    const pathname = usePathname()

    const sidebarRef = useRef<HTMLElement>(null)
    const navbarRef = useRef<HTMLDivElement>(null)

    const { handleMouseDown, updateWidths } = useSidebarResize({
        sidebarRef,
        navbarRef,
    })

    const { isMobile, isResetting, isCollapsed, collapse, resetWidth } =
        useSidebarState({ updateWidths })

    // Collapse sidebar on mobile when screen size changes
    useEffect(() => {
        isMobile ? collapse() : resetWidth()
    }, [isMobile, collapse, resetWidth])

    // Collapse sidebar on route change on mobile
    // biome-ignore lint/correctness/useExhaustiveDependencies: pathname triggers effect on route change
    useEffect(() => {
        if (isMobile) collapse()
    }, [pathname, isMobile, collapse])

    return (
        <>
            <aside
                ref={sidebarRef}
                className={cn(
                    "flex flex-col",
                    "relative z-50 h-screen w-60",
                    "bg-secondary",
                    "overflow-y-auto",
                    "group/sidebar",
                    isResetting && "transition-all duration-300 ease-in-out",
                    isMobile && "w-0",
                )}
            >
                <SidebarToggleButton onClick={collapse} isMobile={isMobile} />

                <UserItems />

                <SearchItem />

                <SettingsItem />

                <NewPageButton />

                <div className="mt-4">
                    <DocumentList />
                    <AddPageButton />
                </div>

                {/* Drag handle for resizing */}
                <SidebarResizer
                    onMouseDown={handleMouseDown}
                    onDoubleClick={resetWidth}
                />
            </aside>

            {/* Top navbar that adjusts its width based on sidebar state */}
            <Navbar
                navbarRef={navbarRef}
                isResetting={isResetting}
                isCollapsed={isCollapsed}
                isMobile={isMobile}
                onMenuClick={resetWidth}
            />
        </>
    )
}
