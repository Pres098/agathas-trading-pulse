import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Day Trader",
      location: "Miami, FL",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Agatha's free signals have been incredibly accurate. I've been following her for 6 months and my trading has improved dramatically. The best part? It's completely free with no hidden costs!",
      profit: "+$18,500",
      timeframe: "6 months"
    },
    {
      name: "Sarah Chen",
      role: "Financial Analyst",
      location: "New York, NY",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Thanks to Agatha's free educational content and signals, I finally understand binary options trading. Her YouTube videos are pure gold and the Telegram community is so supportive.",
      profit: "+$25,000",
      timeframe: "8 months"
    },
    {
      name: "David Thompson",
      role: "Forex Trader",
      location: "London, UK",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "I was skeptical about free signals, but Agatha proved me wrong. Her transparency and genuine desire to help traders succeed is remarkable. Highly recommend joining her free community!",
      profit: "+$42,000",
      timeframe: "1 year"
    },
    {
      name: "Maria Garcia",
      role: "Part-time Trader",
      location: "Barcelona, Spain",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Working full-time and trading on the side seemed impossible until I found Agatha's free signals. Now I make more from trading than my day job - all completely free!",
      profit: "+$15,200",
      timeframe: "4 months"
    },
    {
      name: "James Wilson",
      role: "Retired Investor",
      location: "Toronto, Canada",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "At 58, I thought it was too late to learn trading. Agatha's free educational content and signals proved me wrong. Best decision ever - no costs involved!",
      profit: "+$32,800",
      timeframe: "10 months"
    },
    {
      name: "Lisa Park",
      role: "Student Trader",
      location: "Seoul, South Korea",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "As a college student, I needed extra income. Agatha's free signals got me started, and the community support is amazing. All free with no hidden fees!",
      profit: "+$8,500",
      timeframe: "3 months"
    }
  ];

  const stats = [
    { value: "3,800+", label: "Happy Traders" },
    { value: "95%+", label: "Win Rate" },
    { value: "$2.5M+", label: "Total Profits Generated" },
    { value: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Traders Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real people. See how Agatha's free trading signals have transformed lives and portfolios.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-trading-blue mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-trading transition-all duration-300 border-border"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-trading-gold opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-trading-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Profit Stats */}
                <div className="flex justify-between items-center mb-6 p-3 bg-trading-success/10 rounded-lg border border-trading-success/20">
                  <div>
                    <div className="text-sm text-muted-foreground">Profit</div>
                    <div className="font-bold text-trading-success text-lg">
                      {testimonial.profit}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Timeframe</div>
                    <div className="font-medium text-foreground">
                      {testimonial.timeframe}
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-trading-blue text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Start your trading journey today and become our next success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-trading-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;