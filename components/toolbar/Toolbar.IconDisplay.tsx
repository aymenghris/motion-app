"use client"

import { XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import { cn } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"
import { EmojiIconPicker } from "../EmojiIconPicker"

interface IconDisplayProps {
    icon?: string | null
    preview?: boolean
    documentId: DocumentId
}

export const IconDisplay = ({
    icon,
    preview,
    documentId,
}: IconDisplayProps) => {
    const { handleUpdateDocument } = useUpdateDocument(documentId)

    if (preview) {
        return icon ? <div className="pt-6 text-5xl">{icon}</div> : null
    }

    const handleRemoveIcon = () => {
        if (!icon) return
        handleUpdateDocument({ icon: null })
    }

    return (
        <div className="group/icon flex items-center gap-x-2 pt-6">
            <EmojiIconPicker
                handleEmojiClick={(icon) => handleUpdateDocument({ icon })}
            >
                <div className="text-5xl transition hover:opacity-75">
                    {icon}
                </div>
            </EmojiIconPicker>

            {icon && (
                <Button
                    size="icon"
                    variant="outline"
                    onClick={handleRemoveIcon}
                    className={cn(
                        "rounded-full text-muted-foreground text-xs opacity-0 transition",
                        "group-hover/icon:opacity-100",
                    )}
                >
                    <XIcon className="size-4" />
                </Button>
            )}
        </div>
    )
}
