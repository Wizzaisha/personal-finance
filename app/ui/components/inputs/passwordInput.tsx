import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import { HidePasswordIcon, ShowPasswordIcon } from "../../icons/svg";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function PasswordInput({
  label,
  register,
  error,
  className,
  ...rest
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState("password");

  const handleShowPassword = () => {
    setShowPassword(showPassword === "password" ? "text" : "password");
  };

  return (
    <div className={`w-full  ${className ?? ""}`}>
      <label className="text-preset5-bold text-grey-500">{label}</label>

      <div className="w-full relative">
        <input
          type={showPassword}
          {...register}
          {...rest}
          className={`w-full border border-beige-500 p-2 rounded-md`}
        ></input>

        <button className="cursor-pointer " onClick={handleShowPassword}>
          <Image
            src={
              showPassword === "password" ? ShowPasswordIcon : HidePasswordIcon
            }
            width={16}
            height={10}
            alt="showPassword"
            className="absolute top-2/5 right-5"
          />
        </button>
      </div>

      {error && <p className="text-red text-preset5-bold">{error.message}</p>}
    </div>
  );
}
