import { Heart, MessageCircle, Flower, Sparkles, Users, Star } from "lucide-react";

export const LoveNotes = () => {
  const notes = [
    {
      id: 1,
      message: "Happy Birthday to the most beautiful soul I know! You make my heart skip a beat every time I see your smile.",
      author: "💕 Your Loving Faizan",
      color: "bg-gradient-to-br from-pink-500 to-rose-400",
      textColor: "text-white"
    },
    {
      id: 2,
      message: "You're not just special to me, you're everything! Your beauty, inside and out, leaves me speechless every day.",
      author: "💝 With All My Love",
      color: "bg-gradient-to-br from-purple-500 to-pink-400",
      textColor: "text-white"
    },
    {
      id: 3,
      message: "Every moment with you feels like a dream. You're the most precious person in my life, and I cherish you deeply.",
      author: "✨ Forever Yours",
      color: "bg-gradient-to-br from-blue-500 to-purple-400",
      textColor: "text-white"
    },
    {
      id: 4,
      message: "On your special day, I want you to know how much you mean to me. You're my sunshine, my happiness, my everything!",
      author: "🌹 Your Devoted Admirer",
      color: "bg-gradient-to-br from-yellow-500 to-pink-400",
      textColor: "text-white"
    },
    {
      id: 5,
      message: "Wishing the most amazing girl the happiest birthday! You deserve all the love and happiness in the world.",
      author: "🎉 Someone Who Adores You",
      color: "bg-gradient-to-br from-green-500 to-blue-400",
      textColor: "text-white"
    },
    {
      id: 6,
      message: "You're not just beautiful, you're absolutely stunning! Happy Birthday to the girl who has stolen my heart completely.",
      author: "💖 Forever Enchanted by You",
      color: "bg-gradient-to-br from-red-500 to-pink-400",
      textColor: "text-white"
    }
  ];

  return (
    <div className="mt-20 relative">
      {/* Floating sparkles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Sparkles 
            key={i}
            className={`absolute w-4 h-4 text-pink-300 animate-pulse opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 mb-8">
          <Heart className="w-10 h-10 text-red-500 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-script font-bold bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Love Letters & Sweet Messages
          </h2>
          <Heart className="w-10 h-10 text-red-500 animate-bounce" />
        </div>
        <p className="text-2xl md:text-3xl text-muted-foreground font-handwriting italic">
          Romantic notes from someone who adores you deeply 💕💌
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {notes.map((note, index) => (
          <div 
            key={note.id}
            className="relative group animate-fade-in"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-1 ${note.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
            
            <div className={`relative ${note.color} rounded-3xl p-8 shadow-2xl hover:shadow-elevated transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-white animate-spin-slow" />
                </div>
                <div className="flex-1">
                  <p className={`font-handwriting text-2xl md:text-3xl ${note.textColor} leading-relaxed mb-6 font-bold`}>
                    "{note.message}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Flower className="w-5 h-5 text-white/90" />
                    <span className={`font-script text-xl md:text-2xl ${note.textColor} font-semibold`}>
                      {note.author}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Decorative hearts */}
              <div className="absolute top-4 right-4">
                <Heart className="w-5 h-5 text-white/70 animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Heart className="w-4 h-4 text-white/50 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional floating effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={`heart-${i}`}
            className={`absolute w-6 h-6 text-pink-200 animate-bounce opacity-40`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};