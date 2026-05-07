import type { LucideIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import {
    BASE_PADDING,
    INDENT_PER_LEVEL,
    NESTED_BASE_PADDING,
} from "@/constants"
import { cn } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"
import { ArchiveDocument } from "./ArchiveDocument"
import { CreateNestedDocument } from "./CreateNestedDocument"
import { DocumentItemIcon } from "./DocumentItemIcon"
import { ExpandButton } from "./ExpandButton"

interface DocumentItemProps {
    label: string
    icon: LucideIcon
    onClick: () => void
    id: DocumentId
    active?: boolean
    expanded?: boolean
    level?: number
    documentIcon?: string
    onExpand: () => void
}

export const DocumentItem = ({
    id,
    label,
    icon,
    onClick,
    active = false,
    expanded = false,
    level = 0,
    documentIcon,
    onExpand,
}: DocumentItemProps) => {
    const paddingLeft = level * INDENT_PER_LEVEL + BASE_PADDING

    return (
        <div
            style={{ paddingLeft }}
            className={cn(
                "group",
                "flex items-center justify-start gap-2",
                "min-h-6.75 w-full py-1 pr-3",
                "text-muted-foreground text-sm",
                "hover:bg-primary/5",
                active && "bg-primary/5 text-primary",
                "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            )}
        >
            <ExpandButton expanded={expanded} onExpand={onExpand} />
            <DocumentItemIcon icon={icon} documentIcon={documentIcon} />

            <button
                type="button"
                onClick={onClick}
                className={cn(
                    "flex-1",
                    "min-w-0",
                    "text-left font-medium text-sm",
                    "cursor-pointer",
                )}
            >
                <span className="block truncate">{label}</span>
            </button>

            <div className="ml-auto flex items-center gap-x-2">
                <ArchiveDocument id={id} />

                <CreateNestedDocument
                    id={id}
                    expanded={expanded}
                    onExpand={onExpand}
                />
            </div>
        </div>
    )
}

DocumentItem.Skeleton = ({ level = 0 }: { level?: number }) => {
    const paddingLeft = level * INDENT_PER_LEVEL + NESTED_BASE_PADDING

    return (
        <div style={{ paddingLeft }} className="flex gap-x-2 py-1.5">
            <Skeleton className="size-4" />
            <Skeleton className="h-4 w-1/3" />
        </div>
    )
}
