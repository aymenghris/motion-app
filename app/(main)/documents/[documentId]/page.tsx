"use client"

import { useQuery } from "convex/react"
import { useParams } from "next/navigation"
import { Toolbar } from "@/components/toolbar"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

const DocumentPage = () => {
    const params = useParams()
    const documentId = params.documentId as DocumentId

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
        <div className="pt-40">
            <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
                <Toolbar initialData={document} />
            </div>
        </div>
    )
}

export default DocumentPage
