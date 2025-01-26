import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { programmingLanguages } from '@/data/programmingLanguages';

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
        {Object.keys(programmingLanguages).map((lang) => (
          <SelectItem key={lang} value={lang}>
            {programmingLanguages[lang].name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};