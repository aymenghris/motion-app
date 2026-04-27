export const assets = {
    hero: {
        notes: "/hero/notes.svg",
        casualLaptop: "/hero/casual-laptop.svg",
    },
    brand: {
        logo: "/brand/logo.svg",
        favicon: {
            light: "/brand/favicon/favicon-light.svg",
            dark: "/brand/favicon/favicon-dark.svg",
        },
    },
    documents: {
        empty: "/documents/empty.svg",
    },
}

export const SIDEBAR_CONSTANTS = {
    MIN_WIDTH: 240,
    MAX_WIDTH: 480,
    DEFAULT_WIDTH: 240,
    MOBILE_BREAKPOINT: "(max-width: 768px)",
    RESET_DURATION: 300,
} as const

export const INDENT_PER_LEVEL = 12
export const BASE_PADDING = 12
export const NESTED_BASE_PADDING = 25

export const ROOT_LEVEL = 0
export const ROOT_SKELETON_COUNT = 3
export const NESTED_SKELETON_COUNT = 1
