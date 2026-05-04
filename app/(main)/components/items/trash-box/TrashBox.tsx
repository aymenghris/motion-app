"use client"

import { useQuery } from "convex/react"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FullScreenLoader } from "@/components/FullScreenLoader"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api"
import { cn } from "@/lib/utils"
import type { DocumentId } from "@/types/documents"
import { DeleteDocumentButton, RestoreDocumentButton } from "./buttons"

export const TrashBox = () => {
    const router = useRouter()

    const archivedDocuments = useQuery(api.documents.getTrash)

    const [search, setSearch] = useState("")

    const filteredDocuments = archivedDocuments?.filter((document) =>
        document.title.toLowerCase().includes(search.toLowerCase()),
    )

    const handleShowDocument = (documentId: DocumentId) => {
        router.push(`/documents/${documentId}`)
    }

    if (archivedDocuments === undefined) {
        return <FullScreenLoader />
    }

    if (filteredDocuments?.length === 0) {
        return (
            <div className="mt-2 px-1 pb-1">
                <p className="pb-2 text-center text-muted-foreground text-xs first-letter:uppercase">
                    no documents found.
                </p>
            </div>
        )
    }

    return (
        <div className="text-sm">
            <div className="flex items-center gap-x-1 p-2">
                <SearchIcon className="size-4" />
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-7 bg-secondary px-2 focus-visible:ring-transparent"
                    placeholder="Filter by page title..."
                />
            </div>

            <div>
                {filteredDocuments?.map((document) => (
                    <div
                        key={document._id}
                        className={cn(
                            "group relative flex items-center justify-between",
                            "h-9 w-full",
                            "text-primary text-sm",
                            "rounded-sm",
                            "hover:bg-primary/5",
                        )}
                    >
                        {/* MAIN ACTION BUTTON (The background click) */}
                        <button
                            type="button"
                            onClick={() => handleShowDocument(document._id)}
                            className="absolute inset-0 z-0 flex items-center pl-2 text-left"
                        >
                            <span className="w-[calc(100%-60px)] truncate">
                                {document.title}
                            </span>
                        </button>

                        {/* SECONDARY ACTIONS (The Icons) */}
                        {/* z-10 ensures these sit on top of the main action button */}
                        <div className="relative z-10 ml-auto flex items-center pr-1">
                            <RestoreDocumentButton documentId={document._id} />
                            <DeleteDocumentButton documentId={document._id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
