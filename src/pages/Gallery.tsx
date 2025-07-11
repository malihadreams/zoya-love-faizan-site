import { useState } from "react";
import { Heart, Star, Camera, Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in a real app, these would come from a database
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      caption: "Beautiful smile that lights up my world",
      category: "portraits"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
      caption: "Adventure together - our hiking trip",
      category: "memories"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      caption: "That moment when everything felt perfect",
      category: "portraits"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=400&h=300&fit=crop",
      caption: "Sunset walks and deep conversations",
      category: "memories"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      caption: "Laughing until our stomachs hurt",
      category: "portraits"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
      caption: "Coffee dates and endless stories",
      category: "memories"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categories = ["all", "portraits", "memories"];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <Camera className="w-6 h-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              Memory Gallery
            </h1>
            <Camera className="w-6 h-6 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            A collection of beautiful moments, precious memories, and the joy we've shared together.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-accent capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <Card key={image.id} className="glass-card overflow-hidden group hover:shadow-elevated transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-2">
                          <Plus className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-transparent border-0 p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                        <p className="font-body">{image.caption}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground font-body">{image.caption}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Message */}
        <Card className="glass-card p-8 text-center max-w-3xl mx-auto">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold gradient-text mb-4">
            Every Picture Tells Our Story
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Each photograph captures not just a moment in time, but a feeling, a memory, and a piece of our journey together. 
            These images remind me of all the reasons why you're so special and why every day with you feels like a gift.
          </p>
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;