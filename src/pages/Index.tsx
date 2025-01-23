import React, { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { TopLanguages } from '@/components/TopLanguages';
import { CodeCompiler } from '@/components/CodeCompiler';
import { ManualReview } from '@/components/ManualReview';

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

const Index = () => {
  const [searchResult, setSearchResult] = useState<LanguageInfo | null>(null);

  return (
    <div className="min-h-screen bg-secondary p-6">
      <main className="container mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CodeAI</h1>
          <p className="text-lg text-gray-600">
            Discover, learn, and code in your favorite programming languages
          </p>
        </header>

        <SearchBar onSearchResult={setSearchResult} />
        
        {searchResult ? (
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{searchResult.name}</h2>
            <div className="space-y-4">
              <p className="text-gray-600">{searchResult.description}</p>
              <p><strong>Created by:</strong> {searchResult.creator} in {searchResult.year}</p>
              
              <div>
                <h3 className="font-semibold mb-2">Key Uses:</h3>
                <ul className="list-disc list-inside">
                  {searchResult.uses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Advantages:</h3>
                <ul className="list-disc list-inside">
                  {searchResult.advantages.map((adv, index) => (
                    <li key={index}>{adv}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Disadvantages:</h3>
                <ul className="list-disc list-inside">
                  {searchResult.disadvantages.map((dis, index) => (
                    <li key={index}>{dis}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Example Code:</h3>
                <div className="space-y-2">
                  {searchResult.examples.map((example, index) => (
                    <pre key={index} className="bg-gray-50 p-2 rounded">{example}</pre>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <h2 className="text-2xl font-semibold mb-6">Top Programming Languages</h2>
            <TopLanguages />
          </section>
        )}
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Code Compiler</h2>
          <CodeCompiler />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Manual Review</h2>
          <ManualReview />
        </section>
      </main>
    </div>
  );
};

export default Index;