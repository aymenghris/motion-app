"use client"

import { AuthLoading } from "convex/react"
import { Spinner } from "@/components/ui/spinner"

export const AuthLoadingScreen = () => (
    <AuthLoading>
        <div className="flex h-screen items-center justify-center">
            <Spinner size="lg" />
        </div>
    </AuthLoading>
)
