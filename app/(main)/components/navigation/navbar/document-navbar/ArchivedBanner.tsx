"use client"

import { ConfirmModal } from "@/components/modals/ConfirmModal"
import { Button } from "@/components/ui/button"
import { useDeleteDocument } from "@/hooks/document/useDeleteDocument"
import { useUnarchiveDocument } from "@/hooks/document/useUnarchiveDocument"
import { cn } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"

interface ArchivedBannerProps {
    documentId: DocumentId
}

export const ArchivedBanner = ({ documentId }: ArchivedBannerProps) => {
    const { handleDeleteDocument } = useDeleteDocument(documentId)
    const { handleUnarchiveDocument } = useUnarchiveDocument(documentId)

    return (
        <div
            className={cn(
                "flex items-center justify-center gap-x-2",
                "w-full p-2",
                "text-center text-sm text-white",
                "bg-rose-500",
            )}
        >
            <p>This page is in the Trash.</p>

            <Button
                size="sm-banner"
                onClick={handleUnarchiveDocument}
                variant="banner-action"
            >
                restore page
            </Button>

            <ConfirmModal onConfirm={handleDeleteDocument}>
                <Button size="sm-banner" variant="banner-action">
                    delete forever
                </Button>
            </ConfirmModal>
        </div>
    )
}
