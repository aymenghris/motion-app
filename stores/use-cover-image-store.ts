import { create } from "zustand"
import { useShallow } from "zustand/shallow"

interface CoverImageStore {
    imageUrl?: string | null
    isOpen: boolean

    open: () => void
    close: () => void
    replaceImage: (url?: string | null) => void
}

const useCoverImageStore = create<CoverImageStore>((set) => ({
    imageUrl: undefined,
    isOpen: false,

    open: () => set({ isOpen: true }),

    close: () => set({ isOpen: false, imageUrl: undefined }),

    replaceImage: (url?: string | null) => set({ isOpen: true, imageUrl: url }),
}))

const useCoverImageStoreSelector = () => {
    return useCoverImageStore(
        useShallow((state) => ({
            imageUrl: state.imageUrl,
            isOpen: state.isOpen,

            open: state.open,
            close: state.close,
            replaceImage: state.replaceImage,
        })),
    )
}

export { useCoverImageStoreSelector }
