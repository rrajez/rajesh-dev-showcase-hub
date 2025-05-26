
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
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/rajesh-r",
      color: "hover:text-gray-800 dark:hover:text-gray-300"
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/rajesh-r",
      color: "hover:text-orange-500"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                Hi, I'm{" "}
                <span className="gradient-text">Rajesh R</span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-muted-foreground h-12">
                <TypewriterEffect 
                  texts={[
                    "Software Developer",
                    "Data Associate", 
                    "Backend Developer"
                  ]}
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Experienced Software Developer with expertise in backend development and data processing. 
              Currently working at Amazon Development Centre, delivering scalable solutions with 
              <span className="text-secondary font-semibold"> 98% efficiency</span> and 
              <span className="text-secondary font-semibold"> 25% performance improvements</span>.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className={`group transition-all duration-300 hover:scale-105 ${
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
              className={`bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white transition-all duration-300 hover:scale-105 ${
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
              {/* Profile Image Placeholder */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Rajesh R - Software Developer"
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
