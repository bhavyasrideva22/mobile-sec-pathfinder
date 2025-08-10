import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const AssessmentProgress = ({ currentStep, totalSteps, stepTitles }: AssessmentProgressProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-primary">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>
      
      <div className="assessment-progress">
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      <div className="flex justify-between text-xs text-muted-foreground">
        {stepTitles.map((title, index) => (
          <span 
            key={index}
            className={`${index < currentStep ? 'text-primary font-medium' : ''}`}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
};