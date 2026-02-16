import { GraduationCap, Code, Users, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "University Students",
    description: "Beginner to intermediate level, eager to learn programming",
  },
  {
    icon: Code,
    title: "Aspiring Developers",
    description: "Anyone looking to start their journey in software development",
  },
  {
    icon: Users,
    title: "Tech Community Members",
    description: "Active members of local tech communities and meetups",
  },
  {
    icon: Lightbulb,
    title: "Curious Minds",
    description: "Anyone curious about Python and open source contributions",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Target Audience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Who Should Attend?
          </h2>
          <p className="text-lg text-muted-foreground">
            This event is designed for anyone passionate about technology and community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
