import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question, Answer } from "@/types/assessment";
import { useState } from "react";

interface QuestionCardProps {
  question: Question;
  currentAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
  onNext: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
  isLastQuestion?: boolean;
}

export const QuestionCard = ({ 
  question, 
  currentAnswer, 
  onAnswer, 
  onNext, 
  onPrevious, 
  showPrevious = false,
  isLastQuestion = false 
}: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    currentAnswer?.value || (question.type === 'likert' ? 3 : '')
  );

  const handleAnswer = (value: string | number) => {
    setSelectedValue(value);
    onAnswer({
      questionId: question.id,
      value,
      timestamp: new Date()
    });
  };

  const canProceed = selectedValue !== '' && selectedValue !== undefined;

  const renderLikertScale = () => {
    const labels = [
      "Strongly Disagree",
      "Disagree", 
      "Neutral",
      "Agree",
      "Strongly Agree"
    ];

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleAnswer(value)}
              className={`p-4 rounded-lg border-2 transition-all hover-lift ${
                selectedValue === value
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="text-2xl font-bold">{value}</div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2 text-xs text-muted-foreground">
          {labels.map((label, index) => (
            <div key={index} className="text-center">{label}</div>
          ))}
        </div>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    return (
      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all hover-lift ${
              selectedValue === option
                ? 'border-primary bg-primary/10 text-primary font-medium'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedValue === option 
                  ? 'bg-primary border-primary' 
                  : 'border-border'
              }`} />
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-medium hover-lift">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-xl leading-relaxed">
          {question.text}
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          {question.type === 'likert' && "Rate how much you agree with this statement"}
          {question.type === 'multiple-choice' && "Select the best answer"}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {question.type === 'likert' && renderLikertScale()}
        {question.type === 'multiple-choice' && renderMultipleChoice()}
        
        <div className="flex justify-between pt-4">
          {showPrevious ? (
            <Button variant="outline" onClick={onPrevious}>
              Previous
            </Button>
          ) : (
            <div />
          )}
          
          <Button 
            onClick={onNext}
            disabled={!canProceed}
            variant={isLastQuestion ? "success" : "default"}
            className="min-w-24"
          >
            {isLastQuestion ? "Complete" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};