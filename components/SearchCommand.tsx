"use client"

import { useQuery } from "convex/react"
import { File } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { api } from "@/convex/_generated/api"
import { useSearchStoreSelector } from "@/stores/use-search-store"

export const SearchCommand = () => {
    const router = useRouter()
    const documents = useQuery(api.documents.getSearch)

    const { isOpen, onClose, toggle } = useSearchStoreSelector()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                toggle()
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [toggle])

    return (
        <CommandDialog open={isOpen} onOpenChange={onClose}>
            <CommandInput placeholder="Search notes..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Notes">
                    {documents?.map((document) => (
                        <CommandItem
                            key={document._id}
                            value={document.title}
                            onSelect={() => {
                                router.push(`/documents/${document._id}`)
                                onClose()
                            }}
                        >
                            {document.icon ? (
                                <p className="mr-2 text-lg">{document.icon}</p>
                            ) : (
                                <File className="mr-2 size-4" />
                            )}

                            <span>{document.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
