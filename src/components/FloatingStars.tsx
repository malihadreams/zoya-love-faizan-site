import { Star, Sparkles } from "lucide-react";

export const FloatingStars = () => {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 16 + 8,
    left: Math.random() * 100,
    animationDuration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        >
          {Math.random() > 0.5 ? (
            <Star 
              className="text-yellow-300/60" 
              style={{ width: `${star.size}px`, height: `${star.size}px` }}
            />
          ) : (
            <Sparkles 
              className="text-pink-300/60" 
              style={{ width: `${star.size}px`, height: `${star.size}px` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};