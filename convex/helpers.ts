import type { Id } from "./_generated/dataModel"
import type { MutationCtx, QueryCtx } from "./_generated/server"

export const getAuthenticatedUser = async (ctx: MutationCtx | QueryCtx) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
        throw new Error("Not authenticated")
    }

    return identity.subject
}

export const getValidatedDocument = async (
    ctx: MutationCtx | QueryCtx,
    id: Id<"documents">,
    userId: string,
) => {
    const document = await ctx.db.get(id)

    if (!document) {
        throw new Error("Document not found")
    }

    if (document.userId !== userId) {
        throw new Error("Unauthorized")
    }

    return document
}

export const getPublicOrOwnedDocument = async (
    ctx: MutationCtx | QueryCtx,
    id: Id<"documents">,
) => {
    const identity = await ctx.auth.getUserIdentity()

    const document = await ctx.db.get(id)

    if (!document) {
        throw new Error("Document not found")
    }

    if (document.isPublished && !document.isArchived) {
        return document
    }

    if (!identity) {
        throw new Error("Not authenticated")
    }

    if (document.userId !== identity.subject) {
        throw new Error("Unauthorized")
    }

    return document
}
