import { useCallback, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { SIDEBAR_CONSTANTS } from "@/constants"

interface UseSidebarStateProps {
    updateWidths: (
        sidebarWidth: string,
        navbarWidth: string,
        navbarLeft: string,
    ) => void
}

export const useSidebarState = ({ updateWidths }: UseSidebarStateProps) => {
    const isMobile = useMediaQuery(SIDEBAR_CONSTANTS.MOBILE_BREAKPOINT)
    const [isResetting, setIsResetting] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(isMobile)

    // Trigger a width transition animation
    const withResetAnimation = useCallback((action: () => void) => {
        setIsResetting(true)
        action()
        setTimeout(
            () => setIsResetting(false),
            SIDEBAR_CONSTANTS.RESET_DURATION,
        )
    }, [])

    const collapse = useCallback(() => {
        setIsCollapsed(true)
        withResetAnimation(() => {
            updateWidths("0", "100%", "0")
        })
    }, [withResetAnimation, updateWidths])

    const resetWidth = useCallback(() => {
        setIsCollapsed(false)
        withResetAnimation(() => {
            updateWidths(
                isMobile ? "100%" : `${SIDEBAR_CONSTANTS.DEFAULT_WIDTH}px`,
                isMobile
                    ? "0"
                    : `calc(100% - ${SIDEBAR_CONSTANTS.DEFAULT_WIDTH}px)`,
                isMobile ? "100%" : `${SIDEBAR_CONSTANTS.DEFAULT_WIDTH}px`,
            )
        })
    }, [isMobile, withResetAnimation, updateWidths])

    return {
        isMobile,
        isResetting,
        isCollapsed,
        collapse,
        resetWidth,
    }
}
