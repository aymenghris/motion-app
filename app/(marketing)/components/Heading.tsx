"use client"

import { HeadingAuth } from "./auth/HeadingAuth"

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="font-bold text-3xl capitalize sm:text-5xl md:text-6xl">
                your ideas, documents, and more, all in one place.
                <br />
                <span className="underline">welcome to motion.</span>
            </h1>

            <h3 className="font-medium capitalize sm:text-xl md:text-2xl">
                motion is the connected workspace where <br />
                better, faster work happens.
            </h3>

            <HeadingAuth />
        </div>
    )
}
