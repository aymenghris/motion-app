import type { LucideIcon } from "lucide-react"
import type { FC } from "react"

interface ItemIconProps {
    icon: LucideIcon
    documentIcon?: string
}

export const ItemIcon: FC<ItemIconProps> = ({ icon: Icon, documentIcon }) => {
    if (documentIcon) {
        return (
            <span className="mr-2 shrink-0 text-lg" role="img" aria-hidden>
                {documentIcon}
            </span>
        )
    }

    return <Icon className="mr-2 h-4.5 shrink-0 text-muted-foreground" />
}
