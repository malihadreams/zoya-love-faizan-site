
import { Heart, Gift, Sparkles, Star } from "lucide-react";
import { BirthdayHero } from "@/components/BirthdayHero";
import { MessageCard } from "@/components/MessageCard";
import { FloatingHearts } from "@/components/FloatingHearts";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <BirthdayHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Birthday Message */}
        <MessageCard />
        
        {/* Special Wishes Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Special Birthday Wishes
            </h2>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-accent font-semibold text-foreground mb-2">Many Happy Returns</h3>
              <p className="text-muted-foreground text-sm font-body">May this special day bring you endless joy and beautiful memories that last forever.</p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-accent font-semibold text-foreground mb-2">Love & Happiness</h3>
              <p className="text-muted-foreground text-sm font-body">Wishing you a year filled with love, laughter, and all the things that make you smile.</p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-accent font-semibold text-foreground mb-2">Shine Bright</h3>
              <p className="text-muted-foreground text-sm font-body">You're amazing just the way you are. Keep shining and inspiring everyone around you!</p>
            </div>
          </div>
        </div>
        
        {/* Footer Message */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground max-w-2xl mx-auto shadow-elevated glow-effect">
            <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <p className="text-lg md:text-xl font-body font-medium leading-relaxed">
              "On your special day, I want you to know how grateful I am to have you in my life. 
              Happy Birthday, Zoya! Here's to another year of wonderful memories together."
            </p>
            <p className="mt-4 text-primary-foreground/90 font-accent font-semibold">- With love, Faizan 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
