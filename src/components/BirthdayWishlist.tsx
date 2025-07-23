import { Gift, Star, Heart, Sparkles } from "lucide-react";

export const BirthdayWishlist = () => {
  const wishes = [
    {
      id: 1,
      icon: Heart,
      title: "Endless Love & Happiness",
      description: "May your heart be filled with love and joy every single day",
      priority: "high"
    },
    {
      id: 2,
      icon: Star,
      title: "Dreams Come True",
      description: "All your beautiful dreams and aspirations becoming reality",
      priority: "high"
    },
    {
      id: 3,
      icon: Gift,
      title: "Amazing Adventures",
      description: "Exciting journeys and wonderful experiences await you",
      priority: "medium"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Magical Moments",
      description: "Special moments that make your heart sparkle with joy",
      priority: "medium"
    },
    {
      id: 5,
      icon: Heart,
      title: "Good Health & Prosperity",
      description: "A healthy, prosperous year filled with abundance",
      priority: "high"
    },
    {
      id: 6,
      icon: Star,
      title: "Success in Everything",
      description: "Achievement and success in all your endeavors",
      priority: "medium"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-pink-500';
      default: return 'text-primary';
    }
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <Gift className="w-8 h-8 text-primary animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Birthday Wishlist
          </h2>
          <Gift className="w-8 h-8 text-primary animate-bounce" />
        </div>
        <p className="text-xl text-muted-foreground font-accent">
          All the wonderful things I wish for you this year! 🎁
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {wishes.map((wish, index) => (
          <div 
            key={wish.id}
            className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full bg-gradient-primary shadow-glow`}>
                <wish.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-accent font-bold text-foreground text-lg">
                    {wish.title}
                  </h3>
                  <Star className={`w-4 h-4 ${getPriorityColor(wish.priority)}`} />
                </div>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {wish.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};