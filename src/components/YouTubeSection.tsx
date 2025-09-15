import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Youtube, ExternalLink, Eye, ThumbsUp, Calendar } from "lucide-react";

const YouTubeSection = () => {
  const featuredVideo = {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "How I Made $5,425 in 11 Minutes - QUOTEX Tutorial",
    thumbnail: "/api/placeholder/800/450",
    views: "25,431",
    likes: "1,892",
    duration: "11:09",
    uploadDate: "2 days ago",
    description: "Watch my complete trading session where I demonstrate the exact strategy that led to $5,425 profit in just 11 minutes using QUOTEX platform."
  };

  const latestVideos = [
    {
      id: "dQw4w9WgXcQ",
      title: "QUOTEX Best Indicator Strategy - $6,630 in 12 Minutes",
      thumbnail: "/api/placeholder/400/225",
      views: "18,234",
      duration: "12:55",
      uploadDate: "4 days ago"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "QUOTEX Withdrawal Proof - $4,029 Easy Strategy",
      thumbnail: "/api/placeholder/400/225",
      views: "31,562",
      duration: "12:30",
      uploadDate: "1 week ago"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Pocket Option Trading Strategy - $4,522 Profit",
      thumbnail: "/api/placeholder/400/225",
      views: "22,891",
      duration: "7:46",
      uploadDate: "1 week ago"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "QUOTEX Signals Review - $5,141 in 10 Minutes",
      thumbnail: "/api/placeholder/400/225",
      views: "15,677",
      duration: "10:34",
      uploadDate: "2 weeks ago"
    }
  ];

  const stats = [
    { label: "Subscribers", value: "3.84K", icon: <Youtube className="h-5 w-5" /> },
    { label: "Total Views", value: "485K", icon: <Eye className="h-5 w-5" /> },
    { label: "Videos", value: "17", icon: <Play className="h-5 w-5" /> },
    { label: "Avg. Likes", value: "1.2K", icon: <ThumbsUp className="h-5 w-5" /> }
  ];

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
            See real trading sessions with live results. Learn the exact strategies that generate consistent profits.
          </p>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
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
        <div className="mb-16">
          <Card className="overflow-hidden shadow-trading">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
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
                <Badge className="absolute top-4 left-4 bg-black/70 text-white">
                  {featuredVideo.duration}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  Featured
                </Badge>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <CardTitle className="text-2xl font-bold mb-4 leading-tight">
                  {featuredVideo.title}
                </CardTitle>
                <CardDescription className="text-lg mb-6 leading-relaxed">
                  {featuredVideo.description}
                </CardDescription>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {featuredVideo.views} views
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {featuredVideo.likes} likes
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredVideo.uploadDate}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View on YouTube
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Latest Videos Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Latest Trading Videos</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-trading transition-all duration-300 group">
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
                  <Badge className="absolute bottom-2 right-2 bg-black/70 text-white text-xs">
                    {video.duration}
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
                    <span>{video.uploadDate}</span>
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
                Don't Miss Any Trading Opportunities
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to my YouTube channel for daily trading signals, live sessions, and market analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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

export default YouTubeSection;