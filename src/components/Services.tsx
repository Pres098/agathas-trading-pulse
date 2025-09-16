import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap, TrendingUp, Users, MessageCircle, BookOpen, Play } from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Free Trading Signals",
      description: "Get daily trading signals completely free",
      features: [
        "5-8 quality signals daily",
        "Real-time signal delivery",
        "Market analysis included",
        "Telegram group access",
        "Educational resources",
        "Community support",
        "YouTube tutorials",
        "Mobile notifications"
      ],
      popular: true,
      icon: <Star className="h-6 w-6" />,
      buttonText: "Join Free Signals",
      buttonVariant: "default" as const
    },
    {
      name: "Free Mentorship",
      description: "Learn trading strategies and market analysis",
      features: [
        "Weekly live sessions",
        "Trading strategy tutorials",
        "Market analysis training",
        "Risk management guidance",
        "Q&A sessions",
        "Educational webinars",
        "Trading psychology tips",
        "Beginner-friendly content"
      ],
      popular: false,
      icon: <BookOpen className="h-6 w-6" />,
      buttonText: "Start Learning",
      buttonVariant: "outline" as const
    },
    {
      name: "Free Community",
      description: "Join our supportive trading community",
      features: [
        "Active Telegram community",
        "Peer support network",
        "Strategy discussions",
        "Trade idea sharing",
        "Success stories",
        "Market news updates",
        "Live chat support",
        "Networking opportunities"
      ],
      popular: false,
      icon: <Users className="h-6 w-6" />,
      buttonText: "Join Community",
      buttonVariant: "outline" as const
    }
  ];

  const freeResources = [
    {
      title: "Live Trading Sessions",
      description: "Watch Agatha trade live and learn her exact strategies in real-time.",
      icon: <TrendingUp className="h-8 w-8 text-trading-gold" />,
      price: "Free on YouTube"
    },
    {
      title: "Trading Community",
      description: "Join our supportive Telegram group with traders sharing insights and strategies.",
      icon: <Users className="h-8 w-8 text-trading-gold" />,
      price: "Free to Join"
    },
    {
      title: "Market Analysis",
      description: "Daily market analysis and trading opportunities shared for free.",
      icon: <MessageCircle className="h-8 w-8 text-trading-gold" />,
      price: "Free Daily"
    },
    {
      title: "Educational Content",
      description: "Complete tutorials and guides from beginner to advanced strategies.",
      icon: <BookOpen className="h-8 w-8 text-trading-gold" />,
      price: "Always Free"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Free Trading Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in binary options trading - completely free with no hidden costs
          </p>
        </div>

        {/* Free Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative ${
                service.popular 
                  ? "border-trading-gold shadow-trading-gold scale-105" 
                  : "border-border"
              } hover:shadow-trading transition-all duration-300`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  service.popular ? "bg-gradient-gold" : "bg-secondary"
                }`}>
                  <div className={service.popular ? "text-primary-foreground" : "text-trading-gold"}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                <div className="text-3xl font-bold text-trading-success mb-2">100% FREE</div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-trading-success mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={service.buttonVariant}
                  className={`w-full ${
                    service.buttonVariant === "default" 
                      ? "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold" 
                      : ""
                  }`}
                  onClick={() => {
                    if (service.name === "Free Trading Signals") {
                      window.open('https://t.me/+Lz2O4iqb4W40NzQy', '_blank');
                    } else if (service.name === "Free Mentorship") {
                      window.open('https://youtube.com/@agathasignals', '_blank');
                    } else {
                      window.open('https://t.me/+Lz2O4iqb4W40NzQy', '_blank');
                    }
                  }}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Free Resources */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Free Resources & Support
          </h3>
          <p className="text-lg text-muted-foreground">
            Everything you need to succeed in trading - completely free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeResources.map((resource, index) => (
            <Card key={index} className="text-center hover:shadow-trading transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Badge variant="outline" className="text-trading-success border-trading-success">
                  {resource.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Trading for Free?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of traders already learning and earning with Agatha's free signals and education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-trading-blue hover:bg-gray-100" onClick={() => window.open('https://t.me/+Lz2O4iqb4W40NzQy', '_blank')}>
                Get Free Signals
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://t.me/+Lz2O4iqb4W40NzQy', '_blank')}>
                Join Telegram Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;