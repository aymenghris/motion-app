import { useMutation } from "convex/react"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"

export const useCreateDocument = () => {
    const createDocument = useMutation(api.documents.createDocument)

    const handleCreateDocument = () => {
        const promise = createDocument({
            title: "Untitled",
        })

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created successfully!",
            error: "Failed to create a new note",
        })
    }

    return { handleCreateDocument }
}
