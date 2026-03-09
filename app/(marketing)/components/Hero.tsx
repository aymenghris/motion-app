import Image from "next/image"
import { assets } from "@/constants"

export const Hero = () => {
    return (
        <div className="flex max-w-5xl flex-col items-center justify-center">
            <div className="flex items-center">
                    <Image
                        src={assets.hero.notes}
                        width={261}
                        height={331}
                        alt="notes"
                        className="dark:invert"
                    />

                    <Image
                        src={assets.hero.casualLaptop}
                        width={326}
                        height={331}
                        alt="casual laptop"
                        className="hidden md:block dark:invert"
                    />
            </div>
        </div>
    )
}
