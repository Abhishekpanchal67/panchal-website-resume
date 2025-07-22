import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
    <section className="py-20 px-6 bg-gradient-main relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical and strategic capabilities that drive success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
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