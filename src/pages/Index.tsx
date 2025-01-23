import React from 'react';
import { SearchBar } from '@/components/SearchBar';
import { TopLanguages } from '@/components/TopLanguages';
import { CodeCompiler } from '@/components/CodeCompiler';

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary p-6">
      <main className="container mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CodeAI</h1>
          <p className="text-lg text-gray-600">
            Discover, learn, and code in your favorite programming languages
          </p>
        </header>

        <SearchBar />
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Top Programming Languages</h2>
          <TopLanguages />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Code Compiler</h2>
          <CodeCompiler />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Manual Review</h2>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
              <p className="text-xl text-gray-600">Start building your amazing project here!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;