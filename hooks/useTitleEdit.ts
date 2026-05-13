import { type KeyboardEvent, useEffect, useRef, useState } from "react"

interface UseTitleEditOptions {
    savedTitle: string // The last persisted value from the server
    onSave: (title: string) => void
    selectAllOnFocus?: boolean
}

export const useTitleEdit = <T extends HTMLElement = HTMLInputElement>({
    savedTitle,
    onSave,
    selectAllOnFocus = false,
}: UseTitleEditOptions) => {
    const inputRef = useRef<T>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(savedTitle)

    useEffect(() => {
        setTitle(savedTitle)
    }, [savedTitle])

    const enableEditing = () => {
        setIsEditing(true)

        setTimeout(() => {
            inputRef.current?.focus()

            if (
                selectAllOnFocus &&
                inputRef.current instanceof HTMLInputElement
            ) {
                inputRef.current.setSelectionRange(
                    0,
                    inputRef.current.value.length,
                )
            }
        }, 0)
    }

    const disableEditing = () => {
        setIsEditing(false)
    }

    const commitSave = () => {
        if (title.length <= 0 || savedTitle === title) return
        onSave(title)
    }

    const handleBlur = () => {
        disableEditing()
        commitSave()
    }

    const handleKeyDown = (event: KeyboardEvent<T>) => {
        if (event.key !== "Enter") return
        disableEditing()
        commitSave()
    }

    return {
        inputRef,
        isEditing,
        title,
        setTitle,
        enableEditing,
        disableEditing,
        handleBlur,
        handleKeyDown,
    }
}
