
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const AnimatedAchievement = ({ value, label, color, delay = 0 }: { 
  value: string; 
  label: string; 
  color: string; 
  delay?: number;
}) => {
  // Extract numeric value for animation
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;
  const { count, elementRef } = useCountUp({ end: numericValue, duration: 2500 });
  
  // Format the animated count back to original format
  const formatCount = (num: number) => {
    if (value.includes('K+')) {
      return `${(num / 1000).toFixed(num >= 1000 ? 0 : 1)}K+`;
    }
    if (value.includes('K')) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    if (value.includes('M')) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (value.includes('x')) {
      return `${(num / 10).toFixed(1)}x`;
    }
    if (value.includes('%')) {
      return `${num}%`;
    }
    return num.toString();
  };

  return (
    <Card 
      ref={elementRef}
      className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 animate-slide-up text-center backdrop-blur-sm group hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6">
        <div className={`text-3xl lg:text-4xl font-bold mb-2 ${color} transition-all duration-300 group-hover:scale-110`}>
          {formatCount(count)}
        </div>
        <div className="text-sm text-muted-foreground">
          {label}
        </div>
      </CardContent>
    </Card>
  );
};

export const AchievementsSection = () => {
  const achievements = [
    { value: "500K+", label: "$500K+ Revenue", color: "text-blue-400" },
    { value: "25x", label: "2.5x Conversion", color: "text-green-400" },
    { value: "35%", label: "35% CAC Reduction", color: "text-purple-400" },
    { value: "30K+", label: "30K+ Qualified Leads", color: "text-orange-400" },
    { value: "385K", label: "385K Clicks", color: "text-pink-400" },
    { value: "23600K", label: "23.6M SEO Impressions", color: "text-cyan-400" },
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
    <section className="py-20 px-6 bg-gradient-main relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-purple opacity-5 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }} />
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

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <AnimatedAchievement
              key={achievement.label}
              value={achievement.value}
              label={achievement.label}
              color={achievement.color}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Enhanced Awards */}
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card 
                key={award.title}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 animate-slide-up backdrop-blur-sm group hover:scale-102"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${award.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
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
