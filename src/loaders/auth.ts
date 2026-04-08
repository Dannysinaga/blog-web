import { redirect } from "react-router";
import { useAuth } from "../stores/useAuth";

export const authLoader = () => {
  const { user } = useAuth.getState();

  if (!user) {
    return redirect("/login");
  }

  return {};
};
