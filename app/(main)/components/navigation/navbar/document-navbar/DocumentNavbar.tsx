import { useQuery } from "convex/react"
import { PanelLeftCloseIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"
import { ArchivedBanner } from "./ArchivedBanner"
import { DocumentNavbarSkeleton } from "./DocumentNavbarSkeleton"
import { DocumentOptionsMenu } from "./DocumentOptionsMenu"
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
        return <DocumentNavbarSkeleton />
    }

    if (document === null) {
        return null
    }

    return (
        <>
            <nav className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-obsidian">
                {isCollapsed && (
                    <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={onMenuClick}
                    >
                        <PanelLeftCloseIcon className="size-5 text-muted-foreground" />
                    </Button>
                )}

                <div className="flex w-full items-center justify-between">
                    <Title initialData={document} />

                    <div className="flex items-center gap-x-2">
                        <DocumentOptionsMenu documentId={documentId} />
                    </div>
                </div>
            </nav>

            {document.isArchived && <ArchivedBanner documentId={documentId} />}
        </>
    )
}
