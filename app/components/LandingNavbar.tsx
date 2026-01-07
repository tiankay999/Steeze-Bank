"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeftRight } from "lucide-react";
import Image from "next/image";

export default function LandingNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-black/50 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-white/70 to-white text-black shadow-sm ring-1 ring-inset ring-white/20">
                        <Image src="/background5.png" alt="Logo" width={32} height={32} />
                    </div>
                    <Link href="/" className="text-xl font-bold tracking-tight text-white">
                        Steeze Bank
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-white hover:underline decoration-white/50 underline-offset-4">
                        Log in
                    </Link>
                    <Link
                        href="/signup"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 hover:bg-zinc-100"
                    >
                        Open Account
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 md:hidden flex flex-col gap-4">
                    <Link
                        href="#features"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-zinc-300 hover:text-white"
                    >
                        Features
                    </Link>
                    <Link
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-zinc-300 hover:text-white"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-zinc-300 hover:text-white"
                    >
                        Contact
                    </Link>
                    <hr className="border-white/10 my-2" />
                    <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-white"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/signup"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-center rounded-full bg-white px-5 py-3 text-base font-bold text-black"
                    >
                        Open Account
                    </Link>
                </div>
            )}
        </header>
    );
}
