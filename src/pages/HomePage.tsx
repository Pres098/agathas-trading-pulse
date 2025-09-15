import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import YouTubeFetch from "@/components/YouTubeFetch";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <YouTubeFetch />
      <Footer />
      <AIChat />
    </div>
  );
};

export default HomePage;