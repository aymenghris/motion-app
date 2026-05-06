import { SettingsIcon } from "lucide-react"
import { useSettingsStoreSelector } from "@/stores/use-settings-store"
import { StaticItem } from "./StaticItem"

export const SettingsItem = () => {
    const { onOpen } = useSettingsStoreSelector()

    return <StaticItem label="settings" icon={SettingsIcon} onClick={onOpen} />
}
