export interface LanguageInfo {
  name: string;
  description: string;
  creator: string;
  year: number;
  uses: string[];
  advantages: string[];
  disadvantages: string[];
  examples: string[];
  syntax: string[];
}

export const programmingLanguages: Record<string, LanguageInfo> = {
  javascript: {
    name: "JavaScript",
    description: "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
    creator: "Brendan Eich",
    year: 1995,
    uses: ["Web Development", "Server-side Development", "Mobile Development", "Game Development"],
    advantages: ["Easy to learn", "Huge ecosystem", "Versatile", "Rich frameworks"],
    disadvantages: ["Type coercion issues", "Browser inconsistencies", "Security concerns"],
    examples: [
      "console.log('Hello, World!');",
      "const sum = (a, b) => a + b;",
      "fetch('https://api.example.com/data').then(response => response.json())"
    ],
    syntax: [
      "let variable = value;",
      "function name(params) { }",
      "if (condition) { }"
    ]
  },
  python: {
    name: "Python",
    description: "A high-level, interpreted programming language known for its simplicity and readability.",
    creator: "Guido van Rossum",
    year: 1991,
    uses: ["Data Science", "AI/ML", "Web Development", "Automation"],
    advantages: ["Easy to learn", "Large standard library", "Great community", "Cross-platform"],
    disadvantages: ["Slower execution", "GIL limitations", "Memory consumption"],
    examples: [
      "print('Hello, World!')",
      "def add(a, b): return a + b",
      "import pandas as pd"
    ],
    syntax: [
      "variable = value",
      "def function_name(parameters):",
      "if condition:"
    ]
  },
  java: {
    name: "Java",
    description: "A class-based, object-oriented programming language designed to be platform-independent.",
    creator: "James Gosling",
    year: 1995,
    uses: ["Enterprise Software", "Android Development", "Web Applications", "Cloud Computing"],
    advantages: ["Platform independence", "Strong typing", "Large ecosystem", "Security"],
    disadvantages: ["Verbose syntax", "Memory intensive", "Slower startup"],
    examples: [
      "System.out.println('Hello, World!');",
      "public int add(int a, int b) { return a + b; }",
      "List<String> items = new ArrayList<>();"
    ],
    syntax: [
      "public class ClassName { }",
      "public void methodName() { }",
      "if (condition) { }"
    ]
  },
  cpp: {
    name: "C++",
    description: "A general-purpose programming language created as an extension of the C programming language.",
    creator: "Bjarne Stroustrup",
    year: 1985,
    uses: ["System Programming", "Game Development", "Real-time Systems", "Embedded Systems"],
    advantages: ["High performance", "Hardware access", "Large community", "Flexibility"],
    disadvantages: ["Complex syntax", "No garbage collection", "Long compile times"],
    examples: [
      "#include <iostream>\nint main() {\n    std::cout << 'Hello, World!';\n    return 0;\n}",
      "int add(int a, int b) { return a + b; }",
      "std::vector<int> numbers = {1, 2, 3};"
    ],
    syntax: [
      "#include <header>",
      "int functionName(parameters) { }",
      "class ClassName { };"
    ]
  },
  c: {
    name: "C",
    description: "A general-purpose programming language that provides low-level memory access.",
    creator: "Dennis Ritchie",
    year: 1972,
    uses: ["System Programming", "Embedded Systems", "Operating Systems", "Device Drivers"],
    advantages: ["High performance", "Direct hardware access", "Portable", "Efficient"],
    disadvantages: ["Manual memory management", "No built-in OOP", "Limited standard library"],
    examples: [
      "#include <stdio.h>\nint main() {\n    printf('Hello, World!');\n    return 0;\n}",
      "int add(int a, int b) { return a + b; }",
      "struct Point { int x, y; };"
    ],
    syntax: [
      "#include <header.h>",
      "int function(parameters) { }",
      "struct StructName { };"
    ]
  },
  html: {
    name: "HTML",
    description: "The standard markup language for documents designed to be displayed in a web browser.",
    creator: "Tim Berners-Lee",
    year: 1993,
    uses: ["Web Development", "Email Templates", "Web Applications", "Documentation"],
    advantages: ["Easy to learn", "Universal support", "SEO friendly", "Accessible"],
    disadvantages: ["Static content only", "Browser inconsistencies", "No programming logic"],
    examples: [
      "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>",
      "<div class='container'>\n  <p>Content here</p>\n</div>",
      "<form action='/submit'>\n  <input type='text'>\n</form>"
    ],
    syntax: [
      "<tagname>content</tagname>",
      "<element attribute='value'>",
      "<!-- Comment -->"
    ]
  },
  css: {
    name: "CSS",
    description: "A style sheet language used for describing the presentation of a document written in HTML.",
    creator: "Håkon Wium Lie",
    year: 1994,
    uses: ["Web Styling", "Animations", "Responsive Design", "UI/UX Design"],
    advantages: ["Separation of concerns", "Reusable styles", "Maintainable", "Powerful selectors"],
    disadvantages: ["Browser inconsistencies", "Cascade complexity", "Specificity issues"],
    examples: [
      ".className {\n  color: blue;\n  margin: 20px;\n}",
      "@media screen and (max-width: 600px) {\n  body {\n    font-size: 14px;\n  }\n}",
      "#id {\n  display: flex;\n  justify-content: center;\n}"
    ],
    syntax: [
      "selector { property: value; }",
      "@media rule { }",
      "@keyframes name { }"
    ]
  },
  csharp: {
    name: "C#",
    description: "A modern, object-oriented programming language developed by Microsoft.",
    creator: "Anders Hejlsberg",
    year: 2000,
    uses: ["Windows Applications", "Game Development", "Enterprise Software", "Web Applications"],
    advantages: ["Modern features", "Strong typing", "Rich ecosystem", "Cross-platform"],
    disadvantages: ["Learning curve", "Memory overhead", "Compilation time"],
    examples: [
      "Console.WriteLine('Hello, World!');",
      "public int Add(int a, int b) => a + b;",
      "var list = new List<string>();"
    ],
    syntax: [
      "public class ClassName { }",
      "public void MethodName() { }",
      "using namespace;"
    ]
  }
};

export interface ExamQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const generateExamQuestions = (language: string): ExamQuestion[] => {
  const languageInfo = programmingLanguages[language.toLowerCase()];
  if (!languageInfo) return [];

  const questionTemplates = [
    {
      template: `What is the primary use of ${languageInfo.name}?`,
      options: [...languageInfo.uses, "None of the above"],
      correctAnswer: languageInfo.uses[0]
    },
    {
      template: `Who created ${languageInfo.name}?`,
      options: [languageInfo.creator, "Bill Gates", "Steve Jobs", "Linus Torvalds"],
      correctAnswer: languageInfo.creator
    },
    {
      template: `When was ${languageInfo.name} first released?`,
      options: [
        languageInfo.year.toString(),
        (languageInfo.year + 5).toString(),
        (languageInfo.year - 5).toString(),
        (languageInfo.year + 10).toString()
      ],
      correctAnswer: languageInfo.year.toString()
    },
    {
      template: `What is a major advantage of ${languageInfo.name}?`,
      options: [...languageInfo.advantages, "None of the above"],
      correctAnswer: languageInfo.advantages[0]
    },
    {
      template: `What is a significant disadvantage of ${languageInfo.name}?`,
      options: [...languageInfo.disadvantages, "No disadvantages"],
      correctAnswer: languageInfo.disadvantages[0]
    },
    // Additional dynamic questions based on language features
    ...languageInfo.examples.map((example, index) => ({
      template: `Which of the following is a valid ${languageInfo.name} code example?`,
      options: [
        example,
        `invalid_${example}`,
        `wrong_syntax_${example}`,
        `error_${example}`
      ],
      correctAnswer: example
    })),
    ...languageInfo.syntax.map((syntax, index) => ({
      template: `Which syntax is correct in ${languageInfo.name}?`,
      options: [
        syntax,
        `wrong_${syntax}`,
        `invalid_${syntax}`,
        `error_${syntax}`
      ],
      correctAnswer: syntax
    }))
  ];

  // Shuffle and select 10 random questions
  const shuffledQuestions = questionTemplates
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return shuffledQuestions.map(q => ({
    question: q.template,
    options: q.options.sort(() => Math.random() - 0.5), // Shuffle options
    correctAnswer: q.correctAnswer
  }));
};

export interface ExamResult {
  language: string;
  score: number;
  totalQuestions: number;
  date: string;
}

// Initialize exam results in localStorage if it doesn't exist
if (typeof window !== 'undefined' && !localStorage.getItem('examResults')) {
  localStorage.setItem('examResults', JSON.stringify([]));
}

export const saveExamResult = (result: ExamResult) => {
  const results = JSON.parse(localStorage.getItem('examResults') || '[]');
  results.push(result);
  localStorage.setItem('examResults', JSON.stringify(results));
};

export const getExamResults = (): ExamResult[] => {
  return JSON.parse(localStorage.getItem('examResults') || '[]');
};