
import { Heart } from "lucide-react";

export const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 15,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-400 fill-current"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
};
