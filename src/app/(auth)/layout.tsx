import Image from "next/image";
import Link from "next/link";
import authCover from "@/assets/authCover.jpg";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  if (user) redirect("/");

  return (
    <div className="grid h-screen w-full md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src={authCover}
          fill
          quality={1}
          alt="Authentication cover"
          className="object-cover"
        />
      </div>
      <div className="container grid place-items-center overflow-y-auto">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
          <p className="text-center text-xs text-muted-foreground md:text-sm">
            Dengan masuk atau mendaftar, kamu menyutujui{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Ketentuan layanan
            </Link>{" "}
            dan{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Kebijakan privasi
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
