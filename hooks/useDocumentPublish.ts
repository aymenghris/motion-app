"use client"

import { useState } from "react"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import type { DocumentId } from "@/types/documents"

const PUBLISH_MESSAGES = {
    loading: "Publishing document...",
    success: "Document published successfully",
    error: "Failed to publish document",
}

const UNPUBLISH_MESSAGES = {
    loading: "Unpublishing document...",
    success: "Document unpublished successfully",
    error: "Failed to unpublish document",
}

export const useDocumentPublish = (documentId: DocumentId) => {
    const { handleUpdateDocument } = useUpdateDocument(documentId)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const updatePublishState = (isPublished: boolean) => {
        setIsSubmitting(true)

        handleUpdateDocument(
            { isPublished },
            isPublished ? PUBLISH_MESSAGES : UNPUBLISH_MESSAGES,
        )

        setIsSubmitting(false)
    }

    return {
        isSubmitting,
        publish: () => updatePublishState(true),
        unpublish: () => updatePublishState(false),
    }
}
