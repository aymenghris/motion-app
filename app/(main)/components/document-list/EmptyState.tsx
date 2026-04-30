import type { FC } from "react"
import { INDENT_PER_LEVEL, NESTED_BASE_PADDING, ROOT_LEVEL } from "@/constants"
import { cn } from "@/lib/utils"

export const EmptyState: FC<{ level: number }> = ({ level }) => {
    const paddingLeft =
        level > ROOT_LEVEL
            ? level * INDENT_PER_LEVEL + NESTED_BASE_PADDING
            : undefined

    return (
        <p
            style={{ paddingLeft }}
            className={cn(
                "hidden",
                "font-medium text-muted-foreground/80 text-sm first-letter:capitalize",
                "last:block",
            )}
        >
            no pages inside
        </p>
    )
}
