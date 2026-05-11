import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import type * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
        "cursor-pointer rounded-sm font-medium text-sm",
        "outline-none transition-all",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ),
    {
        variants: {
            variant: {
                default: cn(
                    "text-primary-foreground",
                    "bg-primary",
                    "hover:bg-primary/90",
                ),
                destructive: cn(
                    "text-white",
                    "bg-destructive",
                    "hover:bg-destructive/90",
                    "focus-visible:ring-destructive/20",
                    "dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
                ),
                outline: cn(
                    "border bg-background shadow-xs",
                    "hover:bg-accent hover:text-accent-foreground",
                    "dark:border-input",
                    "dark:bg-input/30 dark:hover:bg-input/50",
                ),
                secondary: cn(
                    "text-secondary-foreground",
                    "bg-secondary",
                    "hover:bg-secondary/80",
                ),
                ghost: cn(
                    "hover:bg-accent hover:text-accent-foreground",
                    "dark:hover:bg-accent/50",
                ),
                link: cn(
                    "text-primary",
                    "underline-offset-4",
                    "hover:underline",
                ),
                sidebar: cn(
                    "justify-start",
                    "text-muted-foreground text-sm",
                    "hover:bg-primary/5",
                ),
                "sidebar-action": cn(
                    "ml-auto h-full",
                    "rounded-sm opacity-0",
                    "hover:bg-neutral-300 group-hover:opacity-100",
                    "dark:hover:bg-neutral-600",
                ),
                "trash-action":
                    "rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600",
                "banner-action": cn(
                    "font-normal text-white",
                    "border-1 border-white",
                    "hover:bg-primary/5",
                ),
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
                "sm-banner": "h-auto p-1 px-2",
                full: "min-h-6.75 w-full py-1 pr-3",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-xs":
                    "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    capitalized = true,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
        capitalized?: boolean
    }) {
    const Comp = asChild ? Slot.Root : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(
                buttonVariants({ variant, size, className }),
                capitalized && "capitalize",
            )}
            {...props}
        />
    )
}

export { Button, buttonVariants }
