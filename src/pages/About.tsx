import { Heart, Star, Sparkles, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              About Zoya
            </h1>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            A celebration of someone truly special - her dreams, her passions, and the joy she brings to everyone around her.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card p-8 hover:shadow-elevated transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Her Beautiful Heart</h2>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              Zoya has this incredible ability to light up any room she walks into. Her kindness knows no bounds, 
              and her genuine care for others makes her someone truly rare in this world. Every conversation with 
              her feels like a warm embrace.
            </p>
          </Card>

          <Card className="glass-card p-8 hover:shadow-elevated transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Dreams & Aspirations</h2>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              Her dreams are as beautiful as she is. Whether she's pursuing her passions or inspiring others 
              to chase theirs, Zoya approaches life with such grace and determination. She believes in making 
              the world a better place, one smile at a time.
            </p>
          </Card>
        </div>

        {/* Personal Message */}
        <Card className="glass-card p-12 text-center max-w-4xl mx-auto mb-16">
          <Gift className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold gradient-text mb-6">
            From Faizan's Heart
          </h2>
          <blockquote className="text-lg text-muted-foreground font-body leading-relaxed italic mb-6">
            "Meeting Zoya changed my perspective on what it means to truly care for someone. She's not just 
            amazing because of her beauty or her intelligence - though she has both in abundance. She's 
            amazing because of her soul, her laughter, and the way she makes everyone feel valued and loved. 
            Happy Birthday to someone who deserves all the happiness in the world."
          </blockquote>
          <p className="text-primary font-accent font-semibold">- Faizan</p>
        </Card>

        {/* Fun Facts */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold gradient-text mb-8">
            What Makes Zoya Special
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🌟", title: "Brightens Every Day", desc: "Her smile can turn any ordinary moment into something magical" },
              { icon: "💝", title: "Generous Soul", desc: "Always the first to help others and spread kindness wherever she goes" },
              { icon: "🎨", title: "Creative Spirit", desc: "Brings beauty and creativity to everything she touches" },
              { icon: "🌸", title: "Gentle Strength", desc: "Shows incredible resilience while maintaining her soft, caring nature" },
              { icon: "✨", title: "Inspiring Presence", desc: "Motivates everyone around her to be their best selves" },
              { icon: "💕", title: "Pure Heart", desc: "Loves with her whole heart and creates deep, meaningful connections" }
            ].map((fact, index) => (
              <Card key={index} className="glass-card p-6 hover:shadow-elevated transition-all duration-300">
                <div className="text-3xl mb-3">{fact.icon}</div>
                <h3 className="font-accent font-semibold text-foreground mb-2">{fact.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{fact.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;