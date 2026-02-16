import { BookOpen, Rocket, Users, Heart, Trophy, Globe } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Learn Python Fundamentals",
    description: "Master the basics of Python programming with expert guidance",
  },
  {
    icon: Rocket,
    title: "Open-Source Opportunities",
    description: "Discover how to contribute to real open-source projects",
  },
  {
    icon: Users,
    title: "Meet Tech Leaders",
    description: "Connect with local and international tech community leaders",
  },
  {
    icon: Heart,
    title: "Join a Growing Community",
    description: "Become part of the Python movement in Togo",
  },
  {
    icon: Trophy,
    title: "Build Your Portfolio",
    description: "Start contributing to projects that matter",
  },
  {
    icon: Globe,
    title: "Network Globally",
    description: "Connect with developers across Africa and beyond",
  },
];

const WhyAttendSection = () => {
  return (
    <section id="why-attend" className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Why Attend?
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Join us for a transformative experience that will kickstart your journey in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-secondary-foreground/70 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
