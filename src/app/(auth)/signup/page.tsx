import { Metadata } from "next";
import UserRegisterForm from "@/components/form/UserRegisterForm";
import SignUpForm from "./SignupForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buat akun baru",
  // CHANGE this description
  description: "Authentication forms built using the components",
};

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Buat akun baru
        </h1>
        <p className="text-sm text-muted-foreground">
          Masukkan data dirimu untuk membuat akun
        </p>
      </div>
      <SignUpForm />
      <Link href="/login" className="text-center font-semibold hover:underline">
        Sudah punya akun? <span className="text-primary">Masuk</span>
      </Link>
    </>
  );
}
