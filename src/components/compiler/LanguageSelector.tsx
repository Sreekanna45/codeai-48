import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mainLanguages = {
  javascript: { name: "JavaScript" },
  python: { name: "Python" },
  java: { name: "Java" },
  cpp: { name: "C++" },
  csharp: { name: "C#" }
};

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector = ({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Select
      value={selectedLanguage}
      onValueChange={onLanguageChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(mainLanguages).map(([lang, info]) => (
          <SelectItem key={lang} value={lang}>
            {info.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};