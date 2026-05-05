"use client"

import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <div className="flex items-center gap-x-2 p-2">
            <SearchIcon
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground"
            />

            <Input
                type="search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                aria-label="Filter documents by title"
                className="h-7 bg-secondary px-2 focus-visible:ring-transparent"
                placeholder="Filter by document title..."
            />
        </div>
    )
}
