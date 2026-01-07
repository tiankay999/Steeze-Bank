import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 py-24 pt-32 text-center sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] bg-blue-500/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl space-y-8">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
                    <span>🚀 Banking reimagined for the bold</span>
                </div>

                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
                    Banking With <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">Steeze</span>.
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
                    Experience the future of finance. Seamless transfers, instant rewards,
                    and a design that matches your vibe. No hidden fees, just pure steeze.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <Link
                        href="/signup"
                        className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 focus:ring-2 focus:ring-white/20"
                    >
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/10 focus:ring-2 focus:ring-white/20"
                    >
                        Sign In
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
                <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            </div>
        </section>
    );
}
