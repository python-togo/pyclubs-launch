import { Users, Code, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student-Driven",
    description: "Built by students, for students passionate about technology",
  },
  {
    icon: Code,
    title: "Python Focused",
    description: "Learn and master Python through hands-on projects",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contribute to real-world projects and build your portfolio",
  },
  {
    icon: Sparkles,
    title: "Community",
    description: "Connect with developers across Africa and beyond",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About the Event
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Welcome to PyClubs Launching
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            PyClubs is a student-driven Python and open-source community dedicated to 
            learning, collaboration, and real-world impact. It started in Ghana where the global organization is based.
             This is the official launch event in Togo, marking the beginning of an exciting journey to empower 
            students and developers across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
