import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/authApi";
import { useAuth } from "./useAuth";

export function useLogin() {
  const { saveUser } = useAuth();

  return useMutation({
    mutationFn: loginRequest,

    onSuccess: (data) => {
      saveUser(data.user);
    },
  });
}