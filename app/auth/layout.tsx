import Image from "next/image";
import { LoginIllustration } from "../ui/icons/images";
import { LogoIconLarge } from "../ui/icons/svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full min-h-dvh p-3 flex flex-row justify-start items-center">
      <div className="grid grid-cols-1 justify-between items-center">
        <Image
          src={LoginIllustration}
          width={560}
          height={920}
          alt="loginImage"
          className="hidden xl:block rounded-xl"
          priority
        />

        <div className=" xl:hidden w-full bg-grey-900 absolute top-0 left-0 rounded-b-xl p-4 flex items-center justify-center">
          <Image src={LogoIconLarge} width={122} height={22} alt="logoLarge" />
        </div>

        <Image
          src={LogoIconLarge}
          width={122}
          height={22}
          alt="logoLarge"
          className="hidden xl:block absolute top-10 left-10"
        />

        <div className="text-white absolute bottom-10 left-10 w-[520px] hidden xl:block">
          <h3 className="text-preset1">
            Keep track of your money and save for your future
          </h3>
          <p className="text-preset4-regular mt-5">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>

      <div className="mx-auto p-6 bg-white rounded-xl xl:w-[40%] w-full">
        {children}
      </div>
    </section>
  );
}
