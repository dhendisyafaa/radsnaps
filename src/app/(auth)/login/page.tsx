import Link from "next/link";
import React from "react";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Selamat datang di <span className="text-primary">Radsnaps</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Website yang membantu kamu cari inspirasi ide foto
        </p>
      </div>
      <SignInForm />
      <Link
        href="/signup"
        className="text-center font-semibold hover:underline"
      >
        Belum punya akun? <span className="text-primary">Daftar dulu</span>
      </Link>
    </>
  );
}
