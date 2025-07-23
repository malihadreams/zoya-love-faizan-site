import { Star, Heart, Sparkles, Crown } from "lucide-react";

export const FunFacts = () => {
  const facts = [
    {
      id: 1,
      icon: Crown,
      title: "Birthday Queen",
      fact: "July 31st babies are Leos - natural born leaders with hearts of gold! 👑",
      color: "text-yellow-500"
    },
    {
      id: 2,
      icon: Star,
      title: "Special Number",
      fact: "July 31st is the 212th day of the year - just like how you're one in a million! ⭐",
      color: "text-blue-500"
    },
    {
      id: 3,
      icon: Heart,
      title: "Love Language",
      fact: "Your name 'Zoya' means 'life' and 'love' - perfectly describing your beautiful soul! 💕",
      color: "text-red-500"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Magical Trait",
      fact: "People born on July 31st are known for their kindness and ability to light up any room! ✨",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Fun Facts About You
          </h2>
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground font-accent">
          Amazing things that make you absolutely special! 🌟
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {facts.map((fact, index) => (
          <div 
            key={fact.id}
            className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gradient-primary shadow-glow">
                <fact.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className={`font-accent font-bold text-lg mb-2 ${fact.color}`}>
                  {fact.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {fact.fact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};