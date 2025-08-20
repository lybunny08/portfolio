import Navbar from "./components/Navbar";
import Hero from "./Home/Hero";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
