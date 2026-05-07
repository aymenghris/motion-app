import { useQuery } from "convex/react"
import { MenuIcon } from "lucide-react"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"
import { Title } from "./Title"

interface DocumentNavbarProps {
    documentId: DocumentId
    isCollapsed: boolean
    onMenuClick: () => void
}

export const DocumentNavbar = ({
    documentId,
    isCollapsed,
    onMenuClick,
}: DocumentNavbarProps) => {
    const document = useQuery(api.documents.getDocumentById, { id: documentId })

    if (document === undefined) {
        return (
            <div className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-obsidian">
                <Title.Skeleton />
            </div>
        )
    }

    if (document === null) {
        return null
    }

    return (
        <nav className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-obsidian">
            {isCollapsed && (
                <MenuIcon
                    role="button"
                    onClick={onMenuClick}
                    className="size-6 cursor-pointer text-muted-foreground"
                />
            )}
            <div className="flex w-full items-center justify-between">
                <Title initialData={document} />
            </div>
        </nav>
    )
}
