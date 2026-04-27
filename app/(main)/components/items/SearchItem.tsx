import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { StaticItem } from "./StaticItem"

export const SearchItem = () => {
    return (
        <StaticItem label="search" icon={SearchIcon} onClick={() => {}}>
            <kbd
                className={cn(
                    "inline-flex items-center gap-1",
                    "ml-auto h-5 px-1.5",
                    "font-medium font-mono text-muted-foreground text-xs",
                    "rounded border bg-muted",
                    "pointer-events-none select-none",
                )}
            >
                <span className="text-xs">⌘</span>K
            </kbd>
        </StaticItem>
    )
}
