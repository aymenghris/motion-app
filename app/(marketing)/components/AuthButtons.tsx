"use client"

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export const AuthButtons = () => {
    return (
        <>
            <Authenticated>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/documents">enter motion</Link>
                </Button>
                <UserButton />
            </Authenticated>

            <Unauthenticated>
                <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                        log in
                    </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                    <Button size="sm">get motion free</Button>
                </SignUpButton>
            </Unauthenticated>

            <AuthLoading>
                <Spinner />
            </AuthLoading>
        </>
    )
}
