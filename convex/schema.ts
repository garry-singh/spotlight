import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    clerkId: v.string(),
    imageUrl: v.string(),
    username: v.string(),
    fullName: v.string(),
    bio: v.optional(v.string()),
    followers: v.number(),
    following: v.number(),
    posts: v.number(),
  }).index("by_clerk_id", ["clerkId"]),
  posts: defineTable({
    userId: v.id("users"),
    storageId: v.id("_storage"), // Will be required when we want to delete a post
    imageUrl: v.string(),
    caption: v.optional(v.string()),
    likes: v.number(),
    comments: v.number(),
  }).index("by_user", ["userId"]),
  comments: defineTable({
    userId: v.id("users"),
    postId: v.id("posts"),
    content: v.string(),
  }).index("by_post", ["postId"]),
  likes: defineTable({
    userId: v.id("users"),
    postId: v.id("posts"),
  })
  .index("by_post", ["postId"])
  .index("by_user_and_post", ["userId", "postId"]),
  follows: defineTable({
    followerId: v.id("users"),
    followingId: v.id("users"),
  })
  .index("by_follower", ["followerId"])
  .index("by_following", ["followingId"])
  .index("by_both", ["followerId", "followingId"]),
  notifications: defineTable({
    receiverId: v.id("users"),
    senderId: v.id("users"),
    type: v.union(v.literal("follow"), v.literal("like"), v.literal("comment")),
    postId: v.optional(v.id("posts")),
    commentId: v.optional(v.id("comments")),
  }).index("by_receiver", ["receiverId"]),
  bookmarks: defineTable({
    userId: v.id("users"),
    postId: v.id("posts"),
  })
  .index("by_user", ["userId"])
  .index("by_post", ["postId"])
  .index("by_user_and_post", ["userId", "postId"]),
});
