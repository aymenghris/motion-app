import { useMutation } from "convex/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

export const useArchiveDocument = (documentId: DocumentId) => {
    const router = useRouter()
    const archiveDocument = useMutation(api.documents.archiveDocument)

    const handleArchiveDocument = () => {
        const promise = archiveDocument({ id: documentId })

        toast.promise(promise, {
            loading: "Archiving document...",
            success: "Document archived successfully",
            error: "Failed to archive document",
        })

        router.push("/documents")
    }

    return { handleArchiveDocument }
}
