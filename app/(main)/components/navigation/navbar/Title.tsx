"use client"

import { useMutation } from "convex/react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api"
import type { DocumentData } from "@/types/documents"

interface TitleProps {
    initialData: DocumentData
}

export const Title = ({ initialData }: TitleProps) => {
    const updateDocument = useMutation(api.documents.updateDocument)

    const inputRef = useRef<HTMLInputElement>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(initialData.title)

    const enableEditing = () => {
        setIsEditing(true)

        setTimeout(() => {
            inputRef.current?.focus()
            inputRef.current?.setSelectionRange(
                0,
                inputRef.current.value.length,
            )
        }, 0)
    }

    const disableEditing = () => {
        setIsEditing(false)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onBlur = () => {
        disableEditing()

        if (title.length <= 0) {
            return
        }

        if (initialData.title === title) {
            return
        }

        void updateDocument({
            id: initialData._id,
            title,
        })
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            disableEditing()
            void updateDocument({
                id: initialData._id,
                title,
            })
        }
    }
    return (
        <div className="flex items-center gap-x-1">
            {!!initialData.icon && <p>{initialData.icon}</p>}
            {isEditing ? (
                <Input
                    ref={inputRef}
                    value={title}
                    onChange={onChange}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
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
