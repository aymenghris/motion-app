import { PlusCircle } from "lucide-react"
import { useCreateDocument } from "@/hooks/useCreateDocument"
import { Item } from "../item/Item"

export const NewPageButton = () => {
    const { handleCreateDocument } = useCreateDocument()

    return (
        <Item
            onClick={handleCreateDocument}
            label="new page"
            icon={PlusCircle}
        />
    )
}
