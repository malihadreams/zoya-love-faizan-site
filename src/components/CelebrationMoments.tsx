import { Heart, Star, Sparkles, PartyPopper } from "lucide-react";

export const CelebrationMoments = () => {
  const moments = [
    {
      id: 1,
      icon: Heart,
      title: "Every Heartbeat",
      description: "Each beat of your heart brings more love into this world. You're so precious, Zoya!",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 2,
      icon: Star,
      title: "Brightest Star",
      description: "Among all the stars in the sky, you shine the brightest. Your light guides everyone around you.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Magic Moments",
      description: "Every moment with you feels like magic. Your presence makes ordinary days extraordinary.",
      gradient: "from-blue-500 to-purple-400"
    },
    {
      id: 4,
      icon: PartyPopper,
      title: "Celebration Time",
      description: "Today we celebrate not just your birthday, but the beautiful soul that you are!",
      gradient: "from-yellow-500 to-pink-400"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-script font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent mb-4">
          Celebration Moments ✨
        </h2>
        <p className="text-xl text-muted-foreground font-accent italic">
          Special memories that make your day extra magical
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {moments.map((moment, index) => (
          <div 
            key={moment.id}
            className={`glass-card rounded-3xl p-8 hover:shadow-elevated transition-all duration-500 hover:scale-105 ${
              index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
            }`}
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${moment.gradient} shadow-glow mb-6`}>
              <moment.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              {moment.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              {moment.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};