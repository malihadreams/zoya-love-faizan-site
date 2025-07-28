import { Music, Camera, Cake, Coffee, MapPin, Palette } from 'lucide-react';

export const BirthdayActivities = () => {
  const activities = [
    {
      icon: Cake,
      title: "Birthday Cake Cutting",
      description: "The sweetest moment of your special day",
      time: "Evening",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Music,
      title: "Dance & Music",
      description: "Let's dance to your favorite songs",
      time: "All Day",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Camera,
      title: "Photo Session",
      description: "Capture beautiful memories together",
      time: "Afternoon",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Coffee,
      title: "Special Treats",
      description: "Delicious surprises throughout the day",
      time: "Anytime",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: MapPin,
      title: "Special Places",
      description: "Visit your favorite spots",
      time: "Day Out",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Creative Fun",
      description: "Art, crafts, and creative activities",
      time: "Free Time",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
          🎉 Birthday Activities Planned 🎉
        </h2>
        <p className="text-lg text-muted-foreground font-accent max-w-2xl mx-auto">
          Amazing activities to make your birthday absolutely unforgettable!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {activities.map((activity, index) => (
          <div 
            key={activity.title}
            className="group relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
            
            {/* Main card */}
            <div className="relative glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105 border border-white/10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 shadow-lg`}>
                <activity.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="mb-3">
                <h3 className="font-display font-bold text-foreground text-lg mb-1">
                  {activity.title}
                </h3>
                <span className={`text-xs font-accent font-medium px-2 py-1 rounded-full bg-gradient-to-r ${activity.color} text-white`}>
                  {activity.time}
                </span>
              </div>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};