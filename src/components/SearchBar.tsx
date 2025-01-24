import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { programmingLanguages, LanguageInfo } from '../data/programmingLanguages';

export const SearchBar = ({ onSearchResult }: { onSearchResult: (info: LanguageInfo | null) => void }) => {
  const [query, setQuery] = useState('');
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const searchLanguage = async (language: string): Promise<LanguageInfo | null> => {
    const normalizedQuery = language.toLowerCase().trim();
    const result = programmingLanguages[normalizedQuery] || null;
    
    // Don't clear the exam section if no result is found
    if (!result) {
      toast({
        title: "Language not found",
        description: "Please try another programming language",
        variant: "destructive",
      });
    }
    return result;
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
      onSearchResult(result);
      if (result) {
        toast({
          title: "Information found!",
          description: `Showing details for ${result.name}`,
        });
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
                 hover:bg-secondary/50 transition-colors"
        disabled={isLoading}
      >
        <Search className="w-5 h-5 text-muted-foreground" />
      </button>
    </form>
  );
};