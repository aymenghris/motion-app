"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument"
import { useTitleEdit } from "@/hooks/useTitleEdit"
import type { DocumentData } from "@/types/documents"

interface TitleProps {
    initialData: DocumentData
}

export const Title = ({ initialData }: TitleProps) => {
    const { handleUpdateDocument } = useUpdateDocument(initialData._id)

    const {
        inputRef,
        isEditing,
        title,
        setTitle,
        enableEditing,
        handleBlur,
        handleKeyDown,
    } = useTitleEdit({
        savedTitle: initialData.title,
        selectAllOnFocus: true,
        onSave: (title) => void handleUpdateDocument({ title }),
    })

    return (
        <div className="flex items-center gap-x-1">
            {!!initialData.icon && <p>{initialData.icon}</p>}
            {isEditing ? (
                <Input
                    ref={inputRef}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className="h-6 px-2 focus-visible:ring-transparent"
                />
            ) : (
                <Button
                    onClick={enableEditing}
                    variant="ghost"
                    size="sm"
                    className="h-auto px-2 py-1 font-medium"
                    capitalized={false}
                >
                    <span className="truncate">{initialData.title}</span>
                </Button>
            )}
        </div>
    )
}

Title.Skeleton = () => {
    return <Skeleton className="h-7 w-64 rounded-md" />
}
