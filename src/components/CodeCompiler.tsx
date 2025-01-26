import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LanguageSelector } from './compiler/LanguageSelector';
import { CodeEditor } from './compiler/CodeEditor';
import { OutputWindow } from './compiler/OutputWindow';
import { getStoredApiKey, API_KEYS } from '@/utils/apiUtils';
import { ApiKeySettings } from './ApiKeySettings';

export const CodeCompiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getLanguageId = (language: string): number => {
    const languageIds: Record<string, number> = {
      javascript: 63,
      python: 71,
      java: 62,
      cpp: 54,
      c: 50
    };
    return languageIds[language] || 63;
  };

  const handleCodeCompile = async () => {
    const apiKey = getStoredApiKey(API_KEYS.JUDGE0);
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please set your Judge0 API key in the settings",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.judge0.com/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': apiKey
        },
        body: JSON.stringify({
          source_code: code,
          language_id: getLanguageId(selectedLanguage),
          stdin: ''
        })
      });

      if (!response.ok) {
        throw new Error('Compilation failed');
      }

      const data = await response.json();
      setOutput(data.stdout || data.stderr || 'Compilation successful');
      
      toast({
        title: data.stderr ? "Compilation Error" : "Success",
        description: data.stderr || "Code compiled successfully",
        variant: data.stderr ? "destructive" : "default"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to compile code",
        variant: "destructive"
      });
      setOutput('Error: Failed to compile code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <ApiKeySettings />
      
      <div className="compiler-section">
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
            {isLoading ? "Compiling..." : "Compile & Run"}
          </Button>

          <OutputWindow output={output} />
        </div>
      </div>
    </div>
  );
};