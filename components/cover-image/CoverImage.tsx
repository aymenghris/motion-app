import Image from "next/image"
import { cn } from "@/lib/utils"
import CoverImageButtons from "./CoverImageButtons"

interface CoverImageProps {
    url?: string | null
    preview?: boolean
}

export const CoverImage = ({ url, preview }: CoverImageProps) => {
    return (
        <div
            className={cn(
                "group relative h-[35vh] w-full",
                url && "bg-muted",
                !url && "h-[12vh]",
                !!url && preview && "h-full",
            )}
        >
            {!!url && (
                <Image
                    src={url}
                    alt="Cover Image"
                    fill
                    className="object-cover"
                />
            )}

            {url && !preview && <CoverImageButtons />}
        </div>
    )
}
