import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TrendingUp, Mail, Phone, MapPin, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Free Signals", href: "/services" },
    { name: "Premium Signals", href: "/services" },
    { name: "VIP Mentorship", href: "/services" },
    { name: "Live Trading", href: "/services" },
    { name: "Trading Course", href: "/education" },
    { name: "Consultation", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Risk Warning", href: "/risk-warning" },
  ];

  return (
    <footer className="bg-trading-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-trading-gold">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">AGATHA TRADE</span>
                <span className="text-xs text-trading-gold font-medium">SIGNALS & EARNINGS</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in binary options trading. Join thousands of successful traders 
              earning consistent profits with proven strategies and expert guidance.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://youtube.com/@agathasignals" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-trading-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-trading-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-trading-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-trading-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-trading-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-trading-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-trading-gold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-trading-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-trading-gold">Stay Updated</h3>
            
            <form onSubmit={handleNewsletterSignup} className="mb-6">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-trading-gold" />
                <span className="text-gray-300 text-sm">contact@agathatrade.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-trading-gold" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-trading-gold" />
                <span className="text-gray-300 text-sm">Global Trading Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="text-sm text-gray-400 hover:text-trading-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="text-sm text-gray-400">
              © 2024 Agatha Trade. All rights reserved.
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-red-400">Risk Warning:</strong> Trading binary options involves substantial risk and may not be suitable for all investors. 
            Past performance does not guarantee future results. Please ensure you fully understand the risks involved and 
            seek independent advice if necessary. Only invest what you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;