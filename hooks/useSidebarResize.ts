import { useCallback, useEffect, useRef } from "react"
import { SIDEBAR_CONSTANTS } from "@/constants"

interface UseSidebarResizeProps {
    sidebarRef: React.RefObject<HTMLElement | null>
    navbarRef: React.RefObject<HTMLDivElement | null>
}

export const useSidebarResize = ({
    sidebarRef,
    navbarRef,
}: UseSidebarResizeProps) => {
    const isResizingRef = useRef(false)

    // Update both sidebar and navbar widths simultaneously
    const updateWidths = useCallback(
        (sidebarWidth: string, navbarWidth: string, navbarLeft: string) => {
            if (!sidebarRef.current || !navbarRef.current) return

            sidebarRef.current.style.width = sidebarWidth
            navbarRef.current.style.setProperty("width", navbarWidth)
            navbarRef.current.style.setProperty("left", navbarLeft)
        },
        [sidebarRef, navbarRef],
    )

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isResizingRef.current) return

            // Clamp width between min and max values
            const newWidth = Math.min(
                Math.max(e.clientX, SIDEBAR_CONSTANTS.MIN_WIDTH),
                SIDEBAR_CONSTANTS.MAX_WIDTH,
            )

            updateWidths(
                `${newWidth}px`,
                `calc(100% - ${newWidth}px)`,
                `${newWidth}px`,
            )
        },
        [updateWidths],
    )

    const handleMouseUp = useCallback(() => {
        isResizingRef.current = false
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
    }, [handleMouseMove])

    // Cleanup listeners on unmount
    useEffect(() => {
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [handleMouseMove, handleMouseUp])

    const handleMouseDown = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            e.preventDefault()

            isResizingRef.current = true
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        },
        [handleMouseMove, handleMouseUp],
    )

    return { handleMouseDown, updateWidths }
}
