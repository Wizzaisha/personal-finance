"use client";

import { useForm } from "react-hook-form";
import TextInput from "../../components/inputs/textInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { PrimaryButton } from "../../components/buttons/primaryButton";
import PasswordInput from "../../components/inputs/passwordInput";
import { signupSchema, SignupSchema } from "../../validation/signupSchema";

export default function SignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupSchema>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-preset1 text-grey-900">Sign Up</h1>

      <div className="w-full flex flex-col justify-center items-center gap-5 mt-5 text-grey-500">
        <TextInput
          type="text"
          label="Name"
          register={register("name")}
          error={errors.name}
          autoComplete="name"
        />

        <TextInput
          type="email"
          label="Email"
          register={register("email")}
          error={errors.email}
          autoComplete="email"
        />

        <PasswordInput
          label="Create Password"
          register={register("password")}
          error={errors.password}
          autoComplete="current-password"
        />

        <PrimaryButton type="submit" text="Login" />

        <p className="text-preset4-regular">
          Already have an account?{" "}
          <a className="underline text-preset4-bold text-grey-900">Login</a>
        </p>
      </div>
    </form>
  );
}
