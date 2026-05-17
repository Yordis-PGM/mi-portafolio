import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen w-full bg-background selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
