"use client"

import { CoverImageModal } from "@/components/modals/CoverImageModal"
import { SettingsModal } from "@/components/modals/SettingsModal"

export const ModalProvider = () => {
    return (
        <>
            <SettingsModal />
            <CoverImageModal />
        </>
    )
}
