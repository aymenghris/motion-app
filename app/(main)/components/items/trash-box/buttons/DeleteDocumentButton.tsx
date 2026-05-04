import { useMutation } from "convex/react"
import { TrashIcon } from "lucide-react"
import { useParams } from "next/navigation"
import router from "next/router"
import type { FC } from "react"
import { toast } from "sonner"
import { ConfirmModal } from "@/components/modals/ConfirmModal"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

interface DeleteDocumentButtonProps {
    documentId: DocumentId
}

export const DeleteDocumentButton: FC<DeleteDocumentButtonProps> = ({
    documentId,
}) => {
    const deleteDocument = useMutation(api.documents.deleteDocument)
    const params = useParams()

    const handleDelete = (documentId: DocumentId) => {
        const promise = deleteDocument({ id: documentId })

        toast.promise(promise, {
            loading: "Deleting document...",
            success: "Document deleted successfully",
            error: "Failed to delete document",
        })

        if (params.documentId === documentId) {
            void router.push("/documents")
        }
    }

    return (
        <ConfirmModal onConfirm={() => handleDelete(documentId)}>
            <Button variant="trash-action" size="icon-xs">
                <TrashIcon className="size-4 text-muted-foreground" />
            </Button>
        </ConfirmModal>
    )
}
