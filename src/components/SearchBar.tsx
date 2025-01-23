import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LanguageInfo {
  name: string;
  description: string;
  creator: string;
  year: number;
  uses: string[];
  advantages: string[];
  disadvantages: string[];
  examples: string[];
}

export const SearchBar = ({ onSearchResult }: { onSearchResult: (info: LanguageInfo | null) => void }) => {
  const [query, setQuery] = useState('');
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const searchLanguage = async (language: string): Promise<LanguageInfo | null> => {
    // This is a mock implementation. In a real app, this would call an API
    const mockData: Record<string, LanguageInfo> = {
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
          "import pandas as pd\ndf = pd.read_csv('data.csv')"
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
          "std::vector<int> numbers = {1, 2, 3, 4, 5};"
        ]
      },
      typescript: {
        name: "TypeScript",
        description: "A strict syntactical superset of JavaScript that adds optional static typing.",
        creator: "Microsoft",
        year: 2012,
        uses: ["Web Development", "Large Scale Applications", "Node.js Development", "Enterprise Software"],
        advantages: ["Type safety", "Better tooling", "JavaScript compatibility", "Modern features"],
        disadvantages: ["Additional compilation step", "Learning curve", "Type complexity"],
        examples: [
          "console.log('Hello, World!');",
          "function add(a: number, b: number): number { return a + b; }",
          "interface User { name: string; age: number; }"
        ]
      }
    };

    // Make the search case-insensitive and trim whitespace
    const normalizedQuery = language.toLowerCase().trim();
    return mockData[normalizedQuery] || null;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Please enter a programming language",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await searchLanguage(query);
      if (result) {
        onSearchResult(result);
        toast({
          title: "Information found!",
          description: `Showing details for ${result.name}`,
        });
      } else {
        toast({
          title: "Language not found",
          description: "Please try another programming language",
          variant: "destructive",
        });
        onSearchResult(null);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to search for language information",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-3xl mx-auto">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for any programming language..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md
                 hover:bg-gray-100 transition-colors"
        disabled={isLoading}
      >
        <Search className="w-5 h-5 text-gray-500" />
      </button>
    </form>
  );
};