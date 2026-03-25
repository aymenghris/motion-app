import { ChevronsLeft } from "lucide-react"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarToggleButtonProps {
    onClick: () => void
    isMobile: boolean
}

export const SidebarToggleButton: FC<SidebarToggleButtonProps> = ({
    onClick,
    isMobile,
}) => (
    <Button
        onClick={onClick}
        size="icon-sm"
        variant="ghost"
        className={cn(
            "absolute top-1 right-2",
            "text-muted-foreground",
            "opacity-0 transition",
            "hover:bg-neutral-300 dark:hover:bg-neutral-600",
            "group-hover/sidebar:opacity-100",
            isMobile && "opacity-100",
        )}
    >
        <ChevronsLeft />
    </Button>
)
