import { useUser } from "@clerk/nextjs"
import { MoreHorizontalIcon, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useArchiveDocument } from "@/hooks/document/useArchiveDocument"
import { title } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"

interface DocumentItemMenuProps {
    documentId: DocumentId
}

export const DocumentItemMenu = ({ documentId }: DocumentItemMenuProps) => {
    const { user } = useUser()
    const { handleArchiveDocument } = useArchiveDocument(documentId)

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
                    <span>{title("move to trash")}</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <div className="p-2 text-muted-foreground text-xs first-letter:uppercase">
                    last edited by: {user?.fullName}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
