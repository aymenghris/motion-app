import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"

export const Footer = () => {
    return (
        <div className="z-50 flex items-center justify-center bg-background p-6 dark:bg-obsidian">
            <Logo />
            <div
                className={cn(
                    "flex items-center justify-between gap-x-2",
                    "w-full",
                    "text-muted-foreground",
                    "md:justify-end",
                )}
            >
                <Button variant="ghost" size="sm">
                    privacy policy
                </Button>

                <Button variant="ghost" size="sm">
                    terms of service
                </Button>
            </div>
        </div>
    )
}
