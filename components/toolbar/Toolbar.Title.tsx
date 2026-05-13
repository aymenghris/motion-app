import TextareaAutosize from "react-textarea-autosize"
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
    } = useTitleEdit<HTMLTextAreaElement>({
        savedTitle: initialData.title,
        onSave: (title) => void handleUpdateDocument({ title }),
    })

    return isEditing ? (
        <TextareaAutosize
            ref={inputRef}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="wrap-break-word resize-none bg-transparent font-bold text-5xl text-[#3F3F3F] outline-none dark:text-[#CFCFCF]"
        />
    ) : (
        <button
            type="button"
            onClick={enableEditing}
            className="wrap-break-word pb-[11.5px] font-bold text-5xl text-[#3F3F3F] outline-none dark:text-[#CFCFCF]"
        >
            {initialData.title}
        </button>
    )
}
