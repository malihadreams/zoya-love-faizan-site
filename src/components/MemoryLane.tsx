import { Calendar, Heart, Star, Gift, Cake } from "lucide-react";

export const MemoryLane = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "Every Year",
      icon: Cake,
      title: "Another Year of Awesomeness",
      description: "July 31st - The day an angel was born! Every year this date becomes more special because it celebrates you.",
      color: "text-pink-500"
    },
    {
      id: 2,
      year: "Today",
      icon: Heart,
      title: "Celebrating You",
      description: "Today we celebrate not just your birthday, but all the joy, love, and beautiful moments you bring into our lives.",
      color: "text-red-500"
    },
    {
      id: 3,
      year: "This Year",
      icon: Star,
      title: "New Adventures Await",
      description: "This new year of your life will be filled with amazing opportunities, wonderful surprises, and dreams coming true.",
      color: "text-purple-500"
    },
    {
      id: 4,
      year: "Future",
      icon: Gift,
      title: "Endless Possibilities",
      description: "The future holds so many beautiful moments for you. Your journey is just beginning, and it's going to be incredible!",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <Calendar className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-script font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Memory Lane of Love
          </h2>
          <Calendar className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground font-handwriting italic">
          A beautiful journey through time, celebrating every moment of you 💕
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={event.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform md:-translate-x-2 z-10 shadow-glow"></div>
              
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-full bg-gradient-primary shadow-glow`}>
                      <event.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <span className={`text-sm font-accent font-semibold ${event.color}`}>
                        {event.year}
                      </span>
                      <h3 className="font-display font-bold text-foreground text-xl">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};