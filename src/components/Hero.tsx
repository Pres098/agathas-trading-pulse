import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, TrendingUp, Users, DollarSign, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to our trading signals list.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-trading-gold mr-2" />
              <span className="text-white text-sm font-medium">Trusted by 3,800+ Traders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Binary Trading with
              <span className="text-trading-gold block">Agatha's Signals</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of successful traders earning consistent profits with my proven binary options strategies. 
              Get real-time signals, expert analysis, and step-by-step guidance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trading-gold">95%+</div>
                <div className="text-white/80 text-sm">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trading-gold">3.8K+</div>
                <div className="text-white/80 text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trading-gold">$50K+</div>
                <div className="text-white/80 text-sm">Monthly Profits</div>
              </div>
            </div>

            {/* Email Signup */}
            <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="email"
                placeholder="Enter your email for free signals"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold px-8"
              >
                Get Free Signals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-white/70 text-sm">
              No spam. Get instant access to profitable trading signals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-white text-trading-blue hover:bg-white/90 shadow-trading">
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Trading Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover:text-white"
              >
                Watch Success Stories
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-trading">
              <div className="absolute -top-4 -right-4 bg-gradient-gold rounded-full p-4 shadow-trading-gold">
                <DollarSign className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Today's Performance</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="text-white">EUR/USD</span>
                  <div className="flex items-center text-trading-success">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="font-bold">+$2,450</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="text-white">GBP/JPY</span>
                  <div className="flex items-center text-trading-success">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="font-bold">+$1,875</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="text-white">USD/CAD</span>
                  <div className="flex items-center text-trading-success">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="font-bold">+$3,120</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-trading-success/20 rounded-lg border border-trading-success/30">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Total Today:</span>
                  <span className="text-2xl font-bold text-trading-success">+$7,445</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-full p-6 shadow-trading">
              <Users className="h-6 w-6 text-trading-gold" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-gradient-gold rounded-full p-6 shadow-trading-gold">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;