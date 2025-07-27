
import { Heart, Gift, Sparkles } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 bg-pink-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-red-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-32 w-5 h-5 bg-red-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Animated sparkles */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
          <Gift className="w-10 h-10 text-red-500 animate-bounce" />
          <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-script font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-pink-500 to-rose-400 bg-clip-text text-transparent italic leading-none">
          Happy Birthday
        </h1>
        
        {/* Name with special styling */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl border border-pink-200">
            <Heart className="w-5 h-5 md:w-8 md:h-8 text-red-500 animate-pulse" />
            <span className="text-3xl md:text-5xl lg:text-6xl font-cursive font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-primary bg-clip-text text-transparent italic">
              Zoya
            </span>
            <Heart className="w-5 h-5 md:w-8 md:h-8 text-red-500 animate-pulse" />
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
          Wishing you the most beautiful day filled with love and joy! 🎉
        </p>
        
        {/* Animated hearts */}
        <div className="flex justify-center gap-4">
          <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          <Heart className="w-8 h-8 text-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 text-red-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};
