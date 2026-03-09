import { Footer } from "@marketing/components/Footer"
import { Heading } from "@marketing/components/Heading"
import { Hero } from "@marketing/components/Hero"
import { cn } from "@/lib/utils"

const MarketingPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <div
                className={cn(
                    "flex flex-1 flex-col items-center justify-center gap-y-8",
                    "px-6 pb-10",
                    "text-center",
                    "md:justify-start",
                )}
            >
                <Heading />
                <Hero />
            </div>

            <Footer />
        </div>
    )
}

export default MarketingPage
