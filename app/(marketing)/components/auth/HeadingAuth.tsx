import { SignUpButton } from "@clerk/nextjs"
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export const HeadingAuth = () => {
    return (
        <>
            <Authenticated>
                <Button asChild>
                    <Link href="/documents">
                        enter motion
                        <ArrowRightIcon className="ml-2" />
                    </Link>
                </Button>
            </Authenticated>

            <Unauthenticated>
                <SignUpButton mode="modal">
                    <Button>get motion free</Button>
                </SignUpButton>
            </Unauthenticated>

            <AuthLoading>
                <div className="flex items-center justify-center">
                    <Spinner className="size-6" />
                </div>
            </AuthLoading>
        </>
    )
}
