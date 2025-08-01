"use client";

import { useForm } from "react-hook-form";
import TextInput from "../../components/inputs/textInput";
import { loginSchema, LoginSchema } from "../../validation/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PrimaryButton } from "../../components/buttons/primaryButton";
import PasswordInput from "../../components/inputs/passwordInput";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-preset1 text-grey-900">Login</h1>

      <div className="w-full flex flex-col justify-center items-center gap-5 mt-5 text-grey-500">
        <TextInput
          type="email"
          label="Email"
          register={register("email")}
          error={errors.email}
          autoComplete="email"
        />

        <PasswordInput
          label="Password"
          register={register("password")}
          error={errors.password}
          autoComplete="current-password"
        />

        <PrimaryButton type="submit" text="Login" />

        <p className="text-preset4-regular">
          Need to create an account?{" "}
          <a className="underline text-preset4-bold text-grey-900">Sign Up</a>
        </p>
      </div>
    </form>
  );
}
