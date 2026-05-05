import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { StaticItem } from "./StaticItem"
import { useSearchStoreSelector } from "@/stores/use-search-store"

export const SearchItem = () => {
    const { onOpen } = useSearchStoreSelector()

    return (
        <StaticItem label="search" icon={SearchIcon} onClick={onOpen}>
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
