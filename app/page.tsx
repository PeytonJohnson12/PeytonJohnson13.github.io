import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </>
  );
}
