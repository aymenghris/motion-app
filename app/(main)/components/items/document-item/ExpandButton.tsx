import { ChevronDown, ChevronRight } from "lucide-react"
import type { FC, MouseEvent } from "react"
import { cn } from "@/lib/utils"

type ExpandButtonProps = {
    expanded: boolean
    onExpand: () => void
}

export const ExpandButton: FC<ExpandButtonProps> = ({ expanded, onExpand }) => {
    const ChevronIcon = expanded ? ChevronDown : ChevronRight

    const handleClick = (e: MouseEvent) => {
        e.stopPropagation()
        onExpand()
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={expanded ? "Collapse" : "Expand"}
            aria-expanded={expanded}
            className={cn(
                "mr-1 h-full rounded-sm",
                "hover:bg-neutral-300 dark:hover:bg-neutral-600",
            )}
        >
            <ChevronIcon className="size-4 text-muted-foreground/50" />
        </button>
    )
}
