import { useState } from "react";
import { Settings, Users, MessageSquare, Image, BarChart3, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock stats - in a real app, this would come from Supabase
  const stats = {
    totalMessages: 42,
    totalVisitors: 156,
    photosUploaded: 18,
    newMessagesToday: 7
  };

  // Mock recent messages
  const recentMessages = [
    { id: 1, name: "Sarah Johnson", message: "Happy birthday! You're amazing! 🎉", time: "2 hours ago" },
    { id: 2, name: "Alex Chen", message: "Hope your special day is as wonderful as you are!", time: "4 hours ago" },
    { id: 3, name: "Emma Williams", message: "Sending you lots of love on your birthday! 💕", time: "6 hours ago" },
    { id: 4, name: "Michael Brown", message: "Wishing you happiness and joy today and always!", time: "8 hours ago" },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <Card className="glass-card p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-display font-bold gradient-text mb-4">
              Admin Access
            </h1>
            <p className="text-muted-foreground font-body mb-6">
              This area is for managing the website content and viewing analytics.
            </p>
            <Button 
              onClick={() => setIsAuthenticated(true)} 
              className="w-full font-accent"
            >
              Login (Demo)
            </Button>
            <p className="text-xs text-muted-foreground mt-4 font-body">
              Note: In a real application, this would require Supabase authentication
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold gradient-text mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground font-body">
              Manage your website content and view analytics
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="font-accent"
          >
            Logout
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalMessages}</p>
                <p className="text-sm text-muted-foreground font-body">Total Messages</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalVisitors}</p>
                <p className="text-sm text-muted-foreground font-body">Total Visitors</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3">
              <Image className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.photosUploaded}</p>
                <p className="text-sm text-muted-foreground font-body">Photos</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.newMessagesToday}</p>
                <p className="text-sm text-muted-foreground font-body">New Today</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="messages" className="font-accent">Messages</TabsTrigger>
            <TabsTrigger value="gallery" className="font-accent">Gallery</TabsTrigger>
            <TabsTrigger value="analytics" className="font-accent">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="font-accent">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-semibold text-foreground">Recent Messages</h2>
                <Badge variant="secondary" className="font-accent">
                  {recentMessages.length} messages
                </Badge>
              </div>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="border-b border-border pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-accent font-medium text-foreground">{message.name}</h3>
                      <span className="text-xs text-muted-foreground font-body">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">{message.message}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">Gallery Management</h2>
              <p className="text-muted-foreground font-body">
                Gallery management features would be implemented here with Supabase storage integration.
                This would include upload, delete, and organize photo functionality.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">Website Analytics</h2>
              <p className="text-muted-foreground font-body">
                Detailed analytics charts and visitor statistics would be displayed here.
                This would show page views, visitor locations, popular content, and engagement metrics.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">Website Settings</h2>
              <p className="text-muted-foreground font-body">
                Configuration options for the website would be available here, including:
                theme customization, content management, user permissions, and backup options.
              </p>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Supabase Integration Note */}
        <Card className="glass-card p-6 mt-8 border-primary/20">
          <div className="flex items-start gap-3">
            <Settings className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">Backend Integration Ready</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                This admin panel is designed to work with Supabase for full backend functionality. 
                Connect to Supabase to enable real-time data management, authentication, file storage, 
                and all the advanced features needed for a complete full-stack application.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Admin;