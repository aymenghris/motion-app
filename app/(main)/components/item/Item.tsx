import type { LucideIcon } from "lucide-react"
import type { FC, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"
import { ExpandButton } from "./ExpandButton"
import { ItemIcon } from "./ItemIcon"

const INDENT_PER_LEVEL = 12
const BASE_PADDING = 12

interface ItemProps {
    label: string
    icon: LucideIcon
    onClick: () => void
    children?: ReactNode
    id?: DocumentId
    active?: boolean
    expanded?: boolean
    level?: number
    documentIcon?: string
    onExpand?: () => void
}

export const Item: FC<ItemProps> = ({
    label,
    onClick,
    icon,
    children,
    id,
    active = false,
    expanded = false,
    level = 0,
    documentIcon,
    onExpand,
}) => {
    const paddingLeft = level * INDENT_PER_LEVEL + BASE_PADDING

    return (
        <Button
            onClick={onClick}
            variant="sidebar"
            size="full"
            style={{ paddingLeft }}
            className={cn("group", active && "bg-primary/5 text-primary")}
        >
            {id && <ExpandButton expanded={expanded} onExpand={onExpand} />}

            <ItemIcon icon={icon} documentIcon={documentIcon} />

            <span className="truncate">{label}</span>

            {children}
        </Button>
    )
}
