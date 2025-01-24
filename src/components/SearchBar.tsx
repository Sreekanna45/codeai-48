import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { programmingLanguages, LanguageInfo } from '../data/programmingLanguages';

export const SearchBar = ({ onSearchResult }: { onSearchResult: (info: LanguageInfo | null) => void }) => {
  const [query, setQuery] = useState('');
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const searchLanguage = async (language: string): Promise<LanguageInfo | null> => {
    // Make the search case-insensitive and trim whitespace
    const normalizedQuery = language.toLowerCase().trim();
    return programmingLanguages[normalizedQuery] || null;
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

  const handleBack = () => {
    setQuery('');
    onSearchResult(null);
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