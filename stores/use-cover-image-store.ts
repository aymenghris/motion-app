import { create } from "zustand"
import { useShallow } from "zustand/shallow"

interface useCoverImageStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useCoverImageStore = create<useCoverImageStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

const useCoverImageStoreSelector = () => {
    return useCoverImageStore(
        useShallow((state) => ({
            isOpen: state.isOpen,
            onOpen: state.onOpen,
            onClose: state.onClose,
        })),
    )
}

export { useCoverImageStoreSelector }
