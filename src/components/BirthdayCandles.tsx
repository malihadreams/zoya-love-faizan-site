export const BirthdayCandles = () => {
  const candles = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    height: Math.random() * 20 + 40,
    delay: Math.random() * 2,
  }));

  return (
    <div className="flex items-end justify-center gap-2 md:gap-4 mb-8">
      {candles.map((candle) => (
        <div key={candle.id} className="flex flex-col items-center">
          {/* Flame */}
          <div 
            className="w-3 h-4 md:w-4 md:h-5 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full animate-pulse shadow-glow"
            style={{ 
              animationDelay: `${candle.delay}s`,
              filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))'
            }}
          />
          {/* Wick */}
          <div className="w-0.5 h-2 bg-amber-800 rounded-full" />
          {/* Candle body */}
          <div 
            className="w-4 md:w-6 bg-gradient-to-b from-pink-300 to-pink-500 rounded-b-lg shadow-soft"
            style={{ height: `${candle.height}px` }}
          />
          {/* Candle base */}
          <div className="w-6 md:w-8 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full" />
        </div>
      ))}
    </div>
  );
};