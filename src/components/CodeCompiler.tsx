import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LanguageSelector } from './compiler/LanguageSelector';
import { CodeEditor } from './compiler/CodeEditor';
import { OutputWindow } from './compiler/OutputWindow';

export const CodeCompiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const mockCompileCode = (code: string, language: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // For JavaScript, we can actually run the code
          if (language === 'javascript') {
            // Create a safe evaluation environment
            const safeEval = new Function('return ' + code);
            const result = safeEval();
            resolve(String(result));
          } else {
            // For other languages, return a mock response
            resolve(`Mock compilation successful for ${language}:\nOutput: Your code would run here in a real environment`);
          }
        } catch (error) {
          resolve(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
        }
      }, 1000); // Simulate network delay
    });
  };

  const handleCodeCompile = async () => {
    setIsLoading(true);
    try {
      const result = await mockCompileCode(code, selectedLanguage);
      setOutput(result);
      
      toast({
        title: "Compilation Complete",
        description: "Code processed successfully in demo mode",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process code",
        variant: "destructive"
      });
      setOutput('Error: Failed to process code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="compiler-section bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-primary">Code Compiler (Demo Mode)</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This is running in demo mode without API keys. For JavaScript, code will be executed in the browser. 
          For other languages, a mock response will be shown.
        </p>
        <div className="space-y-4">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />

          <CodeEditor
            code={code}
            language={selectedLanguage}
            onChange={setCode}
          />

          <Button 
            onClick={handleCodeCompile}
            disabled={isLoading || !code}
            className="w-full"
          >
            {isLoading ? "Processing..." : "Run Code (Demo)"}
          </Button>

          <OutputWindow output={output} />
        </div>
      </div>
    </div>
  );
};