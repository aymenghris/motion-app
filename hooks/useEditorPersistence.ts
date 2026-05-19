import type { BlockNoteEditor, PartialBlock } from "@blocknote/core"
import "@blocknote/core/fonts/inter.css"
import "@blocknote/shadcn/style.css"
import { useMutation } from "convex/react"
import debounce from "lodash.debounce"
import { useCallback, useEffect } from "react"
import { api } from "@/convex/_generated/api"
import type { DocumentId } from "@/types/documents"

interface UseEditorPersistenceOptions {
    documentId: DocumentId
    editor: BlockNoteEditor
}

export const useEditorPersistence = ({
    documentId,
    editor,
}: UseEditorPersistenceOptions) => {
    const updateDocument = useMutation(api.documents.updateDocument)

    // Debounced save function
    // biome-ignore lint/correctness/useExhaustiveDependencies: The debounced function will capture stale values
    const debouncedSave = useCallback(
        debounce((content: PartialBlock[]) => {
            void updateDocument({
                id: documentId,
                content: JSON.stringify(content), // Serialize for storage
            })
        }, 1000),
        [documentId, updateDocument],
    )

    // Cleanup debounce on unmounting
    useEffect(() => {
        return () => {
            debouncedSave.cancel()
        }
    }, [debouncedSave])

    // Handler to call when editor content changes
    const handleChange = useCallback(() => {
        const content = editor.document
        debouncedSave(content)
    }, [editor, debouncedSave])

    return { handleChange }
}
