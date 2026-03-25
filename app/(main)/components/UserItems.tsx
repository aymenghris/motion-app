import { SignOutButton, useUser } from "@clerk/nextjs"
import type { UserResource } from "@clerk/nextjs/types"
import { ChevronsLeftRightIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { title } from "@/lib/utils"

export const UserItems = () => {
    const { user } = useUser()

    return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex w-full items-center justify-start gap-x-2 p-3 text-sm hover:bg-primary/5"
                    >
                        <Avatar className="size-5">
                            <AvatarImage src={user?.imageUrl} />
                            <AvatarFallback>
                                {user?.fullName?.charAt(0) ?? "U"}
                            </AvatarFallback>
                        </Avatar>

                        <span className="max-w-37.5 truncate">
                            {title(`${user?.firstName}'s motion`)}
                        </span>

                        <ChevronsLeftRightIcon className="ml-2 size-4 rotate-90 text-muted-foreground" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className="w-70"
                    align="start"
                    sideOffset={11}
                    forceMount
                >
                    {user && <UserInfo user={user} />}
                    <DropdownMenuSeparator />
                    <SignOutMenuItem />
                </DropdownMenuContent>
            </DropdownMenu>
    )
}

const UserEmail = ({ email }: { email: string }) => (
    <p className="font-medium text-muted-foreground text-xs leading-none">
        {email}
    </p>
)

const UserAvatar = ({ imageUrl }: { imageUrl: string }) => (
    <div className="rounded-md bg-secondary p-1">
        <Avatar className="size-8">
            <AvatarImage src={imageUrl} />
        </Avatar>
    </div>
)

const UserWorkspace = ({
    fullName,
    imageUrl,
}: {
    fullName: string
    imageUrl: string
}) => (
    <div className="flex items-center gap-x-2">
        <UserAvatar imageUrl={imageUrl} />
        <div className="space-y-1">
            <p className="line-clamp-1 text-sm">
                {title(`${fullName}'s motion`)}
            </p>
        </div>
    </div>
)

const UserInfo = ({ user }: { user: UserResource }) => (
    <div className="flex flex-col space-y-4 p-2">
        <UserEmail email={user.emailAddresses[0].emailAddress} />
        <UserWorkspace
            fullName={user.fullName ?? ""}
            imageUrl={user.imageUrl}
        />
    </div>
)

const SignOutMenuItem = () => (
    <DropdownMenuItem
        asChild
        className="w-full cursor-pointer text-muted-foreground"
    >
        <SignOutButton>Log out</SignOutButton>
    </DropdownMenuItem>
)
