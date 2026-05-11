import { TrashIcon } from "lucide-react"
import { useParams } from "next/navigation"
import type { FC } from "react"
import { ConfirmModal } from "@/components/modals/ConfirmModal"
import { Button } from "@/components/ui/button"
import { useDeleteDocument } from "@/hooks/document/useDeleteDocument"
import type { DocumentId } from "@/types/documents"

interface DeleteDocumentButtonProps {
    documentId: DocumentId
}

export const DeleteDocumentButton: FC<DeleteDocumentButtonProps> = ({
    documentId,
}) => {
    const params = useParams()
    const { handleDeleteDocument } = useDeleteDocument(
        documentId,
        params.documentId === documentId,
    )

    return (
        <ConfirmModal onConfirm={handleDeleteDocument}>
            <Button variant="trash-action" size="icon-xs">
                <TrashIcon className="size-4 text-muted-foreground" />
            </Button>
        </ConfirmModal>
    )
}
