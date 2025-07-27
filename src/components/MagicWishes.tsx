import { Star, Sparkles, Heart, Gift } from "lucide-react";

export const MagicWishes = () => {
  const wishes = [
    {
      icon: Star,
      title: "Starlight Dreams",
      message: "May all your dreams shine as bright as the stars, beautiful soul! ✨",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: Heart,
      title: "Endless Love",
      message: "Sending you infinite love and warmth on your special day! 💕",
      gradient: "from-pink-400 to-red-400"
    },
    {
      icon: Sparkles,
      title: "Magic Moments",
      message: "Every moment with you is pure magic! Happy Birthday, gorgeous! ✨",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: Gift,
      title: "Special Surprise",
      message: "You deserve all the happiness in the world, my dear friend! 🎁",
      gradient: "from-green-400 to-blue-400"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
            ✨ Magic Birthday Wishes ✨
          </h2>
          <p className="text-lg text-muted-foreground font-accent">
            Special wishes crafted just for you, beautiful! 💫
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 hover:scale-105 transition-all duration-300 shadow-elevated group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${wish.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <wish.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {wish.title}
              </h3>
              
              <p className="text-muted-foreground font-accent leading-relaxed">
                {wish.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};