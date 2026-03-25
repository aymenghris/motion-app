"use client"

import { useUser } from "@clerk/nextjs"
import { PlusCircleIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { assets } from "@/constants"
import { title } from "@/lib/utils"

const DocumentsPage = () => {
    const { user } = useUser()

    return (
        <div className="flex h-full flex-col items-center justify-center space-y-4">
            <Image
                src={assets.documents.empty}
                alt="empty"
                width={300}
                height={361}
                className="dark:invert"
            />
            <h1 className="font-semibold text-xl">
                {title(`welcome to ${user?.firstName}'s motion`)}
            </h1>
            <Button capitalized={false}>
                <PlusCircleIcon className="mr-2 size-4" />
                {title("create a note")}
            </Button>
        </div>
    )
}

export default DocumentsPage
