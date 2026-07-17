export function getLoginErrorMessage(error) {
  const status = error?.response?.status;

  const backendMessage =
    error?.response?.data?.message;

  if (status === 400) {
    return (
      backendMessage ||
      "Invalid email or password."
    );
  }

  if (status === 401) {
    return (
      backendMessage ||
      "Invalid email or password."
    );
  }

  if (status >= 500) {
    return "The server is currently unavailable. Please try again.";
  }

  if (error?.code === "ECONNABORTED") {
    return "The request took too long. Please try again.";
  }

  if (error?.request) {
    return "Unable to connect to the server. Check your internet connection.";
  }

  return (
    backendMessage ||
    error?.message ||
    "Login failed. Please try again."
  );
}