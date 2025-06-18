import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function PrimaryButton({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full cursor-pointer p-3 bg-grey-900 text-white rounded-md"
      {...rest}
    >
      {text}
    </button>
  );
}
