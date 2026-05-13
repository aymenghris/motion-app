"use client"

import { SmileIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import type { DocumentId } from "@/types/documents"
import { EmojiIconPicker } from "../EmojiIconPicker"

interface AddIconButtonProps {
    documentId: DocumentId
}

export const AddIconButton = ({ documentId }: AddIconButtonProps) => {
    const { handleUpdateDocument } = useUpdateDocument(documentId)

    return (
        <EmojiIconPicker
            asChild
            handleEmojiClick={(icon: string) => handleUpdateDocument({ icon })}
        >
            <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground text-xs"
            >
                <SmileIcon className="mr-2 size-4" />
                add icon
            </Button>
        </EmojiIconPicker>
    )
}
