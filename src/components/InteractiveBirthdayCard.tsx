import { useState } from "react";
import { Heart, Sparkles, Gift, Music, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InteractiveBirthdayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <Gift className="w-8 h-8 text-primary animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Interactive Birthday Card
          </h2>
          <Gift className="w-8 h-8 text-primary animate-bounce" />
        </div>
        <p className="text-xl text-muted-foreground font-accent">
          Click the card to reveal a special surprise! 💌
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Confetti Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 2 + 1}s`
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </div>
            ))}
          </div>
        )}

        {/* Card Container */}
        <div className="relative h-96 perspective-1000">
          <div 
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={handleCardFlip}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden">
              <div className="glass-card rounded-3xl p-8 h-full flex flex-col items-center justify-center bg-gradient-primary text-primary-foreground shadow-elevated glow-effect">
                <div className="text-center">
                  <Gift className="w-16 h-16 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Happy Birthday!
                  </h3>
                  <p className="text-xl font-accent font-medium mb-6">
                    Zoya, you're amazing! 🎉
                  </p>
                  <p className="text-primary-foreground/90 font-body">
                    Click to open your special card ✨
                  </p>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-center shadow-elevated">
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-6 text-red-500 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    From Faizan with Love 💕
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    "Your special day deserves all the love and joy in the world. 
                    You bring so much happiness to everyone around you, and today 
                    we celebrate the wonderful person you are!"
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Music className="w-5 h-5" />
                    <span className="font-accent font-medium">
                      Playing: Happy Birthday Melody 🎵
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            onClick={handleCardFlip}
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
          >
            <Heart className="w-4 h-4 mr-2" />
            {isFlipped ? 'Close Card' : 'Open Card'}
          </Button>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Send className="w-4 h-4 mr-2" />
            Share Love
          </Button>
        </div>
      </div>
    </div>
  );
};