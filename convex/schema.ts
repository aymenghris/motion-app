import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    documents: defineTable({
        title: v.string(),
        content: v.optional(v.string()),
        coverImage: v.optional(v.union(v.string(), v.null())),
        icon: v.optional(v.union(v.string(), v.null())),
        userId: v.string(),
        isArchived: v.boolean(),
        parentDocument: v.optional(v.id("documents")),
        isPublished: v.boolean(),
    })
        .index("by_user", ["userId"])
        .index("by_user_parent", ["userId", "parentDocument"]),
})
