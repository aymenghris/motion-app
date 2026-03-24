import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export const title = (str: string) => {
    const minorWords = [
        "to",
        "a",
        "an",
        "the",
        "and",
        "but",
        "or",
        "for",
        "nor",
        "on",
        "at",
        "with",
    ]

    return str
        .toLowerCase()
        .split(" ")
        .map((word, index) => {
            if (index > 0 && minorWords.includes(word)) return word
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(" ")
}
