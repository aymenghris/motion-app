import { useMutation } from "convex/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

export const useDeleteDocument = (
    documentId: DocumentId,
    shouldRedirect = true,
) => {
    const router = useRouter()
    const deleteDocument = useMutation(api.documents.deleteDocument)

    const handleDeleteDocument = () => {
        if (shouldRedirect) {
            router.push("/documents")
        }

        const promise = deleteDocument({ id: documentId })

        toast.promise(promise, {
            loading: "Deleting document...",
            success: "Document deleted successfully",
            error: "Failed to delete document",
        })
    }

    return { handleDeleteDocument }
}
