import { DocumentOptionsMenu } from "./DocumentOptionsMenu"
import { Title } from "./Title"

export const DocumentNavbarSkeleton = () => (
    <div className="flex w-full items-center justify-between gap-x-4 bg-background px-3 py-2 dark:bg-obsidian">
        <Title.Skeleton />

        <div className="flex items-center gap-x-2">
            <DocumentOptionsMenu.Skeleton />
        </div>
    </div>
)
