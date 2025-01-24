import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import TopLanguages from "@/components/TopLanguages";
import CodeCompiler from "@/components/CodeCompiler";
import ManualReview from "@/components/ManualReview";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-foreground">code AI</h1>
          <div className="space-x-4">
            <Button onClick={() => navigate("/results")} variant="outline">
              View Results
            </Button>
          </div>
        </div>
        
        <SearchBar setSearchResults={setSearchResults} />
        
        {searchResults.length === 0 && <TopLanguages />}
        
        <CodeCompiler />
        <ManualReview />
      </div>
    </div>
  );
};

export default Index;