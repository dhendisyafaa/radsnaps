import Link from "next/link";
import React from "react";
import SearchField from "../SearchField";
import UserButton from "../UserButton";
import { Button } from "../ui/button";
import { Bell, Mail } from "lucide-react";

export default function NavbarComponent() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3 sm:justify-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary dark:text-white"
        >
          Radsnaps
        </Link>
        {/* <SearchField /> */}
        {/* <UserButton className="sm:ms-auto" /> */}
        <div className="flex items-center gap-1 sm:hidden">
          <Button variant="ghost" size={"icon"} title="Notifications" asChild>
            <Link href="/notifications">
              <Bell />
            </Link>
          </Button>
          <Button variant="ghost" size={"icon"} title="Messages" asChild>
            <Link href="/messages">
              <Mail />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
