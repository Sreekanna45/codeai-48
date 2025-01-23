import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();

  const handleCompile = async () => {
    if (!code.trim()) {
      toast({
        title: "No code to compile",
        description: "Please enter some code first",
        variant: "destructive",
      });
      return;
    }

    // Here we would integrate with a code execution service
    setOutput('Compiling...');
    toast({
      title: "Compiling code",
      description: "Please wait while we process your code",
    });
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
        <Button onClick={handleCompile}>Run Code</Button>
      </div>
      
      <textarea
        className="code-editor w-full h-[200px] mb-4"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />
      
      <div className="output-window">
        <h3 className="text-sm font-semibold mb-2">Output:</h3>
        <pre className="whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};