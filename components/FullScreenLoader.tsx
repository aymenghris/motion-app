import { Spinner } from "./ui/spinner"

export const FullScreenLoader = () => (
    <div className="flex h-full w-full items-center justify-center">
        <Spinner size="lg" />
    </div>
)
