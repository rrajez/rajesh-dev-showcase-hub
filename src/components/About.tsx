
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, TrendingUp, Users } from "lucide-react";

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
    { name: "Java", level: 95 },
    { name: "Python", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "MySQL", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
  ];

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Software Developer",
      company: "Amazon Development Centre",
      description: "Leading backend development initiatives with focus on data processing and system optimization."
    },
    {
      year: "2021 - 2023",
      title: "Software Developer",
      company: "Amazon Development Centre",
      description: "Developed scalable backend solutions achieving 98% efficiency in data processing systems."
    },
    {
      year: "2019 - 2021",
      title: "Data Associate",
      company: "Amazon Development Centre",
      description: "Specialized in data analysis and processing, reducing processing time by 25%."
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
      title: "Team Leadership",
      description: "Led cross-functional teams on critical projects"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software developer with extensive experience in backend development, 
            data processing, and system optimization at Amazon Development Centre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Journey */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-primary" />
                Professional Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {item.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{item.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
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
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className={`skill-progress-bar ${
                          skillsAnimated ? 'w-full' : 'w-0'
                        }`}
                        style={{
                          width: skillsAnimated ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex items-start p-6">
                      <achievement.icon className="h-8 w-8 text-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
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
