import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Shield, Brain, Target, Users, TrendingUp, Clock, Award, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Science-Backed Career Assessment
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
              Mobile Security Specialist
              <br />
              Career Assessment
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover if mobile security is your ideal career path with our comprehensive WISCAR framework analysis. 
              Get personalized insights, technical readiness evaluation, and tailored learning recommendations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => navigate('/assessment')}
                className="px-8 py-4 text-lg"
              >
                Start Assessment
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>20-25 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain size={16} />
                <span>Psychometrically validated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} />
                <span>Industry expert designed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive analysis across multiple dimensions of career readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-medium hover-lift">
              <CardHeader className="text-center">
                <Users className="mx-auto text-primary mb-2" size={40} />
                <CardTitle>Personality Assessment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Evaluate your personality traits, work preferences, and motivational alignment with mobile security roles.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover-lift">
              <CardHeader className="text-center">
                <Brain className="mx-auto text-accent mb-2" size={40} />
                <CardTitle>Technical Readiness</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Assess your current knowledge of security fundamentals, mobile technologies, and problem-solving abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover-lift">
              <CardHeader className="text-center">
                <Target className="mx-auto text-success mb-2" size={40} />
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Receive personalized career recommendations, learning pathways, and specific next steps for your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover-lift">
              <CardHeader className="text-center">
                <Shield className="mx-auto text-primary mb-2" size={40} />
                <CardTitle>WISCAR Framework</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Analysis across Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover-lift">
              <CardHeader className="text-center">
                <TrendingUp className="mx-auto text-accent mb-2" size={40} />
                <CardTitle>Skill Mapping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Identify your strengths and gaps compared to industry requirements for mobile security specialists.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover-lift">
              <CardHeader className="text-center">
                <Award className="mx-auto text-success mb-2" size={40} />
                <CardTitle>Learning Path</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Get a customized roadmap with specific courses, certifications, and resources for your skill level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Outcomes Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              Mobile security specialists are in high demand across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 border rounded-lg hover-lift">
                <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Mobile Security Analyst</h3>
                  <p className="text-sm text-muted-foreground">Identify and mitigate mobile app vulnerabilities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border rounded-lg hover-lift">
                <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">App Security Engineer</h3>
                  <p className="text-sm text-muted-foreground">Build secure mobile applications from the ground up</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border rounded-lg hover-lift">
                <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Mobile Penetration Tester</h3>
                  <p className="text-sm text-muted-foreground">Conduct ethical hacking to uncover security weaknesses</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 border rounded-lg hover-lift">
                <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Security Consultant</h3>
                  <p className="text-sm text-muted-foreground">Advise organizations on mobile risk management</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border rounded-lg hover-lift">
                <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Incident Response Specialist</h3>
                  <p className="text-sm text-muted-foreground">Handle mobile security breaches and remediation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border rounded-lg hover-lift">
                <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Mobile Forensics Analyst</h3>
                  <p className="text-sm text-muted-foreground">Investigate mobile device security incidents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="shadow-strong border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Path?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take our comprehensive assessment and get personalized insights about your mobile security career potential.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => navigate('/assessment')}
                className="px-12 py-4 text-lg"
              >
                Start Your Assessment
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Free • No registration required • Instant results
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
