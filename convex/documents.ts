import { v } from "convex/values"
import type { Id } from "./_generated/dataModel"
import { mutation, query } from "./_generated/server"

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

export const getSidebar = query({
    args: {
        parentDocument: v.optional(v.id("documents")),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()

        if (!identity) {
            throw new Error("Not authenticated")
        }

        const userId = identity.subject

        return ctx.db
            .query("documents")
            .withIndex("by_user_parent", (q) =>
                q
                    .eq("userId", userId)
                    .eq("parentDocument", args.parentDocument),
            )
            .filter((q) => q.eq(q.field("isArchived"), false))
            .order("desc")
            .collect()
    },
})

export const archiveDocument = mutation({
    args: { id: v.id("documents") },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()

        if (!identity) {
            throw new Error("Not authenticated")
        }

        const userId = identity.subject

        const existingDocument = await ctx.db.get(args.id)

        if (!existingDocument) {
            throw new Error("Document not found")
        }

        if (existingDocument.userId !== userId) {
            throw new Error("Unauthorized")
        }

        const recursiveArchive = async (documentId: Id<"documents">) => {
            const children = await ctx.db
                .query("documents")
                .withIndex("by_user_parent", (q) =>
                    q.eq("userId", userId).eq("parentDocument", documentId),
                )
                .collect()

            for (const child of children) {
                await recursiveArchive(child._id)
            }

            await ctx.db.patch(documentId, {
                isArchived: true,
            })
        }

        await recursiveArchive(args.id)

        return existingDocument
    },
})
