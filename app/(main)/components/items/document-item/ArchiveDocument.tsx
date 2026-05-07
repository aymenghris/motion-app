import { useUser } from "@clerk/nextjs"
import { useMutation } from "convex/react"
import { MoreHorizontalIcon, TrashIcon } from "lucide-react"
import type { FC } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

interface ArchiveDocumentProps {
    id: DocumentId
}

export const ArchiveDocument: FC<ArchiveDocumentProps> = ({ id }) => {
    const { user } = useUser()

    const archiveDocument = useMutation(api.documents.archiveDocument)

    const handleArchiveDocument = () => {
        const promise = archiveDocument({ id })

        toast.promise(promise, {
            loading: "Archiving note...",
            success: "Note archived successfully!",
            error: "Failed to archive note",
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="sidebar-action" size="icon-xs">
                    <MoreHorizontalIcon className="size-4 text-muted-foreground" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-60"
                align="start"
                side="right"
                forceMount
            >
                <DropdownMenuItem onClick={handleArchiveDocument}>
                    <TrashIcon className="mr-2 size-4" />
                    <span>Move to Trash</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <div className="p-2 text-muted-foreground text-xs first-letter:uppercase">
                    last edited by: {user?.fullName}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
