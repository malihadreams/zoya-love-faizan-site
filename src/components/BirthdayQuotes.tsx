import { Quote, Star, Heart } from 'lucide-react';

export const BirthdayQuotes = () => {
  const quotes = [
    {
      text: "Age is merely mind over matter. If you don't mind, it doesn't matter.",
      author: "Mark Twain",
      color: "from-pink-500 to-rose-500"
    },
    {
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
      color: "from-purple-500 to-indigo-500"
    },
    {
      text: "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
      author: "Dr. Seuss",
      color: "from-blue-500 to-cyan-500"
    },
    {
      text: "A birthday is the first day of another 365-day journey around the sun. Enjoy the trip!",
      author: "Unknown",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Quote className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
            ✨ Birthday Wisdom ✨
          </h2>
          <Quote className="w-8 h-8 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground font-accent max-w-2xl mx-auto">
          Beautiful thoughts and inspiring words for your special day
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {quotes.map((quote, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${quote.color} opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            {/* Main quote card */}
            <div className="relative glass-card rounded-3xl p-8 hover:shadow-elevated transition-all duration-300 hover:scale-105 border border-white/10">
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${quote.color} flex items-center justify-center shadow-lg`}>
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Quote text */}
              <blockquote className="text-center mb-6">
                <p className="text-lg md:text-xl font-accent text-foreground leading-relaxed italic">
                  "{quote.text}"
                </p>
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <cite className="font-display font-semibold text-muted-foreground not-italic">
                  — {quote.author}
                </cite>
                <Star className="w-4 h-4 text-primary" />
              </div>
              
              {/* Decorative hearts */}
              <div className="flex justify-center gap-4 mt-4 opacity-60">
                <Heart className="w-4 h-4 text-pink-500 animate-pulse" style={{ animationDelay: '0s' }} />
                <Heart className="w-4 h-4 text-pink-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Heart className="w-4 h-4 text-pink-500 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};