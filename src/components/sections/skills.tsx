
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAnimatedProgress } from "@/hooks/useAnimatedProgress";

const AnimatedSkill = ({ 
  name, 
  level, 
  delay = 0 
}: { 
  name: string; 
  level: number; 
  delay?: number; 
}) => {
  const { progress, elementRef } = useAnimatedProgress({ 
    targetValue: level, 
    duration: 2000, 
    delay 
  });

  return (
    <div ref={elementRef} className="space-y-2 group">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </span>
        <span className="text-sm text-primary font-semibold">
          {Math.round(progress)}%
        </span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 transition-all duration-300 group-hover:h-3"
      />
    </div>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        { name: "Product Development", level: 95 },
        { name: "Roadmap Creation", level: 90 },
        { name: "User Journey Mapping", level: 88 },
        { name: "Cross-functional Collaboration", level: 92 }
      ]
    },
    {
      title: "Growth Strategy", 
      skills: [
        { name: "Go-To-Market", level: 93 },
        { name: "User Acquisition", level: 89 },
        { name: "Performance Marketing", level: 85 },
        { name: "Revenue Generation", level: 91 }
      ]
    },
    {
      title: "Technical Tools",
      skills: [
        { name: "Google Analytics", level: 90 },
        { name: "SQL & BigQuery", level: 85 },
        { name: "JIRA & Agile", level: 88 },
        { name: "Design Tools", level: 82 }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-main relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-purple opacity-5 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Technical and strategic capabilities that drive success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 animate-slide-up backdrop-blur-sm group hover:scale-102"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-6 sm:mb-8 text-center group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <AnimatedSkill
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={(index * 200) + (skillIndex * 100)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
