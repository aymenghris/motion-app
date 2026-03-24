"use client"

import { title } from "@/lib/utils"
import { HeadingAuth } from "./auth/HeadingAuth"

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
                {title("your ideas, documents, and more, all in one place.")}
                <br />
                <span className="underline">{title("welcome to motion.")}</span>
            </h1>

            <h3 className="font-medium sm:text-xl md:text-2xl">
                {title("motion is the connected workspace where")}
                <br />
                {title("better, faster work happens.")}
            </h3>

            <HeadingAuth />
        </div>
    )
}
