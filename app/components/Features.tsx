import { ShieldCheck, Zap, Smartphone, Globe } from "lucide-react";

const FEATURES = [
    {
        title: "Instant Transfers",
        description: "Send money to anyone, anywhere in seconds. No delays, no excuses.",
        icon: Zap,
    },
    {
        title: "Bank-Grade Security",
        description: "Your money is protected by state-of-the-art encryption and fraud detection.",
        icon: ShieldCheck,
    },
    {
        title: "Mobile First",
        description: "Designed for your phone. Manage your finances on the go with ease.",
        icon: Smartphone,
    },
    {
        title: "Global Access",
        description: "Spend abroad with no hidden fees and real-time exchange rates.",
        icon: Globe,
    },
];

export default function Features() {
    return (
        <section id="features" className="bg-zinc-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-purple-400">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Banking features that keep up with you.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        We've stripped away the complexity and left only what matters.
                        Fast, secure, and built for the modern world.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="flex flex-col items-start">
                                <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white text-lg">
                                    {feature.title}
                                </dt>
                                <dd className="mt-2 leading-7 text-zinc-400">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
