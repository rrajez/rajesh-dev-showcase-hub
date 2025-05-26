
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ParticleBackground from "@/components/ParticleBackground";
import { useState } from "react";

const queryClient = new QueryClient();

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={`min-h-screen transition-colors duration-300`}>
          <Toaster />
          <Sonner />
          <ParticleBackground />
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <About />
            <Projects />
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Index;
