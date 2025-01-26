import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LanguageSelector } from './compiler/LanguageSelector';
import { CodeEditor } from './compiler/CodeEditor';
import { OutputWindow } from './compiler/OutputWindow';
import { supabase } from "@/integrations/supabase/client";

export const CodeCompiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const compileCode = async (code: string, language: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('compile-code', {
        body: {
          code,
          language
        }
      });

      if (error) throw error;
      return data.output;
    } catch (error) {
      if (error instanceof Error) {
        return `Error: ${error.message}`;
      }
      return 'An unknown error occurred';
    }
  };

  const handleCodeCompile = async () => {
    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Please enter some code to compile",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await compileCode(code, selectedLanguage);
      setOutput(result);
      
      toast({
        title: "Compilation Complete",
        description: "Code processed successfully",
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
        <h3 className="text-xl font-semibold mb-4 text-primary">Code Compiler</h3>
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
            {isLoading ? "Processing..." : "Run Code"}
          </Button>

          <OutputWindow output={output} />
        </div>
      </div>
    </div>
  );
};