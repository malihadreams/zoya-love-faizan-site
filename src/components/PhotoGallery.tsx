import { Camera, Heart, Smile, Sparkles } from "lucide-react";

export const PhotoGallery = () => {
  const photos = [
    {
      title: "Beautiful Memories",
      description: "Every photo tells our amazing story! 📸",
      gradient: "from-pink-300 to-purple-300"
    },
    {
      title: "Friendship Goals",
      description: "Together we create the best moments! 💕",
      gradient: "from-blue-300 to-pink-300"
    },
    {
      title: "Happy Times",
      description: "Your smile lights up every picture! ✨",
      gradient: "from-purple-300 to-red-300"
    },
    {
      title: "Special Moments",
      description: "Making memories that last forever! 🌟",
      gradient: "from-green-300 to-blue-300"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Our Memory Gallery
            </h2>
            <Camera className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground font-accent">
            Beautiful moments captured forever! 📷✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative h-64 rounded-3xl bg-gradient-to-br ${photo.gradient} shadow-elevated hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm font-accent opacity-90">
                      {photo.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Smile className="w-5 h-5 text-primary" />
            <span className="font-accent text-muted-foreground">
              More amazing memories coming soon! 💕
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};