"use client"

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
import { Skeleton } from "@/components/ui/skeleton"
import { useArchiveDocument } from "@/hooks/document/useArchiveDocument"
import type { DocumentId } from "@/types/documents"

interface DocumentOptionsMenuProps {
    documentId: DocumentId
}

export const DocumentOptionsMenu = ({
    documentId,
}: DocumentOptionsMenuProps) => {
    const { user } = useUser()
    const { handleArchiveDocument } = useArchiveDocument(documentId)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost">
                    <MoreHorizontalIcon className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-60"
                align="end"
                alignOffset={8}
                forceMount
            >
                <DropdownMenuItem onClick={handleArchiveDocument}>
                    <div className="flex w-full items-center">
                        <TrashIcon className="mr-2 size-4" />
                        Delete
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="p-2">
                    <p className="font-medium text-muted-foreground text-xs">
                        Last edited by: {user?.fullName}
                    </p>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

DocumentOptionsMenu.Skeleton = () => <Skeleton className="size-10" />
