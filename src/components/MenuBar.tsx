import { Button } from "@/components/ui/button";
import {
  Bell,
  Bookmark,
  GalleryHorizontal,
  Mail,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href="/">
          <GalleryHorizontal />
          <span className="hidden lg:inline">Galeri</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href="/explore">
          <Search />
          <span className="hidden lg:inline">Explorasi</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="hidden items-center justify-start gap-3 sm:flex"
        title="Notifications"
        asChild
      >
        <Link href="/notifications">
          <Bell />
          <span className="hidden lg:inline">Notifikasi</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="hidden items-center justify-start gap-3 sm:flex"
        title="Messages"
        asChild
      >
        <Link href="/messages">
          <Mail />
          <span className="hidden lg:inline">Pesan</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Bookmarks"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark />
          <span className="hidden lg:inline">Album</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Bookmarks"
        asChild
      >
        <Link href="/profile">
          <User />
          <span className="hidden lg:inline">Profil</span>
        </Link>
      </Button>
    </div>
  );
}
