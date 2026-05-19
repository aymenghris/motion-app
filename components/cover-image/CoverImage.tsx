import Image from "next/image"
import { cn } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"
import CoverImageButtons from "./CoverImageButtons"

interface CoverImageProps {
    imageUrl?: string | null
    preview?: boolean
}

export const CoverImage = ({ imageUrl, preview }: CoverImageProps) => {
    const hasImage = !!imageUrl
    const isPreview = Boolean(preview && hasImage)

    const heightClass = (() => {
        if (!hasImage) return "h-[12vh]" // Placeholder state
        if (isPreview) return "h-full" // Full screen preview
        return "h-[35vh]" // Default thumbnail
    })()

    const containerClasses = cn(
        "group relative w-full overflow-hidden",
        heightClass,
        !hasImage && "bg-muted",
        "transition-colors duration-300",
    )
    return (
        <div className={containerClasses}>
            {hasImage && (
                <Image
                    src={imageUrl}
                    alt="Cover Image"
                    fill
                    className="object-cover"
                    loading="lazy"
                />
            )}

            {hasImage && !preview && <CoverImageButtons imageUrl={imageUrl} />}
        </div>
    )
}

CoverImage.Skeleton = () => {
    return <Skeleton className="h-[12vh] w-full" />
}
