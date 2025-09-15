import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Download,
  Award,
  Target,
  BarChart3,
  TrendingUp,
  Shield
} from "lucide-react";

const EducationPage = () => {
  const courses = [
    {
      title: "Binary Options Fundamentals",
      description: "Master the basics of binary options trading with this comprehensive beginner course.",
      level: "Beginner",
      duration: "4 hours",
      lessons: 15,
      students: 2450,
      rating: 4.9,
      price: "Free",
      image: "/api/placeholder/400/300",
      topics: ["Trading Basics", "Platform Navigation", "Order Types", "Risk Management"],
      progress: 0
    },
    {
      title: "Advanced Technical Analysis",
      description: "Learn advanced chart patterns, indicators, and analysis techniques used by professional traders.",
      level: "Advanced",
      duration: "8 hours",
      lessons: 25,
      students: 1320,
      rating: 4.8,
      price: "$197",
      image: "/api/placeholder/400/300",
      topics: ["Chart Patterns", "Advanced Indicators", "Market Structure", "Price Action"],
      progress: 0
    },
    {
      title: "Psychology of Successful Trading",
      description: "Develop the mental discipline and emotional control needed for consistent trading success.",
      level: "Intermediate",
      duration: "6 hours",
      lessons: 20,
      students: 1850,
      rating: 4.9,
      price: "$147",
      image: "/api/placeholder/400/300",
      topics: ["Trading Psychology", "Emotional Control", "Discipline", "Performance"],
      progress: 35
    },
    {
      title: "Complete Trading Mastery",
      description: "The ultimate course combining all aspects of successful binary options trading.",
      level: "All Levels",
      duration: "16 hours",
      lessons: 45,
      students: 980,
      rating: 5.0,
      price: "$497",
      image: "/api/placeholder/400/300",
      topics: ["Complete Strategy", "Advanced Techniques", "Live Trading", "Mentorship"],
      progress: 0,
      featured: true
    }
  ];

  const resources = [
    {
      title: "Trading Cheat Sheet",
      description: "Quick reference guide with essential trading formulas and indicators.",
      type: "PDF Guide",
      downloads: 15420,
      icon: <Download className="h-6 w-6" />
    },
    {
      title: "Market Analysis Webinar",
      description: "Live webinar covering current market conditions and trading opportunities.",
      type: "Live Webinar",
      downloads: 3250,
      icon: <Play className="h-6 w-6" />
    },
    {
      title: "Risk Calculator Tool",
      description: "Calculate position sizes and risk ratios for optimal money management.",
      type: "Calculator",
      downloads: 8900,
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Trading Journal Template",
      description: "Professional trading journal template to track your performance.",
      type: "Excel Template",
      downloads: 12100,
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "What is binary options trading?",
      answer: "Binary options trading is a financial instrument where you predict whether an asset's price will be above or below a certain level at expiration. It's called 'binary' because there are only two possible outcomes."
    },
    {
      question: "How much money do I need to start trading?",
      answer: "You can start with as little as $10-50 on most platforms. However, I recommend starting with at least $250-500 to have proper risk management and meaningful returns."
    },
    {
      question: "What is your average win rate?",
      answer: "My documented win rate is consistently above 95% across all signal categories. This is achieved through rigorous analysis, proper risk management, and selective trade selection."
    },
    {
      question: "Do you offer refunds on courses?",
      answer: "Yes, all courses come with a 30-day money-back guarantee. If you're not satisfied with the content, we'll provide a full refund, no questions asked."
    },
    {
      question: "How long does it take to become profitable?",
      answer: "With dedication and proper education, most students start seeing consistent profits within 2-3 months. However, mastery takes 6-12 months of consistent practice and learning."
    },
    {
      question: "What platforms do you recommend?",
      answer: "I primarily use and recommend Quotex for its user-friendly interface, competitive payouts, and reliable execution. I also provide strategies for IQ Option and Pocket Option."
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
              Master Binary Options <span className="text-trading-gold">Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive education from beginner basics to advanced strategies. 
              Learn from a trader with 95%+ win rate and transform your trading journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                <Play className="mr-2 h-5 w-5" />
                Start Free Course
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse All Courses
              </Button>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Trading Courses
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-trading transition-all duration-300 ${
                    course.featured ? "border-trading-gold shadow-trading-gold" : ""
                  }`}
                >
                  {course.featured && (
                    <Badge className="absolute -top-3 left-4 bg-gradient-gold text-primary-foreground z-10">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      variant="outline" 
                      className="absolute top-4 right-4 bg-white/90"
                    >
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold leading-tight">
                        {course.title}
                      </CardTitle>
                      <div className="text-2xl font-bold text-trading-gold">
                        {course.price}
                      </div>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {course.rating} rating
                      </div>
                    </div>

                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        course.featured 
                          ? "bg-gradient-gold text-primary-foreground hover:opacity-90" 
                          : ""
                      }`}
                    >
                      {course.price === "Free" ? "Start Learning" : "Enroll Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Free Resources */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Free Trading Resources
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="text-center hover:shadow-trading transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {resource.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                    <Badge variant="outline" className="mb-4 text-trading-gold border-trading-gold">
                      {resource.type}
                    </Badge>
                    <div className="text-xs text-muted-foreground mb-4">
                      {resource.downloads.toLocaleString()} downloads
                    </div>
                    <Button variant="outline" className="w-full">
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
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

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8 md:p-12">
                <Award className="h-16 w-16 text-trading-gold mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Master Binary Options Trading?
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of successful traders who have transformed their financial future with our proven education system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-trading-blue hover:bg-gray-100">
                    <Play className="mr-2 h-5 w-5" />
                    Start Free Course
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Shield className="mr-2 h-5 w-5" />
                    30-Day Money Back Guarantee
                  </Button>
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

export default EducationPage;