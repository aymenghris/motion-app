"use client"

import "@blocknote/core/fonts/inter.css"
import { useCreateBlockNote } from "@blocknote/react"
import { BlockNoteView } from "@blocknote/shadcn"
import "@blocknote/shadcn/style.css"
import { useTheme } from "next-themes"
import { useEditorPersistence } from "@/hooks/useEditorPersistence"
import { useEdgeStore } from "@/lib/edgestore"
import type { DocumentId } from "@/types/documents"

interface EditorProps {
    documentId: DocumentId
    initialContent?: string
    editable?: boolean
}

const Editor = ({ documentId, initialContent, editable }: EditorProps) => {
    /*
     * BlockNote stores editor state as complex nested JS objects in memory,
     * but databases, localStorage, and APIs only accept string data.
     * We stringify() before saving/sending to convert objects → JSON strings,
     * and parse() when loading/receiving to convert JSON strings → usable objects.
     */

    const { resolvedTheme } = useTheme()
    const { edgestore } = useEdgeStore()

    const handleUpload = async (file: File) => {
        const res = await edgestore.publicFiles.upload({
            file,
        })

        return res.url
    }

    const editor = useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) : undefined,
        uploadFile: handleUpload,
    })

    const { handleChange } = useEditorPersistence({ documentId, editor })

    return (
        <BlockNoteView
            editor={editor}
            editable={editable}
            onChange={handleChange}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
        />
    )
}

export default Editor
