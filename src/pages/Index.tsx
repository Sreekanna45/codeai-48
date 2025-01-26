import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { TopLanguages } from "@/components/TopLanguages";
import { CodeCompiler } from "@/components/CodeCompiler";
import { ManualReview } from "@/components/ManualReview";
import { Menu, LogOut, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LanguageInfo } from '@/data/programmingLanguages';

const Index = () => {
  const [searchResult, setSearchResult] = useState<LanguageInfo | null>(null);
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const userName = localStorage.getItem("userName") || "User";

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting(`Good Morning, ${userName}`);
    } else if (hour >= 12 && hour < 18) {
      setGreeting(`Good Afternoon, ${userName}`);
    } else {
      setGreeting(`Good Evening, ${userName}`);
    }
  }, [navigate, userName]);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <main className="container mx-auto space-y-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleHomeClick}
              className="hover:bg-secondary rounded-lg transition-colors"
            >
              <Home className="h-6 w-6 text-primary" />
            </Button>
            <h2 className="text-xl font-semibold text-white">{greeting}</h2>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-white">code AI</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Menu className="h-6 w-6 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <SearchBar onSearchResult={setSearchResult} />
        
        {searchResult ? (
          <section className="bg-card p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{searchResult.name}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">{searchResult.description}</p>
              <p><strong>Created by:</strong> {searchResult.creator} in {searchResult.year}</p>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">Key Uses:</h3>
                <ul className="list-disc list-inside text-foreground">
                  {searchResult.uses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">Advantages:</h3>
                <ul className="list-disc list-inside text-foreground">
                  {searchResult.advantages.map((adv, index) => (
                    <li key={index}>{adv}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">Disadvantages:</h3>
                <ul className="list-disc list-inside text-foreground">
                  {searchResult.disadvantages.map((dis, index) => (
                    <li key={index}>{dis}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">Example Code:</h3>
                <div className="space-y-2">
                  {searchResult.examples.map((example, index) => (
                    <pre key={index} className="bg-secondary/50 p-2 rounded text-foreground">{example}</pre>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-primary">Syntax Examples:</h3>
                <div className="space-y-2">
                  {searchResult.syntax.map((syntax, index) => (
                    <pre key={index} className="bg-secondary/50 p-2 rounded text-foreground">{syntax}</pre>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary">Top Programming Languages</h2>
            <TopLanguages />
          </section>
        )}
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-primary">Code Compiler</h2>
          <CodeCompiler />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-primary">Manual Review</h2>
          <ManualReview />
        </section>
      </main>
    </div>
  );
};

export default Index;