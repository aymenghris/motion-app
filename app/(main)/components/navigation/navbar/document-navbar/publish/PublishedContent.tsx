import { CheckIcon, CopyIcon, GlobeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PublishedContentProps {
    documentUrl: string
    copied: boolean
    isSubmitting: boolean
    onCopy: () => void
    onUnpublish: () => void
}

export const PublishedContent = ({
    documentUrl,
    copied,
    isSubmitting,
    onCopy,
    onUnpublish,
}: PublishedContentProps) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-x-2">
                <GlobeIcon className="size-4 animate-pulse text-sky-500" />
                <p className="font-medium text-sky-500 text-xs first-letter:uppercase">
                    this note is live on web.
                </p>
            </div>

            <div className="flex items-center">
                <input
                    readOnly
                    value={documentUrl}
                    className="h-8 flex-1 rounded-l-md border bg-muted px-2 text-xs"
                />
                <Button
                    onClick={onCopy}
                    disabled={!documentUrl || copied}
                    className="h-8 rounded-l-none"
                    aria-label="copy document link"
                >
                    {copied ? (
                        <CheckIcon className="size-4" />
                    ) : (
                        <CopyIcon className="size-4" />
                    )}
                </Button>
            </div>

            <Button
                size="sm"
                className="w-full text-xs"
                disabled={isSubmitting}
                onClick={onUnpublish}
            >
                unpublish
            </Button>
        </div>
    )
}
