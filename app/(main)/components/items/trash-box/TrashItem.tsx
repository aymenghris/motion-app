import { TrashIcon } from "lucide-react"
import type { FC } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { StaticItem } from "../StaticItem"
import { TrashBox } from "./TrashBox"

interface TrashItemProps {
    isMobile: boolean
}

export const TrashItem: FC<TrashItemProps> = ({ isMobile }) => {
    return (
        <Popover>
            <PopoverTrigger asChild className="mt-4 w-full">
                <StaticItem label="Trash" icon={TrashIcon} />
            </PopoverTrigger>
            <PopoverContent
                className="w-72 p-0"
                side={isMobile ? "bottom" : "right"}
            >
                <TrashBox />
            </PopoverContent>
        </Popover>
    )
}
