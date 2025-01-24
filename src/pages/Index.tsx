import React, { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { TopLanguages } from '@/components/TopLanguages';
import { CodeCompiler } from '@/components/CodeCompiler';
import { ManualReview } from '@/components/ManualReview';

const Index = () => {
  const [searchResult, setSearchResult] = useState<LanguageInfo | null>(null);

  return (
    <div className="min-h-screen bg-background p-6">
      <main className="container mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">code AI</h1>
          <p className="text-lg text-muted-foreground">
            Discover, learn, and code in your favorite programming languages
          </p>
        </header>

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
