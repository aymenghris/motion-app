"use client"

import { ModeToggle } from "@/components/ModeToggle"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useSettingsStoreSelector } from "@/stores/use-settings-store"

export const SettingsModal = () => {
    const { isOpen, onClose } = useSettingsStoreSelector()

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-4">
                    <h2 className="font-medium text-lg">Settings</h2>
                </DialogHeader>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <Label>Appearance</Label>
                        <p className="text-muted-foreground text-xs">
                            Customize how Motion looks on your device.
                        </p>
                    </div>

                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}
