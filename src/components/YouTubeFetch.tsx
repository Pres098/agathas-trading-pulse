import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Youtube, ExternalLink, Eye, ThumbsUp, Calendar } from "lucide-react";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
  duration?: string;
  description?: string;
}

const YouTubeFetch = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [channelStats, setChannelStats] = useState({
    subscriberCount: '3.84K',
    videoCount: '17',
    viewCount: '485K'
  });
  const [isLoading, setIsLoading] = useState(true);

  // Real videos from Agatha's channel
  const mockVideos: VideoData[] = [
    {
      id: "QYPBsLFpuL8",
      title: "Binary Options Strategy - Free Live Trading Session",
      thumbnail: "https://img.youtube.com/vi/QYPBsLFpuL8/maxresdefault.jpg",
      views: "25,431",
      publishedAt: "2 days ago",
      description: "Join me for a live trading session with free signals and real-time analysis. Learn my proven strategies step by step."
    },
    {
      id: "-LJ4vIaWyQI", 
      title: "Free Trading Signals - Live Results & Analysis",
      thumbnail: "https://img.youtube.com/vi/-LJ4vIaWyQI/maxresdefault.jpg",
      views: "18,234",
      publishedAt: "4 days ago"
    },
    {
      id: "lwP4i2GN4K8",
      title: "Market Analysis & Free Trading Strategy", 
      thumbnail: "https://img.youtube.com/vi/lwP4i2GN4K8/maxresdefault.jpg",
      views: "31,562",
      publishedAt: "1 week ago"
    },
    {
      id: "YBNe9UhfqMI",
      title: "Live Trading Session - Free Educational Content",
      thumbnail: "https://img.youtube.com/vi/YBNe9UhfqMI/maxresdefault.jpg", 
      views: "22,891",
      publishedAt: "1 week ago"
    }
  ];

  useEffect(() => {
    // Simulate loading and set mock data
    const timer = setTimeout(() => {
      setVideos(mockVideos);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openYouTubeVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const openYouTubeChannel = () => {
    window.open('https://youtube.com/@misstrading', '_blank');
  };

  const stats = [
    { label: "Subscribers", value: channelStats.subscriberCount, icon: <Youtube className="h-5 w-5" /> },
    { label: "Total Views", value: channelStats.viewCount, icon: <Eye className="h-5 w-5" /> },
    { label: "Videos", value: channelStats.videoCount, icon: <Play className="h-5 w-5" /> },
    { label: "Avg. Likes", value: "1.2K", icon: <ThumbsUp className="h-5 w-5" /> }
  ];

  const featuredVideo = videos[0];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Youtube className="h-8 w-8 text-red-500" />
            <h2 className="text-4xl font-bold text-foreground">
              Watch & <span className="text-trading-gold">Learn</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See real trading sessions with live results. Learn the exact strategies that generate consistent profits - all FREE!
          </p>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-trading transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center text-trading-gold mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-16">
            <Card className="overflow-hidden shadow-trading">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative group cursor-pointer" onClick={() => openYouTubeVideo(featuredVideo.id)}>
                  <img 
                    src={featuredVideo.thumbnail} 
                    alt={featuredVideo.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 p-0">
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    Featured
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-trading-success text-white">
                    FREE
                  </Badge>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <CardTitle className="text-2xl font-bold mb-4 leading-tight">
                    {featuredVideo.title}
                  </CardTitle>
                  {featuredVideo.description && (
                    <CardDescription className="text-lg mb-6 leading-relaxed">
                      {featuredVideo.description}
                    </CardDescription>
                  )}
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredVideo.views} views
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredVideo.publishedAt}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => openYouTubeVideo(featuredVideo.id)}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Free
                    </Button>
                    <Button variant="outline" onClick={openYouTubeChannel}>
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Visit Channel
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Latest Videos Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Latest Free Trading Videos</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.slice(1).map((video, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-trading transition-all duration-300 group cursor-pointer"
                onClick={() => openYouTubeVideo(video.id)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 p-0">
                      <Play className="h-5 w-5 ml-0.5" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-trading-success text-white text-xs">
                    FREE
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <CardTitle className="text-sm font-semibold mb-2 leading-tight line-clamp-2 group-hover:text-trading-gold transition-colors">
                    {video.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {video.views}
                    </div>
                    <span>{video.publishedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Youtube className="h-16 w-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Don't Miss Any Free Trading Opportunities
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to Agatha's YouTube channel for daily FREE trading signals, live sessions, and market analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" onClick={openYouTubeChannel}>
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe FREE
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={openYouTubeChannel}>
                  <Play className="mr-2 h-5 w-5" />
                  Watch All Videos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouTubeFetch;