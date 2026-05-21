"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { useDocumentPublish } from "@/hooks/useDocumentPublish"
import { useOrigin } from "@/hooks/useOrigin"
import type { DocumentData } from "@/types/documents"
import { PublishedContent } from "./PublishedContent"
import { PublishTrigger } from "./PublishTrigger"
import { UnpublishedContent } from "./UnpublishedContent"

interface PublishProps {
    initialData: DocumentData
}

export const Publish = ({ initialData }: PublishProps) => {
    const origin = useOrigin()
    const documentUrl = origin ? `${origin}/preview/${initialData._id}` : ""

    const { isSubmitting, publish, unpublish } = useDocumentPublish(
        initialData._id,
    )
    const { copied, copy } = useCopyToClipboard()

    return (
        <Popover>
            <PopoverTrigger>
                <PublishTrigger isPublished={initialData.isPublished} />
            </PopoverTrigger>

            <PopoverContent
                className="w-72"
                align="end"
                alignOffset={8}
                forceMount
            >
                {initialData.isPublished ? (
                    <PublishedContent
                        documentUrl={documentUrl}
                        copied={copied}
                        isSubmitting={isSubmitting}
                        onCopy={() => void copy(documentUrl)}
                        onUnpublish={() => unpublish()}
                    />
                ) : (
                    <UnpublishedContent
                        isSubmitting={isSubmitting}
                        onPublish={() => publish()}
                    />
                )}
            </PopoverContent>
        </Popover>
    )
}
