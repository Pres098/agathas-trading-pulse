import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    serviceType: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "", serviceType: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-trading-gold" />,
      title: "Email Us",
      info: "contact@agathatrade.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-trading-gold" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri, 9 AM - 6 PM EST"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-trading-gold" />,
      title: "Live Chat",
      info: "Available 24/7",
      description: "Instant support for urgent matters"
    }
  ];

  const services = [
    {
      title: "Free Consultation",
      description: "30-minute strategy consultation to assess your trading goals",
      price: "Free",
      duration: "30 minutes",
      icon: <Users className="h-8 w-8 text-trading-gold" />
    },
    {
      title: "Premium Consultation",
      description: "Comprehensive trading analysis and personalized strategy development",
      price: "$97",
      duration: "60 minutes",
      icon: <TrendingUp className="h-8 w-8 text-trading-gold" />
    },
    {
      title: "VIP Strategy Session",
      description: "Complete trading makeover with ongoing support and custom indicators",
      price: "$297",
      duration: "2 hours + follow-up",
      icon: <CheckCircle className="h-8 w-8 text-trading-gold" />
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 2-4 hours during business hours (9 AM - 6 PM EST). For urgent matters, use our live chat feature for immediate assistance."
    },
    {
      question: "Do you offer phone consultations?",
      answer: "Yes, we offer both phone and video consultations. All premium and VIP consultation packages include your choice of communication method."
    },
    {
      question: "Can you help with specific trading platforms?",
      answer: "Absolutely! I specialize in Quotex, IQ Option, and Pocket Option. I can help you optimize your strategies for your preferred platform."
    },
    {
      question: "Do you provide custom trading strategies?",
      answer: "Yes, as part of our VIP consultation service, I develop custom trading strategies based on your risk tolerance, available capital, and trading goals."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-trading-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your trading to the next level? Let's discuss how I can help you achieve your financial goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-trading">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interest</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="free-signals">Free Signals</option>
                        <option value="premium-signals">Premium Signals</option>
                        <option value="vip-mentorship">VIP Mentorship</option>
                        <option value="consultation">Personal Consultation</option>
                        <option value="education">Trading Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your trading experience and goals..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-trading-gold/10 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-trading-gold font-medium">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-3">
                    <a 
                      href="https://youtube.com/@agathasignals" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action */}
              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-trading-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Book a Call</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Schedule a free 30-minute consultation to discuss your trading goals.
                  </p>
                  <Button className="bg-white text-trading-blue hover:bg-gray-100 w-full">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Consultation Services */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Consultation Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-trading transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-trading-gold">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                    <Button 
                      variant={index === 1 ? "default" : "outline"}
                      className={`w-full ${
                        index === 1 ? "bg-gradient-gold text-primary-foreground hover:opacity-90" : ""
                      }`}
                    >
                      Book Session
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Common Questions
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-trading transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;