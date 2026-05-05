import { create } from "zustand"
import { useShallow } from "zustand/shallow"

interface useSearchStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    toggle: () => void
}

const useSearchStore = create<useSearchStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

const useSearchStoreSelector = () => {
    return useSearchStore(
        useShallow((state) => ({
            isOpen: state.isOpen,
            onOpen: state.onOpen,
            onClose: state.onClose,
            toggle: state.toggle,
        })),
    )
}

export { useSearchStoreSelector }
