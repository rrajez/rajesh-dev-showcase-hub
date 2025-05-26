
import { useEffect, useState } from "react";

const TechIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    { name: "Java", icon: "☕", position: "top-0 right-0", delay: "0ms" },
    { name: "Python", icon: "🐍", position: "top-1/4 -right-8", delay: "200ms" },
    { name: "Spring", icon: "🍃", position: "top-1/2 right-0", delay: "400ms" },
    { name: "MySQL", icon: "🗄️", position: "bottom-1/4 -right-8", delay: "600ms" },
    { name: "React", icon: "⚛️", position: "bottom-0 right-0", delay: "800ms" },
    { name: "Node.js", icon: "⚡", position: "top-0 -left-8", delay: "1000ms" },
  ];

  return (
    <div className="absolute inset-0">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className={`absolute ${tech.position} w-16 h-16 bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-2xl floating-tech border-2 border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: tech.delay }}
        >
          <span className="select-none" title={tech.name}>
            {tech.icon}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
