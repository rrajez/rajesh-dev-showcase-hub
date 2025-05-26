
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Zap, ShoppingCart } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, built with Spring Boot and React. Features include user authentication, product catalog, shopping cart, and payment integration.",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Microservices Architecture", "Payment Gateway", "Real-time Inventory", "Admin Dashboard"]
    },
    {
      title: "Weather App API",
      description: "RESTful API service providing real-time weather data with caching and rate limiting. Integrated with multiple weather data providers for accuracy and reliability.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Real-time Data", "Caching Layer", "Rate Limiting", "Multiple Providers"]
    },
    {
      title: "Registration System",
      description: "Scalable user registration and management system with email verification, role-based access control, and comprehensive admin panel for user management.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Security", "MySQL", "JavaScript", "Bootstrap"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Email Verification", "Role-based Access", "Admin Panel", "Security Features"]
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development, 
            API design, and system architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-gray-900/80 backdrop-blur-md border border-gray-800/50 hover:border-blue-500/50 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 p-2 rounded-full">
                    <project.icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-100">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-gray-800/50 border-gray-600 text-gray-200 hover:bg-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-none"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <p className="text-lg text-gray-300 mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-none px-8 py-3"
            onClick={() => window.open('mailto:rajesh.r@example.com', '_blank')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
