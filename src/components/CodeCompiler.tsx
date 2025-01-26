import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import * as pdfjs from 'pdfjs-dist';
import { Card } from './ui/card';

// Set worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const CodeCompiler = () => {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState<Array<{ question: string; answer: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const extractTextFromPDF = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += pageText + ' ';
    }
    
    return fullText;
  };

  const generateQuestionsFromText = async (text: string) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{
            role: "system",
            content: "You are a professional educator. Generate 10 important and relevant questions with accurate answers based on the provided text. Focus on key concepts and critical understanding. Format each question-answer pair clearly."
          }, {
            role: "user",
            content: `Generate 10 important questions and their detailed answers from this text: ${text}`
          }],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate questions');
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      // Parse the response into question-answer pairs
      const pairs = content.split('\n\n').filter(Boolean).map((pair: string) => {
        const [question, answer] = pair.split('\nAnswer: ');
        return {
          question: question.replace(/^\d+\.\s*/, '').trim(),
          answer: answer?.trim() || ''
        };
      }).slice(0, 10); // Ensure we only get 10 pairs

      return pairs;
    } catch (error) {
      console.error('Error generating questions:', error);
      throw error;
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    if (uploadedFile.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive"
      });
      return;
    }

    setFile(uploadedFile);
    setIsLoading(true);

    try {
      const text = await extractTextFromPDF(uploadedFile);
      const generatedQuestions = await generateQuestionsFromText(text);
      setQuestions(generatedQuestions);
      
      toast({
        title: "Success",
        description: "Questions generated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate questions",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="compiler-section">
      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".pdf"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary/80"
        />
      </div>

      {isLoading && (
        <div className="text-center py-4">
          <p className="text-primary">Generating questions...</p>
        </div>
      )}

      {questions.length > 0 && (
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold text-primary">Generated Questions</h3>
          {questions.map((qa, index) => (
            <Card key={index} className="p-4 space-y-2">
              <p className="font-medium text-foreground">
                {index + 1}. {qa.question}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Answer:</span> {qa.answer}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};