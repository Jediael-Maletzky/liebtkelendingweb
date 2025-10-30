import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}