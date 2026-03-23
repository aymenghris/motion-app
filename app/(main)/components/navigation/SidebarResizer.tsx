import type { FC } from "react"
import { cn } from "@/lib/utils"

interface SidebarResizerProps {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void
    onDoubleClick: () => void
}

// Invisible drag handle on the right edge of the sidebar
export const SidebarResizer: FC<SidebarResizerProps> = ({
    onMouseDown,
    onDoubleClick,
}) => (
    <hr
        onMouseDown={onMouseDown}
        onDoubleClick={onDoubleClick}
        className={cn(
            "absolute top-0 right-0 h-full w-1",
            "cursor-ew-resize bg-primary/10 opacity-0",
            "transition",
            "group-hover/sidebar:opacity-100",
        )}
    />
)
