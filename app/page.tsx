import LandingNavbar from "./components/LandingNavbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500/30">
      <LandingNavbar />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
