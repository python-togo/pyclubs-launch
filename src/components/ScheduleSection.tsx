import { Clock, Mic, Code2, UsersRound, Coffee, Handshake } from "lucide-react";

const scheduleItems = [

  {
    time: "07:45 - 08:50",
    type: "Installation & Ambiance Setting",
    icon: UsersRound,
    title: "Installation, Brainstorming & Networking",
    speaker: "All Attendees",
    description: "Get to know each other, share expectations, and set the tone for a collaborative day ahead. A key notes on screen from renowned speakers (watch party) will kickstart the event",
    color: "primary",
  },
  {
    time: "09:00 - 10:00",
    type: "Keynote",
    icon: Mic,
    title: "Community Building 101",
    speaker: "Geoffrey Logovi",
    description: "Building, growing, and sustaining impactful tech communities in Africa and beyond",
    color: "accent",
  },
  {
    time: "10:00 - 10:30",
    type: "Coffee Break",
    icon: Coffee,
    title: "Coffee Break",
    speaker: "All Attendees",
    description: "Take a break and network with fellow attendees, prepare the workshop materials and get ready for the hands-on session",
    color: "primary",
  },
  {
    time: "10:45 - 12:50",
    type: "Workshop",
    icon: Code2,
    title: "Getting Started with Python for Open Source Projects",
    speaker: "Wachiou Bouraima",
    description: "Hands-on introduction to Python and how beginners can contribute to open-source projects",
    color: "accent",
  },
  {
    time: "12:55 - 13:05",
    type: "Closing",
    icon: Handshake,
    title: "Closing Remarks and Familly Picture",
    speaker: "All Organizers and Attendees",
    description: "Wrap-up session with final thoughts and next steps for continued community engagement, share stickers swags and a group photo to commemorate the event",
    color: "primary",
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Event Schedule
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Program Schedule
          </h2>
          <p className="text-lg text-muted-foreground">
            A full day of learning, networking, and hands-on experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Time Column */}
                <div className={`md:w-48 p-6 flex md:flex-col items-center justify-center gap-3 ${
                  item.color === "primary" ? "bg-primary/10" : "bg-accent/20"
                }`}>
                  <Clock className={`w-5 h-5 ${
                    item.color === "primary" ? "text-primary" : "text-accent-foreground"
                  }`} />
                  <span className={`font-mono font-bold ${
                    item.color === "primary" ? "text-primary" : "text-accent-foreground"
                  }`}>
                    {item.time}
                  </span>
                </div>
                
                {/* Content Column */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      item.color === "primary" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-accent/20 text-accent-foreground"
                    }`}>
                      <item.icon className="w-3.5 h-3.5" />
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">
                    by {item.speaker}
                  </p>
                  
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
