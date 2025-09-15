import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2,
  Settings,
  Minimize2,
  Maximize2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load API key from localStorage on mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('openrouter-api-key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          content: "Hi! I'm Agatha's AI assistant. I can help you with trading questions, market analysis, and binary options strategies. What would you like to know?",
          role: 'assistant',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openrouter-api-key', apiKey.trim());
      setShowSettings(false);
      toast({
        title: "API Key Saved",
        description: "You can now use the AI chat assistant.",
      });
    }
  };

  const sendMessage = async (userMessage: string) => {
    if (!apiKey.trim()) {
      setShowSettings(true);
      toast({
        title: "API Key Required",
        description: "Please enter your OpenRouter API key to use the AI chat.",
        variant: "destructive"
      });
      return;
    }

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: userMessage,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Agatha Signals Trading Assistant'
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3.5-sonnet',
          messages: [
            {
              role: 'system',
              content: `You are Agatha's AI trading assistant. You help users with binary options trading, market analysis, and trading strategies. 

Key information about Agatha:
- She's a successful binary options trader
- She provides FREE trading signals and education
- She has a YouTube channel with trading tutorials
- She focuses on QUOTEX and Pocket Option platforms
- All her services are completely FREE - no paid plans

Guidelines for responses:
- Be helpful and knowledgeable about trading
- Focus on education and risk management
- Always mention that Agatha's signals and services are FREE
- Encourage users to join her YouTube channel and Telegram community
- Keep responses concise but informative
- Always emphasize proper risk management and that trading involves risk`
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newAiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI response. Please check your API key and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message.trim());
      setMessage("");
    }
  };

  const quickQuestions = [
    "How do I get started with binary options?",
    "What are Agatha's free signals?",
    "How to manage trading risk?",
    "Best time to trade binary options?",
    "How to join the free community?"
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-trading-gold rounded-full w-16 h-16 p-0"
        >
          <Bot className="h-8 w-8" />
        </Button>
        <Badge className="absolute -top-2 -right-2 bg-trading-success text-white animate-pulse">
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Card 
        className={`w-96 shadow-trading-gold border-trading-gold transition-all duration-300 ${
          isMinimized ? "h-16" : "h-[500px]"
        }`}
      >
        <CardHeader className="p-4 bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Agatha's AI Assistant</CardTitle>
                <div className="flex items-center space-x-1 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>Ready to help</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <Settings className="h-4 w-4" />
              </Button>
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
          <CardContent className="p-0 h-[436px] flex flex-col">
            {showSettings && (
              <div className="p-4 border-b bg-secondary/50">
                <div className="space-y-2">
                  <label className="text-sm font-medium">OpenRouter API Key:</label>
                  <Input
                    type="password"
                    placeholder="sk-or-v1-..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="text-xs"
                  />
                  <div className="flex space-x-2">
                    <Button size="sm" onClick={saveApiKey}>
                      Save Key
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setShowSettings(false)}>
                      Cancel
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your API key is stored locally and never shared.
                  </p>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-gold text-primary-foreground'
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 bg-trading-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-trading-gold rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="p-4 border-t">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="space-y-1">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs h-auto py-2"
                      onClick={() => sendMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me about trading..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="sm"
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90"
                  disabled={isLoading || !message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default AIChat;