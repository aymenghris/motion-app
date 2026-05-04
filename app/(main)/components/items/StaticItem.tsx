import type { LucideIcon } from "lucide-react"
import { type ButtonHTMLAttributes, forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StaticItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon: LucideIcon
    active?: boolean
}

export const StaticItem = forwardRef<HTMLButtonElement, StaticItemProps>(
    (
        {
            label,
            onClick,
            icon: Icon,
            children,
            active = false,
            className,
            ...props
        },
        ref,
    ) => {
        return (
            <Button
                ref={ref}
                onClick={onClick}
                variant="sidebar"
                size="full"
                className={cn(
                    "group pl-3",
                    active && "bg-primary/5 text-primary",
                    className,
                )}
                capitalized={false}
                {...props}
            >
                <Icon className="mr-2 h-4.5 shrink-0 text-muted-foreground" />

                <span className="truncate first-letter:uppercase">{label}</span>

                {children}
            </Button>
        )
    },
)

StaticItem.displayName = "StaticItem"
