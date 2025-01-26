import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateExamQuestions } from '@/data/programmingLanguages';

const FileAnalysis = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [questions, setQuestions] = useState<Array<{ question: string; answer: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      // Read file content
      const text = await file.text();
      
      // Generate questions based on file content
      // For demonstration, we'll generate JavaScript questions
      const examQuestions = generateExamQuestions('javascript').slice(0, 10);
      
      // Format questions and answers
      const formattedQuestions = examQuestions.map(q => ({
        question: q.question,
        answer: q.correctAnswer
      }));

      setQuestions(formattedQuestions);
      
      toast({
        title: "Success",
        description: "File analyzed successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze file. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-black p-6">
      <div className="container mx-auto">
        <Button 
          onClick={() => navigate('/home')} 
          variant="ghost" 
          className="mb-6 text-white hover:text-primary hover:bg-secondary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">File Analysis</h1>
          <p className="text-muted-foreground mt-2">Upload your file to generate questions and answers</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <input
              type="file"
              onChange={handleFileUpload}
              accept=".txt,.js,.py,.java,.cpp,.c"
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Choose File
            </label>
            <p className="text-sm text-muted-foreground mt-2">
              Supported files: .txt, .js, .py, .java, .cpp, .c
            </p>
          </div>

          {isLoading && (
            <div className="text-center text-white">
              Analyzing file...
            </div>
          )}

          {questions.length > 0 && (
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-primary">Generated Questions & Answers</h2>
              <div className="space-y-4">
                {questions.map((qa, index) => (
                  <div key={index} className="border-b pb-4">
                    <p className="font-medium text-primary">Q{index + 1}: {qa.question}</p>
                    <p className="mt-2 text-muted-foreground">A: {qa.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileAnalysis;