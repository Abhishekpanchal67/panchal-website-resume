
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Download, MapPin } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-main">
      {/* Enhanced Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-accent rounded-full animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-gradient-purple rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-purple rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative group">
                <img 
                  src="/lovable-uploads/a8fba13d-2405-4b7b-9cd8-753041be2172.png" 
                  alt="Abhishek Panchal - Product Growth Manager" 
                  className="w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-glow transition-transform duration-500 group-hover:scale-105" 
                />
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 animate-bounce">
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
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-primary mb-4 font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Product Growth Manager
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start mb-6 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <MapPin className="w-4 h-4 mr-2" />
              <span>Mumbai, Maharashtra</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Transforming ideas into growth engines. 4+ years of driving product-led
              growth, user acquisition, and revenue generation through data-driven strategies
              and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-purple hover:opacity-90 text-white px-8 py-3 text-lg shadow-glow transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-105" 
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/15K5YuhvnIbb4bBcLRfEsLQ8wvMTv_PHe/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" asChild>
                <a href="mailto:abhishekpanchal67@gmail.com" aria-label="Send email to Abhishek Panchal">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" asChild>
                <a href="tel:+919867748075" aria-label="Call Abhishek Panchal">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" asChild>
                <a href="https://www.linkedin.com/in/abhishek-panchal-644293119/" target="_blank" rel="noopener noreferrer" aria-label="Visit Abhishek Panchal's LinkedIn profile">
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
