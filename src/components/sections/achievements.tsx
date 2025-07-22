import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    { value: "500K+", label: "$500K+ Revenue", color: "text-blue-400" },
    { value: "2.5x", label: "2.5x Conversion", color: "text-green-400" },
    { value: "35%", label: "35% CAC Reduction", color: "text-purple-400" },
    { value: "30K+", label: "30K+ Qualified Leads", color: "text-orange-400" },
    { value: "385K", label: "385K Clicks", color: "text-pink-400" },
    { value: "23.6M", label: "23.6M SEO Impressions", color: "text-cyan-400" },
  ];

  const awards = [
    {
      icon: Trophy,
      title: "Fynd Star Award",
      subtitle: "Excellence in Results",
      description: "Honored for delivering high-impact results with limited resources.",
      color: "bg-orange-500"
    },
    {
      icon: Star,
      title: "One Person Army",
      subtitle: "Individual Excellence", 
      description: "Recognized for exceptional individual contribution and ownership across multiple functions.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-main relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that showcase my impact and results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up text-center backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${achievement.color}`}>
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card 
                key={award.title}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up backdrop-blur-sm"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${award.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {award.title}
                      </h3>
                      <p className="text-accent font-medium mb-3">
                        {award.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                    </div>
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