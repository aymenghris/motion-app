import { create } from "zustand"
import { useShallow } from "zustand/shallow"

interface useSettingsStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useSettingsStore = create<useSettingsStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

const useSettingsStoreSelector = () => {
    return useSettingsStore(
        useShallow((state) => ({
            isOpen: state.isOpen,
            onOpen: state.onOpen,
            onClose: state.onClose,
        })),
    )
}

export { useSettingsStoreSelector }
