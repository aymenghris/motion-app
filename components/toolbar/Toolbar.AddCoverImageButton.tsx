"use client"

import { ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCoverImageStoreSelector } from "@/stores/use-cover-image-store"

export const AddCoverImageButton = () => {
    const { onOpen } = useCoverImageStoreSelector()

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={onOpen}
            className="text-muted-foreground text-xs"
        >
            <ImageIcon className="mr-2 size-4" />
            add cover
        </Button>
    )
}
