"use client";

import { useForm } from "react-hook-form";
import TextInput from "../../components/inputs/textInput";
import { LoginIllustration } from "../../icons/images";
import { loginSchema, LoginSchema } from "../../validation/loginSchema";
import Image from "next/image";
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
    <div className="w-full p-4 flex flex-row justify-start items-center">
      <Image
        src={LoginIllustration}
        width={560}
        height={920}
        alt="loginImage"
        className="hidden xl:block rounded-xl"
        priority
      />

      <form
        className="mx-auto p-6 bg-white rounded-xl xl:w-[40%] w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
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
    </div>
  );
}
