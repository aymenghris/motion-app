import { useMutation } from "convex/react"
import { UndoIcon } from "lucide-react"
import type { FC } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

interface RestoreDocumentButtonProps {
    documentId: DocumentId
}

export const RestoreDocumentButton: FC<RestoreDocumentButtonProps> = ({ documentId }) => {
    const restoreDocument = useMutation(api.documents.restoreDocument)

    const handleRestore = (documentId: DocumentId) => {
        const promise = restoreDocument({ id: documentId })

        toast.promise(promise, {
            loading: "Restoring document...",
            success: "Document restored successfully",
            error: "Failed to restore document",
        })
    }
    return (
        <Button
            variant="trash-action"
            onClick={() => handleRestore(documentId)}
            size="icon-xs"
        >
            <UndoIcon className="size-4 text-muted-foreground" />
        </Button>
    )
}
