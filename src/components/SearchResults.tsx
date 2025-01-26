import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import type { LanguageInfo } from '@/data/programmingLanguages';

interface SearchResultsProps {
  searchResult: LanguageInfo;
  onHomeClick: () => void;
}

export const SearchResults = ({ searchResult, onHomeClick }: SearchResultsProps) => {
  return (
    <>
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
      <div className="flex justify-center mt-6">
        <Button
          onClick={onHomeClick}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Button>
      </div>
    </>
  );
};