"use client"

import { useQuery } from "convex/react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { FullScreenLoader } from "@/components/FullScreenLoader"
import { api } from "@/convex/_generated/api"
import { DeleteDocumentButton, UnarchiveDocumentButton } from "./buttons"
import { SearchInput } from "./SearchInput"

const getDocumentTitle = (title?: string | null) => title?.trim() || "Untitled"

export const TrashBox = () => {
    const archivedDocuments = useQuery(api.documents.getTrash)
    const [search, setSearch] = useState("")

    const normalizedSearch = search.trim().toLowerCase()

    const filteredDocuments = useMemo(() => {
        if (!archivedDocuments) return []

        return archivedDocuments.filter((document) =>
            getDocumentTitle(document.title)
                .toLowerCase()
                .includes(normalizedSearch),
        )
    }, [archivedDocuments, normalizedSearch])

    if (archivedDocuments === undefined) {
        return <FullScreenLoader />
    }

    const isTrashEmpty = archivedDocuments.length === 0
    const hasNoMatches = !isTrashEmpty && filteredDocuments.length === 0

    return (
        <div className="text-sm">
            <SearchInput value={search} onChange={setSearch} />

            <div className="mt-2 px-1 pb-1">
                {isTrashEmpty ? (
                    <p className="py-2 text-center text-muted-foreground text-xs">
                        Trash is empty.
                    </p>
                ) : hasNoMatches ? (
                    <p className="py-2 text-center text-muted-foreground text-xs">
                        No documents match your search.
                    </p>
                ) : (
                    <div className="space-y-1">
                        {filteredDocuments.map((document) => {
                            const title = getDocumentTitle(document.title)

                            return (
                                <div
                                    key={document._id}
                                    className="group flex h-9 items-center justify-between rounded-sm text-primary hover:bg-primary/5"
                                >
                                    <Link
                                        href={`/documents/${document._id}`}
                                        className="flex h-full min-w-0 flex-1 items-center px-2 text-left"
                                        title={title}
                                    >
                                        <span className="truncate">
                                            {title}
                                        </span>
                                    </Link>

                                    <div className="ml-2 flex shrink-0 items-center pr-1">
                                        <UnarchiveDocumentButton
                                            documentId={document._id}
                                        />
                                        <DeleteDocumentButton
                                            documentId={document._id}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
