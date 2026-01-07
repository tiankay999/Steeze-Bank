import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32">
            {/* Background gradient */}
            <div className="absolute top-1/2 left-[calc(50%-30rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] md:left-1/2 lg:left-1/2 xs:hidden">
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to start banking with steeze?
                        <br />
                        Join thousands of users today.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                        It takes less than 2 minutes to open an account. No paperwork, no queues, just vibes.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/signup"
                            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Open Account
                        </Link>
                        <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-zinc-300 transition-colors">
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
