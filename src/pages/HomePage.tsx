import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import YouTubeSection from "@/components/YouTubeSection";
import LiveChat from "@/components/LiveChat";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <YouTubeSection />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default HomePage;