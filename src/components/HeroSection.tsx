import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-accent/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">Official Launch Event</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            PyClubs Launching
            <span className="block text-accent">in Togo</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Empowering students through Python, Open Source, and Community
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">April 11, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">Ecole Polytechnique de Lome - University of Lome, Togo</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="text-base px-8">
              <a href="https://www.pytogo.org/discord" target="_blank" rel="noopener noreferrer">
                Register for the Event
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="text-base px-8">
              <a href="https://www.pytogo.org/discord" target="_blank" rel="noopener noreferrer">
                Join PyClubs
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
