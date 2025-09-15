import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Clock,
  CheckCircle,
  Minimize2,
  Maximize2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [chatStarted, setChatStarted] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const { toast } = useToast();

  // Simulate online/offline status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% online
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    setChatStarted(true);
    toast({
      title: "Chat Started!",
      description: "Agatha will respond within a few minutes.",
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent. Agatha will reply shortly.",
      });
      setMessage("");
    }
  };

  const quickMessages = [
    "I'm interested in premium signals",
    "How do I get started?",
    "What's your win rate?",
    "Do you offer mentorship?",
    "Can you help with my strategy?"
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold rounded-full w-16 h-16 p-0 animate-pulse"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        <Badge className="absolute -top-2 -left-2 bg-trading-success text-white animate-bounce">
          Online
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card 
        className={`w-80 shadow-trading-gold border-trading-gold transition-all duration-300 ${
          isMinimized ? "h-16" : "h-96"
        }`}
      >
        <CardHeader className="p-4 bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Live Chat Support</CardTitle>
                <div className="flex items-center space-x-1 text-xs">
                  <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span>{isOnline ? 'Online' : 'Offline'}</span>
                  {isOnline && (
                    <>
                      <Clock className="h-3 w-3 ml-1" />
                      <span>Responds in ~2 min</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-4 h-80 flex flex-col">
            {!chatStarted ? (
              <form onSubmit={handleStartChat} className="space-y-4 flex-1 flex flex-col justify-center">
                <div>
                  <h3 className="font-semibold mb-2">Start a conversation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant answers to your trading questions
                  </p>
                </div>
                
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                  disabled={!isOnline}
                >
                  {isOnline ? 'Start Chat' : 'Currently Offline'}
                </Button>
              </form>
            ) : (
              <div className="flex-1 flex flex-col">
                {/* Chat Messages Area */}
                <div className="flex-1 mb-4 space-y-3 overflow-y-auto">
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-trading-success" />
                      <span className="font-medium text-sm">Agatha Trade</span>
                      <span className="text-xs text-muted-foreground">now</span>
                    </div>
                    <p className="text-sm">
                      Hi {name}! 👋 Thanks for reaching out. I'm here to help with your trading questions. What would you like to know?
                    </p>
                  </div>
                  
                  {/* Quick Replies */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                    <div className="space-y-1">
                      {quickMessages.map((msg, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start text-xs h-auto py-2"
                          onClick={() => setMessage(msg)}
                        >
                          {msg}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    size="sm"
                    className="bg-gradient-gold text-primary-foreground hover:opacity-90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default LiveChat;