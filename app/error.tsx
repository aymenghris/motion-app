"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { assets } from "@/constants"

const ErrorPage = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <Image
                src={assets.error.fishing}
                width={316}
                height={336}
                alt="error"
                className="dark:invert"
            />

            <h2 className="font-medium text-xl first-letter:uppercase">
                something went wrong!
            </h2>

            <Button asChild>
                <Link href="/documents">go back</Link>
            </Button>
        </div>
    )
}

export default ErrorPage
