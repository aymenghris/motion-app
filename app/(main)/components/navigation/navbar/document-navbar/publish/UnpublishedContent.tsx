import { GlobeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UnpublishedContentProps {
    isSubmitting: boolean
    onPublish: () => void
}

export const UnpublishedContent = ({
    isSubmitting,
    onPublish,
}: UnpublishedContentProps) => {
    return (
        <div className="flex flex-col items-center justify-center *:first-letter:uppercase">
            <GlobeIcon className="mb-2 size-8 text-muted-foreground" />
            <p className="mb-2 font-medium text-sm">publish this note</p>
            <span className="mb-4 text-muted-foreground text-xs">
                share your work with others.
            </span>
            <Button
                disabled={isSubmitting}
                onClick={onPublish}
                className="w-full text-xs"
                size="sm"
            >
                publish
            </Button>
        </div>
    )
}
