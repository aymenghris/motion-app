import { useMutation } from "convex/react"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

export const useUnarchiveDocument = (documentId: DocumentId) => {
    const unarchiveDocument = useMutation(api.documents.unarchiveDocument)

    const handleUnarchiveDocument = () => {
        const promise = unarchiveDocument({ id: documentId })

        toast.promise(promise, {
            loading: "Unarchiving document...",
            success: "Document unarchived successfully",
            error: "Failed to unarchive document",
        })
    }

    return { handleUnarchiveDocument }
}
