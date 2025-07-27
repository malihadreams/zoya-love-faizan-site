
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
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-red-400/20 blur-3xl animate-pulse"></div>
          <div className="relative inline-flex items-center gap-2 md:gap-4 bg-gradient-to-r from-white/95 via-pink-50/95 to-white/95 backdrop-blur-sm rounded-full px-6 md:px-10 py-4 md:py-6 shadow-2xl border-2 border-gradient-to-r from-pink-200 via-purple-200 to-pink-200 hover:scale-105 transition-all duration-300">
            <Heart className="w-6 h-6 md:w-10 md:h-10 text-red-500 animate-bounce" />
            <div className="relative">
              <span className="text-4xl md:text-6xl lg:text-7xl font-cursive font-black bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent italic drop-shadow-lg animate-pulse">
                Zoya
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </div>
            <Heart className="w-6 h-6 md:w-10 md:h-10 text-red-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
          Another year of amazing adventures with the most special person! 🌟💫
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
