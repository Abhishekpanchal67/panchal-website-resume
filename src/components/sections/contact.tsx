
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, GraduationCap } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-main relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can work together to achieve great results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href="tel:+919867748075"
                        className="text-primary font-medium hover:underline cursor-pointer"
                      >
                        +91 9867748075
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:abhishekpanchal67@gmail.com"
                        className="text-primary font-medium hover:underline cursor-pointer"
                      >
                        abhishekpanchal67@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/abhishek-panchal-644293119/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline cursor-pointer"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Education</h3>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Bachelor of Engineering (Information Technology)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    Your Institute of Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    University of Your City • CGPA: 7.31
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-8">
                  Send Message
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input 
                      placeholder="Your Name"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project Discussion"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-purple hover:opacity-90 text-white py-3 text-lg shadow-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            © 2024 Abhishek Panchal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
