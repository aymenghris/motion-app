import { useMutation } from "convex/react"
import { PlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import type { FC } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

interface CreateNestedDocumentProps {
    id: DocumentId
    expanded: boolean
    onExpand: () => void
}

export const CreateNestedDocument: FC<CreateNestedDocumentProps> = ({
    id,
    expanded,
    onExpand,
}) => {
    const router = useRouter()
    const createDocument = useMutation(api.documents.createDocument)

    const handleCreateDocument = () => {
        const promise = createDocument({
            title: "Untitled",
            parentDocument: id,
        }).then((documentId) => {
            if (!expanded) onExpand()
            router.push(`/documents/${documentId}`)
        })

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created successfully!",
            error: "Failed to create a new note",
        })
    }

    return (
        <Button
            onClick={handleCreateDocument}
            variant="sidebar-action"
            size="icon-xs"
        >
            <PlusIcon className="size-4 text-muted-foreground" />
        </Button>
    )
}
