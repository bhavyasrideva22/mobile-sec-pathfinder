import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WISCARChart } from "@/components/WISCARChart";
import { Progress } from "@/components/ui/progress";
import { useAssessment } from "@/hooks/useAssessment";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Target,
  ArrowRight,
  Award,
  Brain
} from "lucide-react";

export default function Results() {
  const navigate = useNavigate();
  const { result, calculateResults } = useAssessment();
  const [displayResult, setDisplayResult] = useState(result);

  useEffect(() => {
    if (!result) {
      const calculatedResult = calculateResults();
      setDisplayResult(calculatedResult);
    }
  }, [result, calculateResults]);

  if (!displayResult) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No assessment data found</h2>
          <Button onClick={() => navigate('/')}>Take Assessment</Button>
        </div>
      </div>
    );
  }

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'pursue': return <CheckCircle className="text-success" size={24} />;
      case 'maybe': return <AlertCircle className="text-warning" size={24} />;
      default: return <XCircle className="text-destructive" size={24} />;
    }
  };

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'pursue': return 'bg-success/10 border-success text-success';
      case 'maybe': return 'bg-warning/10 border-warning text-warning';
      default: return 'bg-destructive/10 border-destructive text-destructive';
    }
  };

  const getRecommendationText = (rec: string) => {
    switch (rec) {
      case 'pursue': return 'Strongly Recommended';
      case 'maybe': return 'Conditionally Recommended';
      default: return 'Consider Alternatives';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl space-y-8">
        
        {/* Header */}
        <Card className="shadow-strong cyber-glow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {getRecommendationIcon(displayResult.recommendation)}
            </div>
            <CardTitle className="text-3xl gradient-text">
              Your Mobile Security Assessment Results
            </CardTitle>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${getRecommendationColor(displayResult.recommendation)}`}>
              <span className="font-semibold">
                {getRecommendationText(displayResult.recommendation)}
              </span>
            </div>
          </CardHeader>
        </Card>

        {/* Score Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-medium hover-lift">
            <CardHeader className="text-center">
              <Brain className="mx-auto text-primary mb-2" size={32} />
              <CardTitle>Psychological Fit</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {displayResult.psychometricScore}%
              </div>
              <Progress value={displayResult.psychometricScore} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Personality & motivation alignment
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover-lift">
            <CardHeader className="text-center">
              <Award className="mx-auto text-accent mb-2" size={32} />
              <CardTitle>Technical Readiness</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {displayResult.technicalScore}%
              </div>
              <Progress value={displayResult.technicalScore} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Current knowledge & skills
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover-lift">
            <CardHeader className="text-center">
              <TrendingUp className="mx-auto text-success mb-2" size={32} />
              <CardTitle>Overall Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-success mb-2">
                {Math.round(displayResult.overallScore)}%
              </div>
              <Progress value={displayResult.overallScore} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Combined readiness rating
              </p>
            </CardContent>
          </Card>
        </div>

        {/* WISCAR Analysis */}
        <WISCARChart scores={displayResult.wiscarScores} />

        {/* Insights */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="text-primary" size={24} />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {displayResult.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career Matches */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-accent" size={24} />
              Career Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {displayResult.careerMatches.map((career, index) => (
                <div key={index} className="border rounded-lg p-4 hover-lift">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{career.title}</h3>
                    <Badge variant="secondary">
                      {career.matchPercentage}% match
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{career.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {career.keySkills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-primary" size={24} />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {displayResult.nextSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover-lift">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="flex-1">{step}</p>
                  <ArrowRight className="text-muted-foreground" size={16} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={() => navigate('/')}>
            Take Assessment Again
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.print()}>
            Save Results
          </Button>
        </div>
      </div>
    </div>
  );
}