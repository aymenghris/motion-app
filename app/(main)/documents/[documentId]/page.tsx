"use client"

import { useQuery } from "convex/react"
import { useParams } from "next/navigation"
import { CoverImage } from "@/components/cover-image/CoverImage"
import { Editor } from "@/components/Editor"
import { Toolbar } from "@/components/toolbar"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"
import { DocumentPageSkeleton } from "./components/DocumentPageSkeleton"

const DocumentPage = () => {
    const { documentId } = useParams<{ documentId: DocumentId }>()

    const document = useQuery(api.documents.getDocumentById, {
        id: documentId,
    })

    if (document === undefined) {
        return <DocumentPageSkeleton />
    }

    if (document === null) {
        return <div>Document not found</div>
    }

    return (
        <div className="pb-40">
            <CoverImage imageUrl={document.coverImage} />

            <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
                <Toolbar initialData={document} />
                <Editor
                    documentId={documentId}
                    initialContent={document.content}
                />
            </div>
        </div>
    )
}

export default DocumentPage
