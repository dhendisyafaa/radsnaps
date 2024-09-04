"use client";

import { useQueryClient } from "@tanstack/react-query";
import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { logout } from "@/app/(auth)/actions";

export default function ButtonLogout() {
  const queryClient = useQueryClient();
  return (
    <Button
      onClick={() => {
        queryClient.clear();
        logout();
      }}
      size={"icon"}
      variant={"destructive"}
    >
      <LogOutIcon className="size-4" />
    </Button>
  );
}
