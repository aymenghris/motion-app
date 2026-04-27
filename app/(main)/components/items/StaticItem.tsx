import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ItemProps {
    label: string
    icon: LucideIcon
    onClick: () => void
    children?: ReactNode
    active?: boolean
}

export const StaticItem = ({
    label,
    onClick,
    icon: Icon,
    children,
    active = false,
}: ItemProps) => {
    return (
        <Button
            onClick={onClick}
            variant="sidebar"
            size="full"
            className={cn("group pl-3", active && "bg-primary/5 text-primary")}
        >
            <Icon className="mr-2 h-4.5 shrink-0 text-muted-foreground" />

            <span className="truncate">{label}</span>

            {children}
        </Button>
    )
}
