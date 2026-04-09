import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { axiosInstance2 } from "../lib/axios";
import type { AxiosError } from "axios";

const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 chars" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const { mutateAsync: registerMutation, isPending } = useMutation({
    mutationFn: async (payload: FormData) => {
      await axiosInstance2.post("/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      toast.success("Register success!");
      navigate("/login");
    },
    onError: (error: AxiosError<{ massage : string}>) => {
      toast.error(error.response?.data.massage || " Register failed");
    },
  });

  const onSubmit = async (data: FormData) => {
    await registerMutation(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* ... form UI tetap sama persis seperti yang kamu tulis ... */}
    </div>
  );
}

export default Register;
