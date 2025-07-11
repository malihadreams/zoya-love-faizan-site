
import { Heart, Quote } from "lucide-react";

export const MessageCard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-8 md:p-12 hover:shadow-elevated transition-all duration-300">
        <div className="text-center mb-8">
          <Quote className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">A Special Message</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Dear Zoya,
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Today is your special day, and I wanted to create something beautiful just for you! 
            Your kindness, your smile, and your amazing spirit bring so much joy to everyone around you.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            I hope this new year of your life brings you countless moments of happiness, 
            adventures that fill your heart with wonder, and dreams that come true in the most magical ways.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            You deserve all the love and happiness in the world, today and always! 🎂✨
          </p>
          
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 border border-pink-200">
            <Heart className="w-6 h-6 text-red-500" />
            <p className="text-xl font-semibold text-gray-800">
              Happy Birthday, beautiful soul! 🎉
            </p>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          
          <p className="text-right text-pink-600 font-semibold text-xl mt-6">
            - With lots of love, Faizan 💕
          </p>
        </div>
      </div>
    </div>
  );
};
