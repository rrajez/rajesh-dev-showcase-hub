
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Download } from "lucide-react";
import TechIcons from "@/components/TechIcons";
import TypewriterEffect from "@/components/TypewriterEffect";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/rajesh-r",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/rajesh-r",
      color: "hover:text-purple-400"
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/rajesh-r",
      color: "hover:text-orange-400"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rajesh R</span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-slate-300 h-12">
                <TypewriterEffect 
                  texts={[
                    "Software Developer",
                    "Backend Specialist", 
                    "Full Stack Engineer"
                  ]}
                />
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Passionate Software Developer at Amazon Development Centre with expertise in backend development and scalable solutions. 
              Creating innovative software with 
              <span className="text-cyan-400 font-semibold"> 98% efficiency</span> and 
              <span className="text-purple-400 font-semibold"> 25% performance improvements</span>.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className={`group transition-all duration-300 hover:scale-105 border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 backdrop-blur-sm ${
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <link.icon className={`mr-2 h-5 w-5 transition-colors ${link.color}`} />
                  Connect on {link.name}
                </Button>
              ))}
            </div>

            {/* Resume Download */}
            <Button
              size="lg"
              className={`bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '800ms' }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Profile Image & Tech Icons */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Profile Image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/lovable-uploads/15c31b4b-d8e1-4637-8b64-59ef002b4386.png"
                    alt="Rajesh R - Software Developer at Amazon"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <TechIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
