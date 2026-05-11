import { UndoIcon } from "lucide-react"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { useUnarchiveDocument } from "@/hooks/document/useUnarchiveDocument"
import type { DocumentId } from "@/types/documents"

interface RestoreDocumentButtonProps {
    documentId: DocumentId
}

export const UnarchiveDocumentButton: FC<RestoreDocumentButtonProps> = ({
    documentId,
}) => {
    const { handleUnarchiveDocument } = useUnarchiveDocument(documentId)

    return (
        <Button
            variant="trash-action"
            onClick={handleUnarchiveDocument}
            size="icon-xs"
        >
            <UndoIcon className="size-4 text-muted-foreground" />
        </Button>
    )
}
