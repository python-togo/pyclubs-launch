import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section id="register" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl border border-border shadow-xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Spots Available</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Be Part of the Python
              <span className="text-primary"> Movement in Togo</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Don't miss this opportunity to learn, connect, and grow with the PyClubs community. 
              Register now to secure your spot!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="default" size="lg" className="text-base px-8 gap-2">
                <a href="https://www.pytogo.org/discord" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href="https://www.pytogo.org/discord" target="_blank" rel="noopener noreferrer">
                  Join the Community
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Free admission • April 11, 2026 • Ecole Polytechnique de Lome - University of Lome, Togo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
