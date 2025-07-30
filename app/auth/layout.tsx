import Image, { getImageProps } from "next/image";
import { LoginIllustration } from "../ui/icons/images";
import { LogoIconLarge } from "../ui/icons/svg";
import getBackgroundImage from "../ui/utils/getBackgroundImage";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const {
  //     props: { srcSet },
  //   } = getImageProps({
  //     alt: "authImage",
  //     width: 560,
  //     height: 920,
  //     src: LoginIllustration,
  //   });

  //   console.log(srcSet);

  //   const backgroundImage = getBackgroundImage(srcSet);

  //   const style = { height: "100vh", width: "100vw", backgroundImage };

  return (
    <section className="relative w-full min-h-dvh p-3 flex flex-row justify-start items-center">
      <div className="absolute inset-3 z-[-1]">
        <Image
          src={LoginIllustration}
          width={560}
          height={920}
          alt="loginImage"
          className="hidden xl:block rounded-xl"
          priority
        />
      </div>

      <div className="z-10 w-[560px] grid grid-cols-1 justify-between items-center">
        <Image
          src={LogoIconLarge}
          width={122}
          height={22}
          alt="logoLarge"
          className=""
          priority
        />

        <div className="text-white">
          <h3 className="text-preset1">
            Keep track of your money and save for your future
          </h3>
          <p className="text-preset4-regular">
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
