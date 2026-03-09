import { Poppins } from "next/font/google"
import Image from "next/image"
import { assets } from "@/constants"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
})

export const Logo = () => {
    return (
        <div className="hidden items-center gap-x-2 md:flex">
            <Image
                src={assets.brand.logo}
                width={40}
                height={40}
                alt="logo"
                className="dark:invert"
            />
            <p
                className={cn(
                    "select-none font-semibold capitalize",
                    font.className,
                )}
            >
                motion
            </p>
        </div>
    )
}
