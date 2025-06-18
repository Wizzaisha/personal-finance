import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import Image from "next/image";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconName?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type: "text" | "email";
}

export default function TextInput({
  label,
  type,
  iconName,
  register,
  error,
  className,
  ...rest
}: TextInputProps) {
  return (
    <div className={`w-full relative ${className ?? ""}`}>
      <label className="text-preset5-bold text-grey-500">{label}</label>
      <input
        type={type}
        {...register}
        {...rest}
        className={`w-full border border-beige-500 p-2 rounded-md`}
      ></input>

      {iconName && (
        <Image
          src={`/svg/${iconName}.svg`}
          width={14}
          height={14}
          alt="showPassword"
          className="abolute top-0 left-0"
        />
      )}

      {error && <p className="text-red text-preset5-bold">{error.message}</p>}
    </div>
  );
}
