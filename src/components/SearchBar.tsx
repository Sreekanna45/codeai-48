import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Please enter a programming language",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would integrate with an AI service to get language information
    toast({
      title: "Searching...",
      description: `Getting information about ${query}`,
    });
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-3xl mx-auto">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for any programming language..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md
                 hover:bg-gray-100 transition-colors"
      >
        <Search className="w-5 h-5 text-gray-500" />
      </button>
    </form>
  );
};