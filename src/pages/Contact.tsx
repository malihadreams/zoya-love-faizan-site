import { useState } from "react";
import { Heart, Send, Mail, MessageSquare, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send to a backend/Supabase
    toast({
      title: "Message Sent! 💕",
      description: "Your beautiful message has been received. Thank you for sharing your thoughts!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              Send Your Love
            </h1>
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Share your thoughts, birthday wishes, or just send some love. Every message brings a smile to her face.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Send a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-accent">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 font-body"
                  placeholder="How should we address you?"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="font-accent">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 font-body"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="font-accent">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 font-body resize-none"
                  placeholder="Share your thoughts, birthday wishes, or just say hello..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full font-accent flex items-center gap-2 glow-effect"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Info & Inspiration */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Why Your Message Matters
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Every word you share becomes part of this beautiful collection of love and memories. 
                Your thoughts, whether big or small, add to the tapestry of appreciation that surrounds 
                someone truly special.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <Star className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Message Ideas
              </h3>
              <ul className="text-muted-foreground font-body space-y-2">
                <li>• Share a favorite memory with Zoya</li>
                <li>• Tell her what makes her special to you</li>
                <li>• Send birthday wishes and well-wishes</li>
                <li>• Express gratitude for her friendship</li>
                <li>• Share hopes and dreams for her future</li>
              </ul>
            </Card>

            {/* Recent Messages Preview */}
            <Card className="glass-card p-8">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Recent Messages
              </h3>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm font-body italic text-muted-foreground">
                    "Happy birthday to someone who brings so much joy to everyone around her! 🎉"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-accent">- Sarah</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm font-body italic text-muted-foreground">
                    "Your kindness and beautiful spirit inspire me every day. Have an amazing birthday! ✨"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-accent">- Alex</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;