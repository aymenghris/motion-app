"use client"

import { useParams } from "next/navigation"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { SingleImageDropzone } from "@/components/upload/single-image"
import {
    type CompletedFileState,
    UploaderProvider,
    useUploader,
} from "@/components/upload/uploader-provider"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import { useEdgeStore } from "@/lib/edgestore"
import { useCoverImageStoreSelector } from "@/stores/use-cover-image-store"
import type { DocumentId } from "@/types/documents"

// ─── Inner content (needs access to useUploader context) ───────────────────

interface CoverImageContentProps {
    onClose: () => void
}

const CoverImageContent = ({ onClose }: CoverImageContentProps) => {
    const { fileStates, uploadFiles, isUploading, resetFiles } = useUploader()
    const fileState = fileStates[0]

    const handleConfirm = async () => {
        if (!fileState || fileState.status !== "PENDING") return
        await uploadFiles()
        resetFiles()
        onClose()
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>cover image</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center gap-4">
                <SingleImageDropzone
                    width={200}
                    height={200}
                    disabled={isUploading}
                />

                <button
                    type="button"
                    onClick={handleConfirm}
                    disabled={!fileState || isUploading}
                >
                    {isUploading ? "Uploading…" : "Save"}
                </button>
            </div>
        </DialogContent>
    )
}

// ─── Modal shell ────────────────────────────────────────────────────────────

export const CoverImageModal = () => {
    const { documentId } = useParams<{ documentId: DocumentId }>()

    const { isOpen, onClose } = useCoverImageStoreSelector()
    const { handleUpdateDocument } = useUpdateDocument(documentId)
    const { edgestore } = useEdgeStore()

    const handleUploadCompleted = async (file: CompletedFileState) => {
        handleUpdateDocument({ coverImage: file.url })
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <UploaderProvider
                uploadFn={({ file, signal, onProgressChange }) =>
                    edgestore.publicFiles.upload({
                        file,
                        signal,
                        onProgressChange,
                    })
                }
                onUploadCompleted={handleUploadCompleted}
            >
                <CoverImageContent onClose={onClose} />
            </UploaderProvider>
        </Dialog>
    )
}
