import { XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRemoveCoverImage } from "@/hooks/useRemoveCoverImage"

interface RemoveCoverButtonProps {
    imageUrl?: string | null
}

export const RemoveCoverButton = ({ imageUrl }: RemoveCoverButtonProps) => {
    const { removeCoverImage } = useRemoveCoverImage()

    return (
        <Button
            onClick={() => removeCoverImage(imageUrl)}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
        >
            <XIcon className="mr-2 size-4" />
            remove
        </Button>
    )
}
