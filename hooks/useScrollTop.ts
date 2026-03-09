import { useEffect, useState } from "react"

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY
            setScrolled(top > threshold)
        }

        window.addEventListener("scroll", handleScroll)
        
        // Initialize the state on mount
        handleScroll()
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [threshold])

    return scrolled
}
