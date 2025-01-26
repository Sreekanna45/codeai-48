import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileAnalysis = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [questions, setQuestions] = useState<Array<{ question: string; answer: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fileContent, setFileContent] = useState<string>('');

  const generateQuestionsFromContent = (content: string): Array<{ question: string; answer: string }> => {
    // Basic content analysis to generate relevant questions
    const questions = [];
    
    if (content.includes('function') || content.includes('class') || content.includes('const')) {
      questions.push({
        question: "What programming concepts are used in this code?",
        answer: "The code contains JavaScript/TypeScript concepts including functions, classes, or constants."
      });
    }
    
    if (content.includes('import') || content.includes('export')) {
      questions.push({
        question: "How is modularity implemented in this code?",
        answer: "The code uses ES6 module system with import/export statements for modularity."
      });
    }

    // Add generic questions if no specific patterns are found
    if (questions.length === 0) {
      questions.push({
        question: "What is the main purpose of this file?",
        answer: "This file contains content that needs to be analyzed for educational purposes."
      });
    }

    return questions;
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      if (file.type.startsWith('text/') || file.type.includes('javascript') || file.type.includes('typescript')) {
        // Handle text files
        const text = await file.text();
        setFileContent(text);
        const generatedQuestions = generateQuestionsFromContent(text);
        setQuestions(generatedQuestions);
      } else if (file.type.includes('pdf') || file.type.includes('image')) {
        // For PDF and images, show a more appropriate message
        setFileContent(`File type: ${file.type}`);
        setQuestions([
          {
            question: "What type of file was uploaded?",
            answer: `A ${file.type} file was uploaded. For full PDF and image analysis, please connect to a backend service.`
          },
          {
            question: "What is the file size?",
            answer: `The file size is ${(file.size / 1024).toFixed(2)} KB`
          }
        ]);
      }
      
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
              accept=".txt,.js,.py,.java,.cpp,.c,.pdf,.jpg,.jpeg,.png,.doc,.docx"
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
              Supported files: Text, Code, PDF, Images, and Documents
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