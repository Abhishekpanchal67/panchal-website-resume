import { Card, CardContent } from "@/components/ui/card";
import { Settings, TrendingUp, Wrench } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    {
      icon: Settings,
      title: "Product Management",
      description: "Expert in PDLC, roadmap creation, wireframing, user journey mapping, and cross-functional collaboration.",
      points: [
        "Product Development & PDLC",
        "Roadmap Creation (BRD, PRD)",
        "Wireframing & User Journey",
        "UAT/QA & Web Development"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy", 
      description: "Specialized in Go-To-Market strategies, user acquisition, retention, and revenue generation through marketing automation.",
      points: [
        "Growth Strategy & GTM",
        "User Acquisition & Retention", 
        "Revenue Generation",
        "Performance Marketing"
      ]
    },
    {
      icon: Wrench,
      title: "Technical Tools",
      description: "Proficient in SQL, BigQuery, Google Analytics, JIRA, Figma, and various marketing automation platforms.",
      points: [
        "Google Analytics & BigQuery",
        "JIRA & Postman",
        "Figma & Whimsical", 
        "SQL & Marketing Tools"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-main relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Product and growth-focused professional with expertise in driving user acquisition,
            retention, and revenue through data-driven strategies and cross-functional
            collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.title}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {skill.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};