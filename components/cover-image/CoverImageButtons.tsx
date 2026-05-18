import { ImageIcon, XIcon } from "lucide-react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import { useCoverImageStoreSelector } from "@/stores/use-cover-image-store"
import type { DocumentId } from "@/types/documents"

const CoverImageButtons = () => {
    const { onOpen } = useCoverImageStoreSelector()
    const { documentId } = useParams<{ documentId: DocumentId }>()
    const { handleUpdateDocument } = useUpdateDocument(documentId)

    return (
        <div className="absolute right-5 bottom-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
            <Button
                onClick={onOpen}
                className="text-muted-foreground text-xs"
                variant="outline"
                size="sm"
            >
                <ImageIcon className="mr-2 h-4 w-4" />
                change cover
            </Button>

            <Button
                onClick={() => handleUpdateDocument({ coverImage: null })}
                className="text-muted-foreground text-xs"
                variant="outline"
                size="sm"
            >
                <XIcon className="mr-2 h-4 w-4" />
                remove
            </Button>
        </div>
    )
}

export default CoverImageButtons
