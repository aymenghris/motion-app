import { ChevronDown, ChevronRight } from "lucide-react"
import type { FC } from "react"
import { cn } from "@/lib/utils"

type ExpandButtonProps = {
    expanded: boolean
    onExpand: () => void
}

export const ExpandButton: FC<ExpandButtonProps> = ({ expanded, onExpand }) => {
    const ChevronIcon = expanded ? ChevronDown : ChevronRight

    return (
        <button
            type="button"
            onClick={onExpand}
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
