import {FormProvider,useForm,} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useLocation,useNavigate,} from "react-router-dom";
import { toast } from "sonner";

import { loginSchema } from "../schemas/loginSchema";
import { useLogin } from "../hooks/useLogin";
import { getLoginErrorMessage } from "../utils/getLoginErrorMessage";

import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import LoginOptions from "./LoginOptions";
import LoginSubmitButton from "./LoginSubmitButton";
import ServerError from "./ServerError";

const REMEMBERED_EMAIL_KEY =
  "koda_store_remembered_email";

function getRememberedEmail() {
  try {
    return (
      localStorage.getItem(
        REMEMBERED_EMAIL_KEY
      ) || ""
    );
  } catch {
    return "";
  }
}

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const loginMutation = useLogin();
  const rememberedEmail = getRememberedEmail();

  const methods = useForm({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: rememberedEmail,
      password: "",
      rememberEmail: Boolean(
        rememberedEmail
      ),
    },
  });

  const onSubmit = (formData) => {
    loginMutation.mutate(
      {
        email: formData.email.trim(),
        password: formData.password,
      },
      {
        onSuccess: (data) => {
          if (formData.rememberEmail) {
            localStorage.setItem(
              REMEMBERED_EMAIL_KEY,
              formData.email.trim()
            );
          } else {
            localStorage.removeItem(
              REMEMBERED_EMAIL_KEY
            );
          }

          toast.success(
            data.message ||
              "Login successfully"
          );

          const requestedPage =
            location.state?.from;

          const defaultPage =
            data.user?.role === "admin"
              ? "/admin"
              : "/";

          navigate(
            typeof requestedPage === "string"
              ? requestedPage
              : defaultPage,
            {
              replace: true,
            }
          );
        },
      }
    );
  };

  const serverError =
    loginMutation.isError
      ? getLoginErrorMessage(
          loginMutation.error
        )
      : "";

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-[540px] flex-col">
        <header className="mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Sign In
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Welcome back to Koda Store
          </p>
        </header>

        <form
          onSubmit={methods.handleSubmit(
            onSubmit
          )}
          noValidate
          className="flex flex-1 flex-col"
        >
          <ServerError
            message={serverError}
          />

          <fieldset
            disabled={
              loginMutation.isPending
            }
            className="!m-0 flex flex-1 flex-col !border-0 !bg-transparent !p-0 !shadow-none"
          >
            <div className="space-y-6">
              <EmailField />

              <PasswordField />

              <LoginOptions />
            </div>

            <div className="mt-auto pt-10">
              <LoginSubmitButton
                isPending={
                  loginMutation.isPending
                }
              />
            </div>
          </fieldset>
        </form>
      </div>
    </FormProvider>
  );
}