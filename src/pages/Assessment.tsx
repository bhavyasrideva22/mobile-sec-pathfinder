import { useState } from "react";
import { AssessmentProgress } from "@/components/AssessmentProgress";
import { QuestionCard } from "@/components/QuestionCard";
import { useAssessment } from "@/hooks/useAssessment";
import { assessmentQuestions, stepTitles } from "@/data/questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Brain, Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Assessment() {
  const navigate = useNavigate();
  const { currentStep, answers, addAnswer, nextStep, previousStep, completeAssessment } = useAssessment();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const totalSteps = 6;
  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id);

  const handleAnswer = (answer: any) => {
    addAnswer(answer);
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      
      // Update step based on question category
      const nextQuestion = assessmentQuestions[currentQuestionIndex + 1];
      if (nextQuestion) {
        const stepMap: Record<string, number> = {
          'interest': 2,
          'conscientiousness': 3,
          'neuroticism': 3,
          'openness': 3,
          'extraversion': 3,
          'grit': 3,
          'security-fundamentals': 4,
          'networking': 4,
          'mobile-security': 4,
          'tools': 4,
          'standards': 4,
          'logical-reasoning': 5,
          'pattern-recognition': 5,
          'numerical': 5,
          'incident-response': 5,
          'ethics': 5
        };
        
        const newStep = stepMap[nextQuestion.subcategory || ''] || currentStep;
        if (newStep !== currentStep) {
          nextStep();
        }
      }
    } else {
      // Complete assessment
      completeAssessment();
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const renderIntroduction = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="shadow-medium">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl gradient-text">
            Mobile Security Specialist Assessment
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Discover if mobile security is your ideal career path
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Shield className="text-primary" size={24} />
                What You'll Discover
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Your personality fit for mobile security roles</li>
                <li>• Current technical readiness level</li>
                <li>• Personalized career recommendations</li>
                <li>• Specific learning pathway guidance</li>
                <li>• WISCAR framework analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="text-accent" size={24} />
                Career Opportunities
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mobile Security Analyst</li>
                <li>• App Security Engineer</li>
                <li>• Mobile Penetration Tester</li>
                <li>• Security Consultant</li>
                <li>• Incident Response Specialist</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Brain className="text-primary" size={20} />
              Assessment Overview
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="text-accent" size={16} />
                <span>Psychometric Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="text-primary" size={16} />
                <span>Technical Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-success" size={16} />
                <span>Career Guidance</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-3">
              Duration: 20-25 minutes | Questions: {assessmentQuestions.length} | Science-backed analysis
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                nextStep();
                setCurrentQuestionIndex(0);
              }}
              className="px-8 py-3"
            >
              Start Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto">
          <AssessmentProgress 
            currentStep={currentStep} 
            totalSteps={totalSteps} 
            stepTitles={stepTitles} 
          />
          <div className="mt-8">
            {renderIntroduction()}
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto">
        <AssessmentProgress 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
          stepTitles={stepTitles} 
        />
        
        <div className="mt-8">
          <QuestionCard
            question={currentQuestion}
            currentAnswer={currentAnswer}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            showPrevious={currentQuestionIndex > 0}
            isLastQuestion={currentQuestionIndex === assessmentQuestions.length - 1}
          />
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
        </div>
      </div>
    </div>
  );
}