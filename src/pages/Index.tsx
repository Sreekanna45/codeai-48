import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { ProgrammingNotes } from "@/components/ProgrammingNotes";
import { SearchResults } from "@/components/SearchResults";
import { MainContent } from "@/components/MainContent";
import { FileScanner } from "@/components/FileScanner";
import type { LanguageInfo } from '@/data/programmingLanguages';

const Index = () => {
  const [searchResult, setSearchResult] = useState<LanguageInfo | null>(null);
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const userName = localStorage.getItem("userName") || "User";
  const [showNotes, setShowNotes] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting(`Good Morning, ${userName}`);
    } else if (hour >= 12 && hour < 18) {
      setGreeting(`Good Afternoon, ${userName}`);
    } else {
      setGreeting(`Good Evening, ${userName}`);
    }
  }, [navigate, userName]);

  const handleHomeClick = () => {
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-black p-6">
      <main className="container mx-auto space-y-8">
        <Header
          greeting={greeting}
          onHomeClick={handleHomeClick}
          onNotesToggle={() => setShowNotes(!showNotes)}
          onScannerToggle={() => setShowScanner(!showScanner)}
        />

        <SearchBar onSearchResult={setSearchResult} />
        
        {showScanner && <FileScanner />}
        
        {showNotes && <ProgrammingNotes />}

        {searchResult ? (
          <SearchResults searchResult={searchResult} onHomeClick={handleHomeClick} />
        ) : (
          <MainContent />
        )}
      </main>
    </div>
  );
};

export default Index;