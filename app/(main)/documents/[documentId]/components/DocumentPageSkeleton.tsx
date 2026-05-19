import { CoverImage } from "@/components/cover-image/CoverImage"
import { Skeleton } from "@/components/ui/skeleton"

interface DocumentPageSkeletonProps {
    titleWidth?: string
    lineWidths?: string[]
}

export const DocumentPageSkeleton = ({
    titleWidth = "50%",
    lineWidths = ["80%", "40%", "60%"],
}: DocumentPageSkeletonProps) => {
    return (
        <div>
            <CoverImage.Skeleton />
            <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
                <div className="space-y-4 pt-4 pl-8">
                    <Skeleton className={`h-14 w-[${titleWidth}]`} />
                    {lineWidths.map((width) => (
                        <Skeleton
                            key={crypto.randomUUID()}
                            className={`h-4 w-[${width}]`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
