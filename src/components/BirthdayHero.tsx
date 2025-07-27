
import { Heart, Gift, Sparkles } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated circle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full animate-bounce blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-rose-400/25 to-pink-400/25 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-bounce blur-2xl" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-60 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Rotating circle with sparkles */}
        <div className="relative mb-8">
          <div className="w-80 h-80 md:w-96 md:h-96 mx-auto relative">
            <div className="absolute inset-0 border-4 border-dashed border-gradient-to-r from-pink-400 via-purple-400 to-rose-400 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 border-2 border-dotted border-purple-300 rounded-full animate-spin opacity-40" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Happy Birthday text with typewriter effect */}
              <div className="mb-4">
                <h1 className="text-2xl md:text-4xl font-script font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
                  Happy Birthday
                </h1>
              </div>
              
              {/* Zoya name with special effects */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-rose-400/20 blur-xl animate-pulse rounded-full"></div>
                <h2 className="relative text-6xl md:text-8xl font-cursive font-black bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-bounce tracking-wider">
                  Zoya
                </h2>
                
                {/* Orbiting hearts */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                  <Heart className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 text-red-500" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                  <Heart className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-5 text-pink-500" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
                  <Sparkles className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-5 h-5 text-purple-500" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '9s', animationDirection: 'reverse' }}>
                  <Gift className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-5 h-5 text-rose-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle with wave animation */}
        <div className="relative">
          <p className="text-lg md:text-xl text-gray-600 font-medium animate-fade-in">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>Another</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>year</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>of</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>amazing</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>adventures</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>with</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>the</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>most</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>special</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>person!</span>
            {' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '1.1s' }}>🌟💫</span>
          </p>
        </div>

        {/* Bottom floating hearts */}
        <div className="mt-8 flex justify-center gap-4">
          <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          <Heart className="w-8 h-8 text-pink-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Heart className="w-6 h-6 text-rose-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
    </div>
  );
};
