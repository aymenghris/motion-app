import { ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCoverImageStoreSelector } from "@/stores/use-cover-image-store"

interface ChangeCoverButtonProps {
    imageUrl?: string | null
}

export const ChangeCoverButton = ({ imageUrl }: ChangeCoverButtonProps) => {
    const { replaceImage } = useCoverImageStoreSelector()

    return (
        <Button
            onClick={() => replaceImage(imageUrl)}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
        >
            <ImageIcon className="mr-2 h-4 w-4" />
            change cover
        </Button>
    )
}
