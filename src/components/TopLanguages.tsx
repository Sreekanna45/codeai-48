import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const TOP_LANGUAGES = [
  {
    name: "JavaScript",
    creator: "Brendan Eich",
    year: 1995,
    description: "Multi-paradigm language for web development",
    uses: ["Web Development", "Server-side (Node.js)", "Mobile Apps", "Desktop Apps"],
    advantages: ["Huge ecosystem", "Easy to learn", "Versatile", "Rich frameworks"],
    disadvantages: ["Type coercion issues", "Floating-point precision", "Browser inconsistencies"]
  },
  {
    name: "Python",
    creator: "Guido van Rossum",
    year: 1991,
    description: "High-level language focused on readability",
    uses: ["Data Science", "AI/ML", "Web Backend", "Automation"],
    advantages: ["Easy syntax", "Large standard library", "Great for beginners"],
    disadvantages: ["Slower execution", "GIL limitations", "Memory consumption"]
  },
  {
    name: "Java",
    creator: "James Gosling",
    year: 1995,
    description: "Object-oriented language used for building platform-independent applications",
    uses: ["Web Applications", "Mobile Applications (Android)", "Enterprise Applications"],
    advantages: ["Platform independence", "Strong community support", "Robust security features"],
    disadvantages: ["Verbose syntax", "Slower than native languages", "Memory consumption"]
  },
  {
    name: "C++",
    creator: "Bjarne Stroustrup",
    year: 1985,
    description: "General-purpose programming language with low-level memory manipulation",
    uses: ["Game Development", "System Software", "Real-time systems"],
    advantages: ["High performance", "Control over system resources", "Rich library support"],
    disadvantages: ["Complex syntax", "Manual memory management", "Steeper learning curve"]
  },
  {
    name: "Ruby",
    creator: "Yukihiro Matsumoto",
    year: 1995,
    description: "Dynamic, open-source programming language with a focus on simplicity",
    uses: ["Web Development", "Data Processing", "Prototyping"],
    advantages: ["Readable syntax", "Rich libraries", "Strong community"],
    disadvantages: ["Performance issues", "Less control over memory", "Not as widely used as others"]
  },
  {
    name: "Go",
    creator: "Robert Griesemer, Rob Pike, Ken Thompson",
    year: 2009,
    description: "Statically typed language designed for simplicity and efficiency",
    uses: ["Cloud Services", "Web Servers", "Command-line Tools"],
    advantages: ["Fast compilation", "Concurrency support", "Strong standard library"],
    disadvantages: ["Limited generics", "Verbose error handling", "Less mature ecosystem"]
  },
  {
    name: "Swift",
    creator: "Apple Inc.",
    year: 2014,
    description: "Powerful and intuitive programming language for iOS and macOS development",
    uses: ["iOS Applications", "macOS Applications", "Server-side Development"],
    advantages: ["Safe and fast", "Modern syntax", "Strong community support"],
    disadvantages: ["Limited cross-platform support", "Young language with evolving features", "Learning curve for Objective-C developers"]
  },
  {
    name: "Kotlin",
    creator: "JetBrains",
    year: 2011,
    description: "Modern programming language that runs on the Java Virtual Machine",
    uses: ["Android Development", "Web Development", "Server-side Applications"],
    advantages: ["Concise syntax", "Interoperable with Java", "Strong type system"],
    disadvantages: ["Still evolving", "Limited resources compared to Java", "Performance overhead"]
  },
  {
    name: "PHP",
    creator: "Rasmus Lerdorf",
    year: 1994,
    description: "Server-side scripting language designed for web development",
    uses: ["Web Development", "Content Management Systems", "E-commerce"],
    advantages: ["Easy to learn", "Wide adoption", "Strong community support"],
    disadvantages: ["Inconsistent syntax", "Performance issues", "Security vulnerabilities"]
  },
  {
    name: "TypeScript",
    creator: "Microsoft",
    year: 2012,
    description: "Superset of JavaScript that adds static types",
    uses: ["Web Development", "Large-scale Applications", "Node.js Applications"],
    advantages: ["Type safety", "Improved tooling", "Better code organization"],
    disadvantages: ["Learning curve for JavaScript developers", "Compilation step required", "More verbose than JavaScript"]
  },
];

export const TopLanguages = () => {
  const { toast } = useToast();

  const handleTakeExam = (languageName: string) => {
    toast({
      title: "Exam Started",
      description: `Starting ${languageName} examination. Good luck!`,
    });
    // In a real application, this would navigate to the exam page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {TOP_LANGUAGES.map((lang) => (
        <Card key={lang.name} className="language-card bg-card text-card-foreground hover:bg-secondary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-primary">{lang.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Created by {lang.creator} in {lang.year}</p>
            <p className="mb-4 text-foreground">{lang.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Key Uses:</h4>
              <ul className="list-disc list-inside text-sm text-foreground">
                {lang.uses.slice(0, 3).map((use) => (
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