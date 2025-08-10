import { useState, useCallback } from 'react';
import { AssessmentState, Answer, AssessmentResult } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';

export const useAssessment = () => {
  const [state, setState] = useState<AssessmentState>({
    currentStep: 1,
    answers: [],
    isComplete: false
  });

  const addAnswer = useCallback((answer: Answer) => {
    setState(prev => ({
      ...prev,
      answers: [...prev.answers.filter(a => a.questionId !== answer.questionId), answer]
    }));
  }, []);

  const nextStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1
    }));
  }, []);

  const previousStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(1, prev.currentStep - 1)
    }));
  }, []);

  const calculateResults = useCallback((): AssessmentResult => {
    const { answers } = state;
    
    // Calculate psychometric scores
    const psychometricAnswers = answers.filter(a => {
      const question = assessmentQuestions.find(q => q.id === a.questionId);
      return question?.category === 'psychometric';
    });
    
    const technicalAnswers = answers.filter(a => {
      const question = assessmentQuestions.find(q => q.id === a.questionId);
      return question?.category === 'technical';
    });
    
    const aptitudeAnswers = answers.filter(a => {
      const question = assessmentQuestions.find(q => q.id === a.questionId);
      return question?.category === 'aptitude';
    });

    // Calculate scores (simplified scoring for demo)
    const psychometricScore = calculateCategoryScore(psychometricAnswers, 'psychometric');
    const technicalScore = calculateCategoryScore(technicalAnswers, 'technical');
    const aptitudeScore = calculateCategoryScore(aptitudeAnswers, 'aptitude');
    
    const overallScore = (psychometricScore + technicalScore + aptitudeScore) / 3;
    
    // Calculate WISCAR scores
    const wiscarScores = {
      will: calculateWiscarComponent(answers, 'will'),
      interest: calculateWiscarComponent(answers, 'interest'), 
      skill: technicalScore,
      cognitive: aptitudeScore,
      ability: calculateWiscarComponent(answers, 'ability'),
      realworld: overallScore
    };

    // Determine recommendation
    let recommendation: 'pursue' | 'maybe' | 'consider-alternatives' = 'maybe';
    if (overallScore >= 75) recommendation = 'pursue';
    else if (overallScore < 50) recommendation = 'consider-alternatives';

    // Generate insights and next steps
    const insights = generateInsights(psychometricScore, technicalScore, aptitudeScore, wiscarScores);
    const nextSteps = generateNextSteps(recommendation, technicalScore, psychometricScore);
    const careerMatches = generateCareerMatches(wiscarScores, technicalScore);

    return {
      psychometricScore,
      technicalScore,
      overallScore,
      wiscarScores,
      recommendation,
      insights,
      nextSteps,
      careerMatches
    };
  }, [state.answers]);

  const completeAssessment = useCallback(() => {
    const result = calculateResults();
    setState(prev => ({
      ...prev,
      isComplete: true,
      result
    }));
  }, [calculateResults]);

  return {
    ...state,
    addAnswer,
    nextStep,
    previousStep,
    completeAssessment,
    calculateResults
  };
};

// Helper functions
const calculateCategoryScore = (answers: Answer[], category: string): number => {
  if (answers.length === 0) return 0;
  
  let totalScore = 0;
  let maxScore = 0;
  
  answers.forEach(answer => {
    const question = assessmentQuestions.find(q => q.id === answer.questionId);
    if (question?.category === category) {
      if (question.type === 'likert') {
        totalScore += Number(answer.value);
        maxScore += 5;
      } else if (question.type === 'multiple-choice') {
        // Simplified: assume correct answers are worth 5 points
        const correctAnswers = ['An authorization framework for secure API access', 'Encryption and authentication of web traffic', 'A technique to prevent man-in-the-middle attacks', 'OWASP ZAP', 'Ten most common mobile app security vulnerabilities', 'C is true', 'Events A and B occurred before 3:00 PM', '58,800', 'Immediately report this critical vulnerability to stakeholders', 'Document the vulnerability with proof-of-concept and stop'];
        const isCorrect = correctAnswers.includes(answer.value as string);
        totalScore += isCorrect ? 5 : 0;
        maxScore += 5;
      }
    }
  });
  
  return maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
};

const calculateWiscarComponent = (answers: Answer[], component: string): number => {
  // Simplified WISCAR calculation based on question categories
  const relevantAnswers = answers.filter(answer => {
    const question = assessmentQuestions.find(q => q.id === answer.questionId);
    return question?.subcategory?.includes(component) || 
           (component === 'interest' && question?.subcategory === 'interest') ||
           (component === 'will' && question?.subcategory === 'grit') ||
           (component === 'ability' && question?.subcategory === 'openness');
  });
  
  return calculateCategoryScore(relevantAnswers, 'any');
};

const generateInsights = (psychometric: number, technical: number, aptitude: number, wiscar: any): string[] => {
  const insights: string[] = [];
  
  if (psychometric >= 80) {
    insights.push("Your personality and motivation strongly align with mobile security roles.");
  } else if (psychometric >= 60) {
    insights.push("You show good personality fit for mobile security with some areas for development.");
  } else {
    insights.push("Consider exploring whether mobile security aligns with your natural interests and work style.");
  }
  
  if (technical >= 80) {
    insights.push("Excellent technical foundation - you're ready for advanced mobile security challenges.");
  } else if (technical >= 60) {
    insights.push("Solid technical knowledge with room to strengthen mobile security specifics.");
  } else {
    insights.push("Focus on building fundamental security and mobile development knowledge first.");
  }
  
  if (aptitude >= 80) {
    insights.push("Strong analytical and problem-solving abilities - ideal for security analysis.");
  }
  
  return insights;
};

const generateNextSteps = (recommendation: string, technical: number, psychometric: number): string[] => {
  const steps: string[] = [];
  
  if (recommendation === 'pursue') {
    steps.push("Start with mobile security fundamentals course");
    steps.push("Practice with OWASP WebGoat mobile labs");
    steps.push("Join mobile security communities and forums");
    steps.push("Consider OSCP Mobile certification pathway");
  } else if (recommendation === 'maybe') {
    if (technical < 60) {
      steps.push("Strengthen programming fundamentals (Python, JavaScript)");
      steps.push("Learn networking and cryptography basics");
    }
    if (psychometric < 60) {
      steps.push("Explore mobile security through online courses to test interest");
      steps.push("Connect with mobile security professionals");
    }
    steps.push("Reassess in 3-6 months after foundational learning");
  } else {
    steps.push("Explore related fields: Network Security, Cloud Security, Software Development");
    steps.push("Consider foundational cybersecurity courses");
    steps.push("Identify specific interests within broader tech security");
  }
  
  return steps;
};

const generateCareerMatches = (wiscar: any, technical: number): any[] => {
  return [
    {
      title: "Mobile Security Analyst",
      matchPercentage: Math.round((wiscar.skill + wiscar.interest) / 2),
      description: "Identify and mitigate mobile app vulnerabilities",
      keySkills: ["Vulnerability Assessment", "Mobile App Testing", "Security Analysis"]
    },
    {
      title: "App Security Engineer", 
      matchPercentage: Math.round((technical + wiscar.cognitive) / 2),
      description: "Build secure mobile applications from the ground up",
      keySkills: ["Secure Coding", "Mobile Development", "Security Architecture"]
    },
    {
      title: "Mobile Penetration Tester",
      matchPercentage: Math.round((wiscar.cognitive + wiscar.will) / 2), 
      description: "Conduct ethical hacking to uncover mobile security weaknesses",
      keySkills: ["Penetration Testing", "Ethical Hacking", "Mobile Forensics"]
    }
  ];
};