import { validateRequest } from "@/auth";
import MenuBar from "@/components/MenuBar";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import TrendsSidebar from "@/components/TrendsSidebar";
import { redirect } from "next/navigation";
import SessionProvider from "../provider/SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <NavbarComponent />
        <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
          <MenuBar
            username={session.user.username}
            className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80"
          />
          {children}
          <TrendsSidebar />
        </div>
        <MenuBar
          username={session.user.username}
          className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden"
        />
      </div>
    </SessionProvider>
  );
}
