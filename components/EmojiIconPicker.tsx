"use client"

import EmojiPicker, { type Theme } from "emoji-picker-react"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface IconPickerProps {
    handleEmojiClick: (icon: string) => void
    children: ReactNode
    asChild?: boolean
}

export const EmojiIconPicker = ({
    handleEmojiClick,
    children,
    asChild,
}: IconPickerProps) => {
    const { resolvedTheme } = useTheme()
    const currentTheme = (resolvedTheme || "light") as Theme

    return (
        <Popover>
            <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
            <PopoverContent className="w-full border-none p-0 shadow-none">
                <EmojiPicker
                    height={400}
                    theme={currentTheme}
                    onEmojiClick={(emoji) => handleEmojiClick(emoji.emoji)}
                />
            </PopoverContent>
        </Popover>
    )
}
