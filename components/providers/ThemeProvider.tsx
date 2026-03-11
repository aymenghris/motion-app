"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type * as React from "react"

interface ThemeProviderProps
    extends React.ComponentProps<typeof NextThemesProvider> {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    ...props
}) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
