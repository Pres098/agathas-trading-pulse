import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap, TrendingUp, Users, MessageCircle, BookOpen } from "lucide-react";

const Services = () => {
  const plans = [
    {
      name: "Free Signals",
      price: "Free",
      description: "Get started with basic trading signals",
      features: [
        "2-3 signals per day",
        "Basic market analysis",
        "Email notifications",
        "Community access",
        "Educational resources"
      ],
      popular: false,
      icon: <Star className="h-6 w-6" />,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Premium Signals",
      price: "$49/month",
      description: "Advanced signals with higher accuracy",
      features: [
        "8-12 premium signals daily",
        "Real-time signal delivery",
        "Advanced technical analysis",
        "Risk management guidance",
        "1-on-1 support",
        "Exclusive trading strategies",
        "Performance tracking",
        "Priority customer support"
      ],
      popular: true,
      icon: <Crown className="h-6 w-6" />,
      buttonText: "Start Premium",
      buttonVariant: "default" as const
    },
    {
      name: "VIP Mentorship",
      price: "$199/month",
      description: "Personal mentorship and advanced strategies",
      features: [
        "Everything in Premium",
        "Personal 1-on-1 mentorship",
        "Custom trading strategies",
        "Live trading sessions",
        "Direct WhatsApp access",
        "Account analysis",
        "Advanced market insights",
        "Exclusive webinars"
      ],
      popular: false,
      icon: <Zap className="h-6 w-6" />,
      buttonText: "Join VIP",
      buttonVariant: "outline" as const
    }
  ];

  const additionalServices = [
    {
      title: "Live Trading Sessions",
      description: "Watch Agatha trade live and learn her exact strategies in real-time.",
      icon: <TrendingUp className="h-8 w-8 text-trading-gold" />,
      price: "Included in VIP"
    },
    {
      title: "Private Community",
      description: "Join our exclusive Telegram group with successful traders sharing insights.",
      icon: <Users className="h-8 w-8 text-trading-gold" />,
      price: "Premium & VIP"
    },
    {
      title: "1-on-1 Consultation",
      description: "Personal trading consultation to optimize your strategy and performance.",
      icon: <MessageCircle className="h-8 w-8 text-trading-gold" />,
      price: "$97/session"
    },
    {
      title: "Trading Course",
      description: "Complete binary options course from beginner to advanced strategies.",
      icon: <BookOpen className="h-8 w-8 text-trading-gold" />,
      price: "$297 one-time"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Trading Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with free signals or upgrade to premium for advanced strategies and personal mentorship
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? "border-trading-gold shadow-trading-gold scale-105" 
                  : "border-border"
              } hover:shadow-trading transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-gradient-gold" : "bg-secondary"
                }`}>
                  <div className={plan.popular ? "text-primary-foreground" : "text-trading-gold"}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-trading-blue mb-2">{plan.price}</div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-trading-success mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === "default" 
                      ? "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold" 
                      : ""
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Additional Services
          </h3>
          <p className="text-lg text-muted-foreground">
            Enhance your trading journey with our specialized services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-trading transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Badge variant="outline" className="text-trading-gold border-trading-gold">
                  {service.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Trading Success?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of traders already earning with Agatha's proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-trading-blue hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;