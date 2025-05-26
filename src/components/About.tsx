
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, TrendingUp, Users, Star } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setSkillsAnimated(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Java", level: "Expert" },
    { name: "Python", level: "Advanced" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "MySQL", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML/CSS", level: "Intermediate" },
  ];

  const getSkillStars = (level: string) => {
    const levels = { "Expert": 5, "Advanced": 4, "Intermediate": 3, "Beginner": 2 };
    return levels[level as keyof typeof levels] || 3;
  };

  const timeline = [
    {
      year: "2021 - Present",
      title: "Data Associate",
      company: "Amazon Development Centre",
      description: "Specializing in data processing, analysis, and backend development with focus on system optimization and efficiency improvements."
    },
    {
      year: "2019 - 2021",
      title: "Junior Data Associate",
      company: "Amazon Development Centre",
      description: "Started career in data analysis and processing, learning backend development and contributing to data processing systems."
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "98% Efficiency",
      description: "Achieved 98% efficiency in data processing systems"
    },
    {
      icon: Award,
      title: "25% Improvement",
      description: "Reduced processing time by 25% through optimization"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Worked with cross-functional teams on critical projects"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-slate-900/95">
      <div className="container-custom">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate Data Associate with experience in backend development, 
            data processing, and system optimization at Amazon Development Centre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Journey */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-100">
                <Calendar className="mr-3 h-6 w-6 text-cyan-400" />
                Professional Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-cyan-400 bg-slate-800/50 backdrop-blur-md border-slate-700/50">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-slate-100">{item.title}</CardTitle>
                          <CardDescription className="text-cyan-400 font-medium">
                            {item.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">{item.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Achievements */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex items-center justify-between p-4 bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700/50">
                    <span className="font-medium text-lg text-slate-100">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-400 mr-2">{skill.level}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < getSkillStars(skill.level)
                                ? 'text-cyan-400 fill-current'
                                : 'text-slate-600'
                            } ${
                              skillsAnimated ? 'animate-fade-in' : 'opacity-0'
                            }`}
                            style={{
                              animationDelay: `${index * 200 + i * 100}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Key Achievements</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50">
                    <CardContent className="flex items-start p-6">
                      <achievement.icon className="h-8 w-8 text-cyan-400 mr-4 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-slate-100">{achievement.title}</h4>
                        <p className="text-slate-300">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
