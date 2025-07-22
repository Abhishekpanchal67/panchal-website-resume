import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Growth Manager 1 - Product",
      company: "Fynd (Reliance Retail)",
      location: "Mumbai, Maharashtra", 
      period: "Nov 2022 - Present",
      achievements: [
        "Led product growth initiatives across web platforms, driving user acquisition and retention",
        "Facilitated daily scrum meetings ensuring 90% on-time feature delivery",
        "Drove transition from freemium to paid model, resulting in $500K+ quarterly revenue",
        "Reduced CAC by 35% and increased conversion rates by 2.5x",
        "Generated 385K clicks and 23.6M impressions through SEO strategies"
      ]
    },
    {
      title: "Business Development Associate",
      company: "Scaler",
      location: "Bangalore, Karnataka",
      period: "June 2022 - Nov 2022", 
      achievements: [
        "Reached out to prospects and guided them through the existing tech landscape",
        "Achieved monthly revenue of 9-12 Lacs",
        "Managed entire sales lifecycle from lead qualification to conversion",
        "Counseled experienced professionals on career progression courses"
      ]
    },
    {
      title: "Business Development Executive", 
      company: "Usthan Integrated Solutions",
      location: "Mumbai, Maharashtra",
      period: "Sept 2020 - June 2022",
      achievements: [
        "Researched and documented data for 3,000+ retail shops across Mumbai",
        "Supported local retailers in adopting software solutions",
        "Conducted 1,500+ product demonstrations across Mumbai and Ahmedabad", 
        "Successfully onboarded 180+ stores with ₹45 lakhs revenue impact"
      ]
    },
    {
      title: "Founder",
      company: "Topoo Productions", 
      location: "Mumbai, Maharashtra",
      period: "April 2020 - Dec 2021",
      achievements: [
        "Single-handedly built and managed company website and operations",
        "Led digital strategy for clients including Nykaa, Bira 91, and G-SHOCK",
        "Planned and executed influencer marketing campaigns",
        "Achieved ₹1.6 million revenue within first 9 months"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-main relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various organizations and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-purple opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.title}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-purple rounded-full shadow-glow" />
                
                <Card className="ml-16 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg font-medium text-accent mb-2">
                          {experience.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary mt-4 lg:mt-0"
                      >
                        {experience.period.split(' - ')[1] === 'Present' ? 'Current' : 'Previous'}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};