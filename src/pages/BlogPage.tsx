import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react";

const BlogPage = () => {
  const featuredPost = {
    title: "How I Achieved 95% Win Rate in Binary Options Trading",
    excerpt: "Discover the exact strategies and mindset that helped me consistently profit in binary options trading. This comprehensive guide reveals my top 5 techniques.",
    image: "/api/placeholder/800/400",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Strategy",
    featured: true
  };

  const blogPosts = [
    {
      title: "Understanding Market Psychology for Better Trading Decisions",
      excerpt: "Learn how emotions drive market movements and how to use this knowledge to your advantage in binary options trading.",
      image: "/api/placeholder/400/300",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Psychology",
      tags: ["trading psychology", "emotions", "decision making"]
    },
    {
      title: "Top 10 Technical Indicators for Binary Options Success",
      excerpt: "Master these essential technical indicators to improve your trading accuracy and make more informed decisions.",
      image: "/api/placeholder/400/300",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Technical Analysis",
      tags: ["indicators", "technical analysis", "trading tools"]
    },
    {
      title: "Risk Management: The Key to Long-Term Trading Success",
      excerpt: "Discover how proper risk management can make the difference between consistent profits and devastating losses.",
      image: "/api/placeholder/400/300",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Risk Management",
      tags: ["risk management", "money management", "trading rules"]
    },
    {
      title: "Live Trading Session: EUR/USD Analysis and Results",
      excerpt: "Watch my complete thought process during a live EUR/USD trading session, including analysis, entry, and exit strategies.",
      image: "/api/placeholder/400/300",
      date: "December 5, 2024",
      readTime: "12 min read",
      category: "Live Trading",
      tags: ["live trading", "EUR/USD", "forex analysis"]
    },
    {
      title: "Common Binary Options Mistakes and How to Avoid Them",
      excerpt: "Learn from the most common mistakes that cause traders to lose money and how to avoid these costly errors.",
      image: "/api/placeholder/400/300",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Education",
      tags: ["mistakes", "trading tips", "beginner guide"]
    },
    {
      title: "Building Your Trading Plan: A Step-by-Step Guide",
      excerpt: "Create a comprehensive trading plan that will keep you disciplined and focused on your trading goals.",
      image: "/api/placeholder/400/300",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Strategy",
      tags: ["trading plan", "strategy", "discipline"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 25, active: true },
    { name: "Strategy", count: 8, active: false },
    { name: "Technical Analysis", count: 6, active: false },
    { name: "Psychology", count: 4, active: false },
    { name: "Risk Management", count: 3, active: false },
    { name: "Live Trading", count: 4, active: false }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trading Insights & <span className="text-trading-gold">Market Analysis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the markets with expert analysis, proven strategies, and actionable trading insights.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={category.active ? "bg-gradient-gold text-primary-foreground" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden hover:shadow-trading transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-gold text-primary-foreground">
                  Featured Post
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 text-trading-gold border-trading-gold">
                  {featuredPost.category}
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </CardTitle>
                <CardDescription className="text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-trading transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 left-4 bg-white/90 text-trading-blue border-trading-blue"
                  >
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 leading-tight group-hover:text-trading-gold transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-trading-gold group-hover:text-primary-foreground group-hover:border-trading-gold transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <TrendingUp className="h-12 w-12 text-trading-gold mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Never Miss a Trading Opportunity
                  </h3>
                  <p className="text-lg mb-8 opacity-90">
                    Get the latest market analysis, trading signals, and educational content delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg text-trading-blue focus:outline-none focus:ring-2 focus:ring-trading-gold"
                    />
                    <Button className="bg-white text-trading-blue hover:bg-gray-100 px-8">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;