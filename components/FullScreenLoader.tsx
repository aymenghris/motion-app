import { Spinner } from "./ui/spinner"

interface FullScreenLoaderProps {
    size?: "sm" | "md" | "lg"
    className?: string
}

export const FullScreenLoader = (
    { size }: FullScreenLoaderProps = { size: "md" },
) => (
    <div className="flex h-full min-h-10 w-full items-center justify-center">
        <Spinner size={size} className="text-muted-foreground" />
    </div>
)
