
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Download, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-main">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-accent rounded-full animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-purple rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Abhishek Panchal"
                  className="w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-glow"
                />
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1">
                  Available for opportunities
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                Abhishek Panchal
              </span>
              <br />
              <span className="text-foreground">Professional</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-primary mb-4 font-semibold">
              Your Professional Title
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start mb-6 text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Your Location</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Transforming ideas into growth engines. 4+ years of driving product-led
              growth, user acquisition, and revenue generation through data-driven strategies
              and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-purple hover:opacity-90 text-white px-8 py-3 text-lg shadow-glow">
                Let's Connect
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="mailto:abhishekpanchal67@gmail.com"
                  aria-label="Send email to Abhishek Panchal"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="tel:+919867748075"
                  aria-label="Call Abhishek Panchal"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/abhishek-panchal-644293119/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Abhishek Panchal's LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
