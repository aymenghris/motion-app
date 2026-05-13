import { useMutation } from "convex/react"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

type UpdateDocumentFields = {
    title?: string
    content?: string
    coverImage?: string | null
    icon?: string | null
    isPublished?: boolean
}

export const useUpdateDocument = (documentId: DocumentId) => {
    const updateDocument = useMutation(api.documents.updateDocument)

    const handleUpdateDocument = (fields: UpdateDocumentFields) => {
        const promise = updateDocument({ id: documentId, ...fields })

        toast.promise(promise, {
            loading: "Updating document...",
            success: "Document updated successfully",
            error: "Failed to update document",
        })
    }

    return { handleUpdateDocument }
}
