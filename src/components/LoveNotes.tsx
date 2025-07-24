import { Heart, MessageCircle, Flower, Sparkles } from "lucide-react";

export const LoveNotes = () => {
  const notes = [
    {
      id: 1,
      message: "Your smile brightens up my entire world",
      author: "💕 Faizan",
      color: "from-pink-400 to-rose-300"
    },
    {
      id: 2,
      message: "Every day with you feels like a beautiful dream",
      author: "💝 With Love",
      color: "from-purple-400 to-pink-300"
    },
    {
      id: 3,
      message: "You make ordinary moments feel extraordinary",
      author: "✨ Forever Yours",
      color: "from-blue-400 to-purple-300"
    },
    {
      id: 4,
      message: "Your kindness touches everyone's heart",
      author: "🌹 Always",
      color: "from-yellow-400 to-pink-300"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <MessageCircle className="w-8 h-8 text-pink-500 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-cursive text-primary">
            Love Notes for You
          </h2>
          <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground font-accent italic">
          Sweet messages written just for you 💌
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {notes.map((note, index) => (
          <div 
            key={note.id}
            className="relative group"
            style={{
              animationDelay: `${index * 0.15}s`
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${note.color} rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative glass-card rounded-2xl p-6 bg-white/10 border border-white/20 hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <p className="font-handwriting text-xl text-foreground leading-relaxed mb-4">
                    "{note.message}"
                  </p>
                  <div className="flex items-center gap-2">
                    <Flower className="w-4 h-4 text-pink-400" />
                    <span className="font-script text-lg text-muted-foreground">
                      {note.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};