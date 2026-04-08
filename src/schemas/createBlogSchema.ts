import z from "zod";

export const createBlogSchema = z.object({
  title: z.string("Title is required").min(1, "Title cannot be empty"),
  description: z
    .string("Description is required")
    .min(1, "Description cannot be empty"),
  author: z.string("Author is required").min(1, "Author cannot be empty"),
  thumbnail: z
    .instanceof(File, { message: "Thumbnail must be a file" })
    .refine((file) => file.size > 0, "Thumbnail is required"),
  content: z.string("Content is required").min(1, "Content cannot be empty"),
});

export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
