import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { generateExamQuestions, saveExamResult } from '../data/programmingLanguages';
import { useNavigate } from 'react-router-dom';

const TOP_LANGUAGES = [
  {
    name: "JavaScript",
    creator: "Brendan Eich",
    year: 1995,
    description: "Multi-paradigm language for web development",
    uses: ["Web Development", "Server-side (Node.js)", "Mobile Apps"],
    advantages: ["Huge ecosystem", "Easy to learn", "Versatile"],
    disadvantages: ["Type coercion issues", "Browser inconsistencies"]
  },
  {
    name: "Python",
    creator: "Guido van Rossum",
    year: 1991,
    description: "High-level language focused on readability",
    uses: ["Data Science", "AI/ML", "Web Backend"],
    advantages: ["Easy syntax", "Large standard library", "Great for beginners"],
    disadvantages: ["Slower execution", "GIL limitations"]
  },
  {
    name: "Java",
    creator: "James Gosling",
    year: 1995,
    description: "Object-oriented language for platform-independent applications",
    uses: ["Enterprise Apps", "Android Development", "Web Applications"],
    advantages: ["Platform independence", "Strong typing", "Large ecosystem"],
    disadvantages: ["Verbose syntax", "Memory intensive"]
  },
  {
    name: "C++",
    creator: "Bjarne Stroustrup",
    year: 1985,
    description: "General-purpose language with low-level memory manipulation",
    uses: ["Game Development", "System Software", "Real-time systems"],
    advantages: ["High performance", "Hardware access", "Large community"],
    disadvantages: ["Complex syntax", "Manual memory management"]
  },
  {
    name: "C",
    creator: "Dennis Ritchie",
    year: 1972,
    description: "Low-level programming language for system development",
    uses: ["Operating Systems", "Embedded Systems", "System Software"],
    advantages: ["High performance", "Direct hardware access", "Portable"],
    disadvantages: ["Manual memory management", "No built-in OOP"]
  },
  {
    name: "HTML",
    creator: "Tim Berners-Lee",
    year: 1993,
    description: "Standard markup language for web documents",
    uses: ["Web Development", "Email Templates", "Documentation"],
    advantages: ["Easy to learn", "Universal support", "SEO friendly"],
    disadvantages: ["Static content only", "Browser inconsistencies"]
  },
  {
    name: "CSS",
    creator: "Håkon Wium Lie",
    year: 1994,
    description: "Style sheet language for web document presentation",
    uses: ["Web Styling", "Animations", "Responsive Design"],
    advantages: ["Separation of concerns", "Reusable styles", "Maintainable"],
    disadvantages: ["Browser inconsistencies", "Cascade complexity"]
  },
  {
    name: "C#",
    creator: "Anders Hejlsberg",
    year: 2000,
    description: "Modern object-oriented language by Microsoft",
    uses: ["Windows Apps", "Game Development", "Enterprise Software"],
    advantages: ["Modern features", "Strong typing", "Rich ecosystem"],
    disadvantages: ["Learning curve", "Memory overhead"]
  }
];

export const TopLanguages = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleTakeExam = (languageName: string) => {
    const questions = generateExamQuestions(languageName.toLowerCase());
    localStorage.setItem('currentExam', JSON.stringify({
      language: languageName,
      questions,
      currentQuestion: 0,
      answers: []
    }));
    
    toast({
      title: "Exam Started",
      description: `Starting ${languageName} examination. Good luck!`,
    });
    
    navigate('/exam');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {TOP_LANGUAGES.map((lang) => (
        <Card key={lang.name} className="language-card">
          <CardHeader>
            <CardTitle className="text-primary">{lang.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Created by {lang.creator} in {lang.year}</p>
            <p className="mb-4 text-foreground">{lang.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Key Uses:</h4>
              <ul className="list-disc list-inside text-sm text-foreground">
                {lang.uses.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
              <Button 
                className="w-full mt-4 bg-primary hover:bg-primary/80"
                onClick={() => handleTakeExam(lang.name)}
              >
                Take Exam
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};