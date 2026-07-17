import axiosInstance from "../../../lib/axiosInstance";

export const loginRequest = async ({email,password,}) => {
  const response = await axiosInstance.post(
    "/auth/login",
    {
      email,
      password,
    }
  );

  const data = response.data;

  if (!data?.success) {
    throw new Error(
      data?.message || "Login failed"
    );
  }

  return data;
};