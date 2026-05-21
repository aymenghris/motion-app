"use client"

import { useEffect, useRef, useState } from "react"

export const useCopyToClipboard = (resetAfter = 1000) => {
    const [copied, setCopied] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const copy = async (value: string) => {
        if (!value) return

        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                setCopied(false)
            }, resetAfter)
        } catch {
            setCopied(false)
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return {
        copied,
        copy,
    }
}
