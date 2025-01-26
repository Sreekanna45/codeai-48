import React from 'react';
import { programmingLanguages } from '@/data/programmingLanguages';

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
}

export const CodeEditor = ({ code, language, onChange }: CodeEditorProps) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      className="code-editor w-full h-64 p-4 font-mono bg-gray-50 border rounded-md"
      placeholder={`Write your ${programmingLanguages[language].name} code here...`}
    />
  );
};