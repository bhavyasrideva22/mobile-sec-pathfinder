import { Question } from "@/types/assessment";

export const assessmentQuestions: Question[] = [
  // Psychometric - Interest Scale
  {
    id: "interest-1",
    text: "I find myself naturally curious about how mobile apps handle sensitive data",
    type: "likert",
    category: "psychometric",
    subcategory: "interest",
    weight: 1.2
  },
  {
    id: "interest-2", 
    text: "I enjoy solving complex puzzles and finding vulnerabilities in systems",
    type: "likert",
    category: "psychometric",
    subcategory: "interest"
  },
  {
    id: "interest-3",
    text: "The idea of protecting people's personal information motivates me",
    type: "likert",
    category: "psychometric", 
    subcategory: "interest"
  },
  {
    id: "interest-4",
    text: "I stay updated on the latest cybersecurity threats and news",
    type: "likert",
    category: "psychometric",
    subcategory: "interest"
  },
  {
    id: "interest-5",
    text: "I would enjoy conducting ethical hacking on mobile applications",
    type: "likert",
    category: "psychometric",
    subcategory: "interest"
  },

  // Psychometric - Personality (Big 5 Traits)
  {
    id: "personality-1",
    text: "I pay close attention to details and rarely miss important information",
    type: "likert",
    category: "psychometric",
    subcategory: "conscientiousness"
  },
  {
    id: "personality-2",
    text: "I remain calm and focused under pressure or tight deadlines",
    type: "likert",
    category: "psychometric",
    subcategory: "neuroticism"
  },
  {
    id: "personality-3",
    text: "I enjoy learning new technologies and methodologies",
    type: "likert",
    category: "psychometric",
    subcategory: "openness"
  },
  {
    id: "personality-4",
    text: "I prefer working independently on complex analytical tasks",
    type: "likert",
    category: "psychometric",
    subcategory: "extraversion"
  },
  {
    id: "personality-5",
    text: "I persist through challenging problems even when progress is slow",
    type: "likert",
    category: "psychometric",
    subcategory: "grit"
  },

  // Technical Prerequisites
  {
    id: "tech-1",
    text: "Which of the following best describes OAuth 2.0?",
    type: "multiple-choice",
    category: "technical",
    subcategory: "security-fundamentals",
    options: [
      "A password hashing algorithm",
      "An authorization framework for secure API access",
      "A mobile app development framework", 
      "A network protocol for file transfer"
    ]
  },
  {
    id: "tech-2",
    text: "What does HTTPS primarily provide?",
    type: "multiple-choice",
    category: "technical",
    subcategory: "networking",
    options: [
      "Faster data transfer speeds",
      "Encryption and authentication of web traffic",
      "Automatic error correction",
      "Load balancing across servers"
    ]
  },
  {
    id: "tech-3",
    text: "In mobile app security, what is 'certificate pinning'?",
    type: "multiple-choice",
    category: "technical",
    subcategory: "mobile-security",
    options: [
      "Storing certificates locally on the device",
      "A technique to prevent man-in-the-middle attacks",
      "A method to speed up SSL handshakes",
      "A way to compress certificate data"
    ]
  },
  {
    id: "tech-4",
    text: "Which tool is commonly used for mobile app penetration testing?",
    type: "multiple-choice",
    category: "technical",
    subcategory: "tools",
    options: [
      "Photoshop",
      "OWASP ZAP",
      "Microsoft Excel",
      "Adobe Reader"
    ]
  },
  {
    id: "tech-5",
    text: "What is the OWASP Mobile Top 10?",
    type: "multiple-choice", 
    category: "technical",
    subcategory: "standards",
    options: [
      "A list of the top 10 mobile operating systems",
      "Ten most common mobile app security vulnerabilities",
      "Best practices for mobile UI design",
      "A ranking of mobile development frameworks"
    ]
  },

  // Aptitude - Logical Reasoning
  {
    id: "aptitude-1",
    text: "If A → B and B → C, and A is true, what can we conclude about C?",
    type: "multiple-choice",
    category: "aptitude",
    subcategory: "logical-reasoning",
    options: [
      "C is true",
      "C is false", 
      "C might be true or false",
      "We cannot determine anything about C"
    ]
  },
  {
    id: "aptitude-2",
    text: "In a security log, you notice: Event A always occurs before Event B. Event B always occurs before Event C. If Event C occurred at 3:00 PM, what can you conclude?",
    type: "multiple-choice",
    category: "aptitude",
    subcategory: "pattern-recognition",
    options: [
      "Events A and B occurred before 3:00 PM",
      "Events A and B occurred after 3:00 PM",
      "Only Event A occurred before 3:00 PM",
      "We cannot determine when A and B occurred"
    ]
  },
  {
    id: "aptitude-3",
    text: "A mobile app processes 1000 authentication requests per minute. If 2% fail due to security checks, how many successful authentications occur per hour?",
    type: "multiple-choice",
    category: "aptitude", 
    subcategory: "numerical",
    options: [
      "58,800",
      "60,000",
      "58,000",
      "59,200"
    ]
  },

  // Scenario-based Questions
  {
    id: "scenario-1",
    text: "You discover a mobile app is storing user passwords in plain text. What should be your immediate priority?",
    type: "multiple-choice",
    category: "technical",
    subcategory: "incident-response",
    options: [
      "Document the finding and continue testing",
      "Immediately report this critical vulnerability to stakeholders",
      "Try to exploit the vulnerability further",
      "Ignore it since it's not your responsibility"
    ]
  },
  {
    id: "scenario-2",
    text: "During a penetration test, you find a way to bypass mobile app authentication. How do you proceed?",
    type: "multiple-choice",
    category: "technical",
    subcategory: "ethics",
    options: [
      "Use this access to explore all app functionalities",
      "Document the vulnerability with proof-of-concept and stop",
      "Try to access other users' accounts",
      "Report it anonymously online"
    ]
  }
];

export const stepTitles = [
  "Introduction",
  "Interests & Motivation", 
  "Personality & Work Style",
  "Technical Knowledge",
  "Problem Solving",
  "Results"
];