"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  src?: string;            // image path or URL
  name?: string;           // user name/email shown in menu
};

export default function AvatarMenu({ src = "/kay.jpg", name = "Christian Asante" }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-black-500"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Image
          src={src || "/avatar.png"}
          alt="User avatar"
          width={70}
          height={70}
          className="rounded-full"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-black text-white shadow-xl z-50"
        >
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-sm text-white/70">Signed in as</p>
            <p className="mt-1 truncate font-medium">{name}</p>
          </div>
          <ul className="py-1 text-sm">
            <li>
              <a className="block px-4 py-2 hover:bg-white/10" href="/home">Dashboard</a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-white/10" href="/profile">Profile</a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-white/10" href="/settings">Settings</a>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-white/10" onClick={() => alert("Sign out")}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
