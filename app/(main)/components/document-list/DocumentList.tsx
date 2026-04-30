"use client"

import { useQuery } from "convex/react"
import { FileIcon } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { type FC, useCallback, useState } from "react"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"
import { DocumentItem } from "../items/document-item/DocumentItem"
import { EmptyState } from "./EmptyState"
import { LoadingSkeletons } from "./LoadingSkeletons"

interface DocumentListProps {
    parentDocumentId?: DocumentId
    level?: number
}

type ExpandedState = Record<string, boolean>

export const DocumentList: FC<DocumentListProps> = ({
    parentDocumentId,
    level = 0,
}) => {
    const params = useParams()
    const router = useRouter()
    const [expanded, setExpanded] = useState<ExpandedState>({})

    const documents = useQuery(api.documents.getSidebar, {
        parentDocument: parentDocumentId,
    })

    const toggleExpand = useCallback((documentId: string) => {
        setExpanded((prev) => ({
            ...prev,
            [documentId]: !prev[documentId],
        }))
    }, [])

    const navigateTo = useCallback(
        (documentId: string) => router.push(`/documents/${documentId}`),
        [router],
    )

    const isActive = useCallback(
        (documentId: string) => params.documentId === documentId,
        [params.documentId],
    )

    // Loading
    if (documents === undefined) {
        return <LoadingSkeletons level={level} />
    }

    // Empty
    if (documents.length === 0) {
        return <EmptyState level={level} />
    }

    return (
        <>
            {documents.map((document) => (
                <div key={document._id}>
                    {/* Render each document as a clickable item */}
                    <DocumentItem
                        id={document._id}
                        label={document.title}
                        icon={FileIcon}
                        documentIcon={document.icon}
                        level={level}
                        active={isActive(document._id)}
                        expanded={expanded[document._id]}
                        onExpand={() => toggleExpand(document._id)}
                        onClick={() => navigateTo(document._id)}
                    />

                    {/* If this document is expanded, recursively render its children */}
                    {expanded[document._id] && (
                        <DocumentList
                            parentDocumentId={document._id}
                            level={level + 1}
                        />
                    )}
                </div>
            ))}
        </>
    )
}
