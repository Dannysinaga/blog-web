import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { BookOpen, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { axiosInstance2 } from "../lib/axios";
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "../schemas/resetPasswordSchema";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const navigate = useNavigate();

  const { token } = useParams<{ token: string }>();

  const { mutateAsync: resetPasswordMutation, isPending } = useMutation({
    mutationFn: async (payload: ResetPasswordSchema) => {
      await axiosInstance2.post(
        "/auth/reset-password",
        {
          password: payload.password,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
    },
    onSuccess: () => {
      toast.success("Reset password success!");
      navigate("/login");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "Reset password failed!");
    },
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    await resetPasswordMutation(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-8">
          <BookOpen className="h-12 w-12 text-yellow-500" />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Reset Password
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="confirmPassword"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
          >
            {isPending ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
