import { Gift, Heart, Star, Sparkles, Crown, Flower2 } from 'lucide-react';

export const BirthdaySuprises = () => {
  const surprises = [
    {
      icon: Gift,
      title: "Special Surprise Box",
      description: "A mystery gift wrapped with love just for you",
      tag: "Mystery",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Crown,
      title: "Queen for the Day",
      description: "Today you're the birthday queen, treated like royalty",
      tag: "Royal",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Magical Moments",
      description: "Creating enchanting memories that sparkle forever",
      tag: "Magical",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Love Letters",
      description: "Handwritten notes filled with heartfelt wishes",
      tag: "Sweet",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Wish Upon a Star",
      description: "Make a special birthday wish and watch it come true",
      tag: "Dreamy",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Flower2,
      title: "Beautiful Blooms",
      description: "Fresh flowers to brighten your special day",
      tag: "Lovely",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
          🎁 Birthday Surprises Awaiting 🎁
        </h2>
        <p className="text-lg text-muted-foreground font-accent max-w-2xl mx-auto">
          Wonderful surprises planned to make your birthday absolutely magical!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {surprises.map((surprise, index) => (
          <div 
            key={surprise.title}
            className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105 border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${surprise.color} flex items-center justify-center shadow-lg`}>
                <surprise.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xs font-accent font-bold px-3 py-1 rounded-full bg-gradient-to-r ${surprise.color} text-white`}>
                {surprise.tag}
              </span>
            </div>
            
            <h3 className="font-display font-bold text-foreground text-lg mb-2">
              {surprise.title}
            </h3>
            
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {surprise.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};