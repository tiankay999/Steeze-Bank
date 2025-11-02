"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  PiggyBank,
  Wallet,
  ArrowLeftRight,
  Menu,
  X,
  Plus,
  Sun,
  Moon,
} from "lucide-react";

// -----------------------------
// Sticky + glassy Navbar (Tailwind only)
// - Active-link highlight
// - Mobile drawer
// - No invalid nesting
// -----------------------------

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: HomeIcon },         // change to "/home" if you have app/home/page.tsx
  { label: "Deposit", href: '/deposit', icon: PiggyBank },
  { label: "Withdrawals", href: '/withdraw', icon: Wallet },
  { label: "Transfers", href: '/transfers', icon: ArrowLeftRight },
];

function NavLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={
        "group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium  " +
        "transition text-zinc-300 hover:text-white " +
        (isActive ? "text-white" : "")
      }
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="h-4 w-4 opacity-80" />
      {label}
      {/* animated underline */}
      <span
        className={
          "absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 rounded-full " +
          "bg-gradient-to-r from-white/60 via-white to-white/60 transition-transform " +
          (isActive ? "scale-x-100" : "group-hover:scale-x-100")
        }
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[70] w-full border-b border-white/10 bg-black/35 backdrop-blur-xl [@supports(backdrop-filter:blur(0))]:bg-black/25 ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-white/70 to-white text-black shadow-sm ring-1 ring-inset ring-white/20">
            <ArrowLeftRight className="h-4 w-4" />
          </div>
          <Link
            href="/"
            className="select-none text-base font-semibold tracking-tight text-white"
          >
            Steeze Bank
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              Icon={item.icon}
            />
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/transfers"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/20"
          >
            <Plus className="h-4 w-4" /> New Transfer
          </Link>
          <ThemeToggle />
          <AvatarCircle initials="S" />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle compact />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white/90 transition hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay (fully removed when closed to avoid blocking clicks) */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={
          "fixed inset-y-0 right-0 z-[61] w-[84%] max-w-sm border-l border-white/10 " +
          "bg-[#0b0b0b]/95 p-4 shadow-2xl transition-transform duration-200 lg:hidden " +
          (open ? "translate-x-0" : "translate-x-full")
        }
        role="dialog"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white/90">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white/90 transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 grid gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
            >
              <item.icon className="h-4 w-4 opacity-80" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href="/transfers"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/20"
          >
            <Plus className="h-4 w-4" /> New Transfer
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center gap-3">
            <AvatarCircle initials="S" />
            <div>
              <p className="text-sm font-medium text-white">Steeze</p>
              <p className="text-xs text-zinc-400">Welcome back</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </aside>
    </header>
  );
}

// ---- Tiny Presentational Pieces ----
function AvatarCircle({ initials = "?" }: { initials?: string }) {
  return (
    <div className="inline-flex h-8 w-8 select-none items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-white text-black shadow ring-1 ring-inset ring-white/30">
      <span className="text-xs font-bold tracking-wide">{initials}</span>
    </div>
  );
}

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  // no dependency on next-themes; just toggles .dark on <html>
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const nowDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nowDark);
    setIsDark(nowDark);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={
        (compact ? "p-2" : "px-3 py-2") +
        " inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 text-white/90 transition hover:bg-white/10"
      }
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {!compact && (
        <span className="text-sm font-medium">{isDark ? "Light" : "Dark"}</span>
      )}
    </button>
  );
}
