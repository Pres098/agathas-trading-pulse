import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  Users, 
  Star, 
  Play, 
  CheckCircle,
  BarChart3,
  Target,
  BookOpen,
  Calendar
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-trading-gold" />,
      title: "95%+ Win Rate",
      description: "Consistently maintained across all signal categories"
    },
    {
      icon: <Users className="h-8 w-8 text-trading-gold" />,
      title: "3,800+ Students",
      description: "Successful traders in our global community"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-trading-gold" />,
      title: "$2.5M+ Generated",
      description: "Total profits generated for our traders"
    },
    {
      icon: <Star className="h-8 w-8 text-trading-gold" />,
      title: "4.9/5 Rating",
      description: "Average satisfaction rating from our traders"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Started Trading Journey",
      description: "Began with $500 and lost it all in the first month. Used this as motivation to master the craft."
    },
    {
      year: "2020",
      title: "First Consistent Profits",
      description: "Developed winning strategy after 18 months of intensive study and practice."
    },
    {
      year: "2021",
      title: "Launched YouTube Channel",
      description: "Started sharing strategies and live trading sessions. Gained 1,000 subscribers in first month."
    },
    {
      year: "2022",
      title: "Premium Signal Service",
      description: "Launched professional signal service after countless requests from successful followers."
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Featured in major trading publications and reached 10,000+ successful students."
    },
    {
      year: "2024",
      title: "Advanced Mentorship",
      description: "Launched VIP mentorship program with personalized 1-on-1 coaching."
    }
  ];

  const skills = [
    { name: "Technical Analysis", level: 98 },
    { name: "Risk Management", level: 95 },
    { name: "Market Psychology", level: 92 },
    { name: "Trading Strategies", level: 96 },
    { name: "Mentoring & Teaching", level: 94 }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge className="mb-4 bg-trading-gold/10 text-trading-gold border-trading-gold">
              Professional Binary Options Trader
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Jenny Adams
              <span className="text-trading-gold block">Your Trading Mentor</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              From losing my first $500 to generating over $2.5 million in profits for my students, 
              my journey in binary options trading has been one of persistence, learning, and ultimately, success.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Today, I help traders worldwide achieve financial freedom through proven strategies, 
              disciplined risk management, and continuous education. My mission is simple: 
              transform your trading from gambling to a profitable business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold">
                <Play className="mr-2 h-5 w-5" />
                Watch My Story
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2 h-5 w-5" />
                Free Trading Guide
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-trading">
              <h3 className="text-2xl font-bold mb-6">Trading Statistics</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-trading-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Current Month Profit:</span>
                  <span className="text-2xl font-bold text-trading-gold">+$47,230</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-trading">
              <TrendingUp className="h-8 w-8 text-trading-success" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-gold rounded-full p-4 shadow-trading-gold">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Proven Track Record
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-trading transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-trading-blue mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            My Trading Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-gradient-gold text-primary-foreground font-bold py-2 px-4 rounded-full">
                    {milestone.year}
                  </div>
                </div>
                
                <div className="ml-6 flex-grow">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-trading transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              My Trading Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Success in trading isn't about luck—it's about discipline, strategy, and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Precision</h3>
              <p className="text-muted-foreground">
                Every signal is based on thorough analysis and proven indicators. 
                No guesswork, only calculated decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Consistency</h3>
              <p className="text-muted-foreground">
                Small, consistent profits compound into significant wealth. 
                We focus on sustainable growth, not get-rich-quick schemes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Education</h3>
              <p className="text-muted-foreground">
                I don't just give you signals—I teach you to understand the market 
                so you can become an independent, successful trader.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Trading?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have already transformed their financial future with my guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;