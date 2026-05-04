import { v } from "convex/values"
import { getAuthenticatedUser, getValidatedDocument } from "@/convex/helpers"
import type { Id } from "./_generated/dataModel"
import { mutation, query } from "./_generated/server"

export const createDocument = mutation({
    args: { title: v.string(), parentDocument: v.optional(v.id("documents")) },
    handler: async (ctx, args) => {
        const userId = await getAuthenticatedUser(ctx)

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
        const userId = await getAuthenticatedUser(ctx)

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
        const userId = await getAuthenticatedUser(ctx)
        const existingDocument = await getValidatedDocument(
            ctx,
            args.id,
            userId,
        )

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

export const getTrash = query({
    handler: async (ctx) => {
        const userId = await getAuthenticatedUser(ctx)

        return ctx.db
            .query("documents")
            .withIndex("by_user", (q) => q.eq("userId", userId))
            .filter((q) => q.eq(q.field("isArchived"), true))
            .order("desc")
            .collect()
    },
})

export const restoreDocument = mutation({
    args: { id: v.id("documents") },
    handler: async (ctx, args) => {
        const userId = await getAuthenticatedUser(ctx)
        const existingDocument = await getValidatedDocument(
            ctx,
            args.id,
            userId,
        )

        if (existingDocument.parentDocument) {
            // If the document being restored has a parent...
            const parent = await ctx.db.get(existingDocument.parentDocument)
            // ... and that parent is currently archived,
            // then detach the restored document from the archived parent.
            if (parent?.isArchived) {
                await ctx.db.patch(args.id, { parentDocument: undefined }) // Set it to top-level
            }
        }

        const recursiveRestore = async (documentId: Id<"documents">) => {
            const children = await ctx.db
                .query("documents")
                .withIndex("by_user_parent", (q) =>
                    q.eq("userId", userId).eq("parentDocument", documentId),
                )
                .collect()

            for (const child of children) {
                await recursiveRestore(child._id)
            }

            await ctx.db.patch(documentId, {
                isArchived: false,
            })
        }

        await recursiveRestore(args.id)

        return existingDocument
    },
})

export const deleteDocument = mutation({
    args: { id: v.id("documents") },
    handler: async (ctx, args) => {
        const userId = await getAuthenticatedUser(ctx)
        const existingDocument = await getValidatedDocument(
            ctx,
            args.id,
            userId,
        )

        await ctx.db.delete(args.id)

        return existingDocument
    },
})
