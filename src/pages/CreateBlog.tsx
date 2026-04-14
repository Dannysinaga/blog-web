import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { File as FileEdit, FileText, Image, User } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { axiosInstance2 } from "../lib/axios";
import {
  createBlogSchema,
  type CreateBlogSchema,
} from "../schemas/createBlogSchema";

function CreateBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateBlogSchema>({
    resolver: zodResolver(createBlogSchema),
  });

  const navigate = useNavigate();

  const { mutateAsync: createBlogMutation, isPending } = useMutation({
    mutationFn: async (payload: CreateBlogSchema) => {
      const form = new FormData();
      form.append("title", payload.title);
      form.append("description", payload.description);
      form.append("content", payload.content);
      form.append("category", payload.category);
      form.append("thumbnail", payload.thumbnail);

      await axiosInstance2.post("/blogs", form);
    },
    onSuccess: () => {
      toast.success("Create Blog success");
      navigate("/");
    },
    onError: () => {
      toast.error("Create Blog failed");
    },
  });

  const onSubmit = async (data: CreateBlogSchema) => {
    await createBlogMutation(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create New Blog
          </h1>
          <p className="text-gray-600 mb-8">
            Share your thoughts and ideas with the community
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="title"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your blog title"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Write a brief description of your blog"
                {...register("description")}
              />

              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="category"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                  placeholder="Your category"
                  {...register("category")}
                />

                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="thumbnail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Thumbnail Image
              </label>
              <div className="relative">
                <Image className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      setValue("thumbnail", file);
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <div className="relative">
                <FileEdit className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  id="content"
                  rows={12}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Write your blog content here..."
                  {...register("content")}
                />

                {errors.content && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.content.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
              >
                {isPending ? "Loading" : "Publish Blog"}
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;