"use client"

import { useQuery } from "convex/react"
import { useParams } from "next/navigation"
import { CoverImage } from "@/components/cover-image/CoverImage"
import { Toolbar } from "@/components/toolbar"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

const DocumentPage = () => {
    const { documentId } = useParams<{ documentId: DocumentId }>()

    const document = useQuery(api.documents.getDocumentById, {
        id: documentId,
    })

    if (document === undefined) {
        return <div>Loading...</div>
    }

    if (document === null) {
        return <div>Document not found</div>
    }

    return (
        <div className="pb-40">
            <CoverImage url={document.coverImage} />

            <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
                <Toolbar initialData={document} />
            </div>
        </div>
    )
}

export default DocumentPage
