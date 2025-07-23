import { Heart, Camera, Star } from "lucide-react";

export const PhotoMemories = () => {
  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=300&fit=crop",
      title: "Sweet Moments",
      description: "Every moment with you is precious 💕"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      title: "Beautiful Memories",
      description: "Creating memories that last forever ✨"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      title: "Happy Times",
      description: "Your smile brightens every day 🌟"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop",
      title: "Adventure Together",
      description: "Every adventure is better with you 🦋"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <Camera className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Beautiful Memories
          </h2>
          <Camera className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground font-accent">
          Capturing precious moments of our wonderful journey together 📸
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {memories.map((memory, index) => (
          <div 
            key={memory.id}
            className="glass-card rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={memory.image}
                alt={memory.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Heart className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </div>
            <div className="p-6">
              <h3 className="font-accent font-bold text-foreground mb-2 text-lg">
                {memory.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                {memory.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};