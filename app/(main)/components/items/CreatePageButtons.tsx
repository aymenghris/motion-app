import { PlusCircle, PlusIcon } from "lucide-react"
import { useCreateDocument } from "@/hooks/useCreateDocument"
import { StaticItem } from "./StaticItem"

export const NewPageButton = () => {
    const { handleCreateDocument } = useCreateDocument()

    return (
        <StaticItem
            onClick={handleCreateDocument}
            label="new page"
            icon={PlusCircle}
        />
    )
}

export const AddPageButton = () => {
    const { handleCreateDocument } = useCreateDocument()

    return (
        <StaticItem
            onClick={handleCreateDocument}
            label="add a page"
            icon={PlusIcon}
        />
    )
}
