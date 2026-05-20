import { useMutation } from "convex/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"

export const useCreateDocument = () => {
    const router = useRouter()
    const createDocument = useMutation(api.documents.createDocument)

    const handleCreateDocument = () => {
        const promise = createDocument({
            title: "Untitled",
        }).then((documentId) => {
            router.push(`/documents/${documentId}`)
        })

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created successfully!",
            error: "Failed to create a new note",
        })
    }

    return { handleCreateDocument }
}
