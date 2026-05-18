import { useParams } from "next/navigation"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import { useEdgeStore } from "@/lib/edgestore"
import type { DocumentId } from "@/types/documents"

export const useRemoveCoverImage = () => {
    const { documentId } = useParams<{ documentId: DocumentId }>()
    const { handleUpdateDocument } = useUpdateDocument(documentId)
    const { edgestore } = useEdgeStore()

    const removeCoverImage = async (url?: string | null) => {
        if (!url) return

        await edgestore.publicFiles.delete({ url })
        handleUpdateDocument({ coverImage: null })
    }

    return { removeCoverImage }
}
