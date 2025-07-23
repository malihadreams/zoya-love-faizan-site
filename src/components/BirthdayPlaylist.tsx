import { Music, Play, Heart, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BirthdayPlaylist = () => {
  const songs = [
    {
      id: 1,
      title: "Happy Birthday to You",
      artist: "Classic Birthday Song",
      duration: "0:30",
      mood: "Celebratory"
    },
    {
      id: 2,
      title: "Perfect",
      artist: "Ed Sheeran",
      duration: "4:23",
      mood: "Romantic"
    },
    {
      id: 3,
      title: "Count on Me",
      artist: "Bruno Mars",
      duration: "3:17",
      mood: "Friendship"
    },
    {
      id: 4,
      title: "A Thousand Years",
      artist: "Christina Perri",
      duration: "4:45",
      mood: "Timeless Love"
    },
    {
      id: 5,
      title: "Best Day of My Life",
      artist: "American Authors",
      duration: "3:14",
      mood: "Joyful"
    }
  ];

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'Celebratory': return 'text-yellow-500';
      case 'Romantic': return 'text-red-500';
      case 'Friendship': return 'text-blue-500';
      case 'Timeless Love': return 'text-purple-500';
      case 'Joyful': return 'text-green-500';
      default: return 'text-primary';
    }
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <Music className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Birthday Playlist
          </h2>
          <Music className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground font-accent">
          Special songs curated just for your birthday celebration! 🎵
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-3xl p-8 shadow-elevated">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-full bg-gradient-primary shadow-glow">
              <Volume2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                Zoya's Special Playlist
              </h3>
              <p className="text-muted-foreground font-accent">
                5 songs • Created with love by Faizan
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {songs.map((song, index) => (
              <div 
                key={song.id}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-accent font-semibold text-foreground group-hover:text-primary transition-colors">
                    {song.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {song.artist}
                  </p>
                </div>
                
                <div className="text-right">
                  <span className={`text-xs font-accent font-medium ${getMoodColor(song.mood)}`}>
                    {song.mood}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {song.duration}
                  </p>
                </div>
                
                <Heart className="w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
              <Play className="w-4 h-4 mr-2" />
              Play All Songs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};