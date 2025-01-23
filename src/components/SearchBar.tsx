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
      // Add more languages as needed
    };

    return mockData[language.toLowerCase()] || null;
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