export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  options?: string[];
  category: 'psychometric' | 'technical' | 'aptitude';
  subcategory?: string;
  weight?: number;
}

export interface Answer {
  questionId: string;
  value: number | string;
  timestamp: Date;
}

export interface AssessmentResult {
  psychometricScore: number;
  technicalScore: number;
  overallScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realworld: number;
  };
  recommendation: 'pursue' | 'maybe' | 'consider-alternatives';
  insights: string[];
  nextSteps: string[];
  careerMatches: CareerMatch[];
}

export interface CareerMatch {
  title: string;
  matchPercentage: number;
  description: string;
  keySkills: string[];
}

export interface AssessmentState {
  currentStep: number;
  answers: Answer[];
  isComplete: boolean;
  result?: AssessmentResult;
}