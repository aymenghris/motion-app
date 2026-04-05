import { v } from "convex/values"
import { mutation } from "./_generated/server"

export const createDocument = mutation({
    args: { title: v.string(), parentDocument: v.optional(v.id("documents")) },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()

        if (!identity) {
            throw new Error("Not authenticated")
        }

        const userId = identity.subject
        return await ctx.db.insert("documents", {
            title: args.title,
            userId,
            isArchived: false,
            parentDocument: args.parentDocument,
            isPublished: false,
        })
    },
})
