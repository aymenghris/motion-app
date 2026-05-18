"use client"

import { Title } from "@/components/toolbar/Toolbar.Title"
import type { DocumentData } from "@/types/documents"
import { AddCoverImageButton } from "./Toolbar.AddCoverImageButton"
import { AddIconButton } from "./Toolbar.AddIconButton"
import { IconDisplay } from "./Toolbar.IconDisplay"

interface ToolBarProps {
    initialData: DocumentData
    preview?: boolean
}

export const Toolbar = ({ initialData, preview = false }: ToolBarProps) => {
    const hasIcon = !!initialData.icon
    const hasCoverImage = !!initialData.coverImage

    return (
        <div className="group relative pl-13.5">
            <IconDisplay
                icon={initialData.icon}
                preview={preview}
                documentId={initialData._id}
            />

            <div className="flex items-center gap-x-1 py-4 opacity-0 group-hover:opacity-100">
                {!hasIcon && !preview && (
                    <AddIconButton documentId={initialData._id} />
                )}

                {!hasCoverImage && !preview && <AddCoverImageButton />}
            </div>

            <Title initialData={initialData} />
        </div>
    )
}
