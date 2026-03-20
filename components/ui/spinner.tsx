import { cva, type VariantProps } from "class-variance-authority"
import { Loader2Icon } from "lucide-react"
import type { FC } from "react"
import { cn } from "@/lib/utils"

const spinnerVariants = cva("animate-spin", {
    variants: {
        size: {
            sm: "size-2",
            md: "size-4",
            lg: "size-6",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

interface SpinnerProps
    extends Omit<React.ComponentProps<"svg">, "size">,
        VariantProps<typeof spinnerVariants> {}

const Spinner: FC<SpinnerProps> = ({ className, size, ...props }) => {
    return (
        <Loader2Icon
            role="status"
            aria-label="Loading"
            className={cn(spinnerVariants({ size, className }))}
            {...props}
        />
    )
}

export { Spinner }
