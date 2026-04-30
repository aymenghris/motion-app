import { DocumentItem } from "@main/components/items/document-item/DocumentItem"
import type { FC } from "react"
import {
    NESTED_SKELETON_COUNT,
    ROOT_LEVEL,
    ROOT_SKELETON_COUNT,
} from "@/constants"

export const LoadingSkeletons: FC<{ level: number }> = ({ level }) => {
    const count =
        level === ROOT_LEVEL ? ROOT_SKELETON_COUNT : NESTED_SKELETON_COUNT

    return (
        <>
            {Array.from({ length: count }, () => (
                <DocumentItem.Skeleton
                    key={crypto.randomUUID()}
                    level={level}
                />
            ))}
        </>
    )
}
