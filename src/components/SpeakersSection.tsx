import { Twitter, Linkedin, Github } from "lucide-react";
import speakerGeoffrey from "@/assets/speaker-geoffrey.png";
import speakerWachiou from "@/assets/speaker-wachiou.png";

const speakers = [
  {
    name: "Geoffrey Logovi",
    role: "IT Engineer, Developer Advocate",
    image: speakerGeoffrey,
    bio: "Experienced community builder with years of experience growing tech communities across Africa. Passionate about empowering the next generation of developers.",
    session: "Community Building 101",
    social: {
      twitter: "https://twitter.com/geoffreylgv",
      linkedin: "https://linkedin.com/in/geoffreylgv",
      github: "https://github.com/geoffreylgv",
    },
  },
  {
    name: "Wachiou Bouraima",
    role: "Open Source Advocate, Python Developer",
    image: speakerWachiou,
    bio: "Python developer and open-source contributor dedicated to making programming accessible to beginners. Active contributor to several Python projects.",
    session: "Getting Started with Python",
    social: {
      twitter: "https://twitter.com/wasscodeur",
      linkedin: "https://linkedin.com/in/wasscodeur",
      github: "https://github.com/wasscodeur",
    },
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Meet Our Speakers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Learn from the Best
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry experts and community leaders sharing their knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                
                {/* Session Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {speaker.session}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {speaker.role}
                </p>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {speaker.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={speaker.social.twitter}
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={speaker.social.linkedin}
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={speaker.social.github}
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
