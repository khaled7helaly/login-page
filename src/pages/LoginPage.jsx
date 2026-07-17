import AuthLayout from "../features/auth/components/AuthLayout.jsx";
import LoginForm from "../features/auth/components/LoginForm.jsx";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}