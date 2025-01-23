import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SUPPORTED_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'cpp', name: 'C++' },
  { id: 'ruby', name: 'Ruby' }
];

export const CodeCompiler = () => {
  const [selectedLang, setSelectedLang] = useState(SUPPORTED_LANGUAGES[0].id);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const { toast } = useToast();

  const compileCode = async (code: string, language: string) => {
    // This is a mock implementation. In a real app, this would call a compilation API
    const mockCompile = (code: string, language: string) => {
      switch (language) {
        case 'javascript':
          try {
            // For demonstration, we're using eval. In production, use a proper sandbox
            const result = eval(code);
            return String(result);
          } catch (error) {
            throw new Error(`JavaScript Error: ${error}`);
          }
        case 'python':
          return `Python Output:\n${code.includes('print') ? code.replace('print(', '').replace(')', '') : 'No output'}`;
        case 'java':
          return `Java Output:\nCompiled successfully\n${code.includes('System.out.println') ? code.split('System.out.println("')[1].split('")')[0] : 'No output'}`;
        case 'cpp':
          return `C++ Output:\nCompiled successfully\n${code.includes('cout') ? code.split('cout << "')[1].split('"')[0] : 'No output'}`;
        case 'ruby':
          return `Ruby Output:\n${code.includes('puts') ? code.replace('puts ', '') : 'No output'}`;
        default:
          return 'Language not supported';
      }
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const result = mockCompile(code, language);
          resolve(result);
        } catch (error) {
          resolve(`Error: ${error.message}`);
        }
      }, 1000);
    });
  };

  const handleCompile = async () => {
    if (!code.trim()) {
      toast({
        title: "No code to compile",
        description: "Please enter some code first",
        variant: "destructive",
      });
      return;
    }

    setIsCompiling(true);
    setOutput('Compiling...');
    
    try {
      const result = await compileCode(code, selectedLang);
      setOutput(String(result));
      toast({
        title: "Code compiled successfully",
        description: "Check the output below",
      });
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      toast({
        title: "Compilation failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsCompiling(false);
    }
  };

  return (
    <div className="compiler-section">
      <div className="flex items-center gap-4 mb-4">
        <Select value={selectedLang} onValueChange={setSelectedLang}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <SelectItem key={lang.id} value={lang.id}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleCompile} disabled={isCompiling}>
          {isCompiling ? 'Compiling...' : 'Run Code'}
        </Button>
      </div>
      
      <textarea
        className="code-editor w-full h-[200px] mb-4"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        disabled={isCompiling}
      />
      
      <div className="output-window">
        <h3 className="text-sm font-semibold mb-2">Output:</h3>
        <pre className="whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};