import { GlobeIcon } from "lucide-react"
import { forwardRef } from "react"
import { Button } from "@/components/ui/button"

interface PublishTriggerProps {
    isPublished: boolean
}

export const PublishTrigger = forwardRef<
    HTMLButtonElement,
    PublishTriggerProps
>(({ isPublished, ...props }, ref) => {
    return (
        <Button size="sm" variant="ghost" ref={ref} {...props}>
            publish
            {isPublished && <GlobeIcon className="ml-2 size-4 text-sky-500" />}
        </Button>
    )
})
