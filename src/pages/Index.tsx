
import { Heart, Gift, Sparkles, Star, Calendar, Cake } from "lucide-react";
import { BirthdayHero } from "@/components/BirthdayHero";
import { MessageCard } from "@/components/MessageCard";
import { FloatingHearts } from "@/components/FloatingHearts";
import { BirthdayCountdown } from "@/components/BirthdayCountdown";
import { BirthdayCandles } from "@/components/BirthdayCandles";
import { PhotoMemories } from "@/components/PhotoMemories";
import { BirthdayWishlist } from "@/components/BirthdayWishlist";
import { BirthdayTimeline } from "@/components/BirthdayTimeline";
import { InteractiveBirthdayCard } from "@/components/InteractiveBirthdayCard";
import { FunFacts } from "@/components/FunFacts";
import { BirthdayPlaylist } from "@/components/BirthdayPlaylist";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <BirthdayHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Birthday Countdown */}
        <BirthdayCountdown />
        
        {/* Birthday Candles */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <Cake className="w-8 h-8 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
              Make a Wish! 
            </h2>
            <Cake className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <BirthdayCandles />
          <p className="text-lg md:text-xl text-muted-foreground font-accent italic">
            "Blow out the candles and make your dreams come true!" ✨
          </p>
        </div>
        
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
        
        {/* Photo Memories Section */}
        <PhotoMemories />
        
        {/* Interactive Birthday Card */}
        <InteractiveBirthdayCard />
        
        {/* Birthday Wishlist */}
        <BirthdayWishlist />
        
        {/* Fun Facts */}
        <FunFacts />
        
        {/* Birthday Timeline */}
        <BirthdayTimeline />
        
        {/* Birthday Playlist */}
        <BirthdayPlaylist />
        
        {/* Additional Wishes Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                More Birthday Love
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
        </div>
        
        {/* Special Date Section */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-elevated mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-10 h-10 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
                July 31st
              </h2>
              <Calendar className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl font-accent font-semibold text-foreground mb-4">
              The Most Beautiful Day of the Year! 🌸
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              This special date marks the beginning of another amazing year for the most wonderful person I know.
              Every July 31st reminds me how lucky I am to have you in my life, Zoya! ✨
            </p>
          </div>
          
          {/* Footer Message */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto shadow-elevated glow-effect">
            <Heart className="w-12 h-12 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              A Special Note from Faizan 💕
            </h3>
            <p className="text-lg md:text-xl font-body font-medium leading-relaxed mb-6">
              "Dearest Zoya, on this magical day - July 31st - I want you to know that you bring so much 
              joy and love into this world. Your smile lights up every room, your kindness touches every heart, 
              and your beautiful soul makes everything better."
            </p>
            <p className="text-lg md:text-xl font-body font-medium leading-relaxed mb-6">
              "As you celebrate another year of your amazing life, I wish you endless happiness, 
              boundless love, and all the beautiful moments your heart can hold. You deserve every 
              wonderful thing this world has to offer!"
            </p>
            <p className="text-xl md:text-2xl font-accent font-bold">
              Happy Birthday, Beautiful! 🎂✨🎉
            </p>
            <p className="mt-6 text-primary-foreground/90 font-accent font-semibold text-lg">
              - With all my love and best wishes, Faizan 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
