import { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface Question {
  question: string;
  answer: string;
}

export const FileScanner = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    const allowedTypes = [
      'text/plain',
      'application/pdf',
      'image/jpeg',
      'text/javascript',
      'text/x-c'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Unsupported file type",
        description: "Please upload a .txt, .pdf, .jpg, .c, or .js file",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const content = await readFileContent(file);
      // For demo purposes, generating mock questions
      // In a real app, you'd want to use an AI service to generate questions
      const generatedQuestions = generateMockQuestions(content);
      setQuestions(generatedQuestions);
    } catch (error) {
      toast({
        title: "Error reading file",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const readFileContent = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (e) => reject(e);
      
      if (file.type === 'application/pdf') {
        // For PDF files, you'd need a PDF parsing library
        // This is a simplified version
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    });
  };

  const generateMockQuestions = (content: string): Question[] => {
    // This is a mock implementation
    // In a real app, you'd want to use an AI service to generate relevant questions
    return Array.from({ length: 10 }, (_, i) => ({
      question: `Question ${i + 1} about the uploaded content?`,
      answer: `Sample answer ${i + 1} based on the content analysis.`
    }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          File Scanner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept=".txt,.pdf,.jpg,.c,.js"
              onChange={handleFileUpload}
              disabled={isLoading}
            />
            <Button variant="outline" className="w-full" disabled={isLoading}>
              <Upload className="mr-2 h-4 w-4" />
              {isLoading ? "Processing..." : "Upload File"}
            </Button>
          </label>
        </div>

        {questions.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Generated Questions</h3>
            {questions.map((q, index) => (
              <div key={index} className="bg-secondary/20 p-4 rounded-lg">
                <p className="font-medium text-primary">Q: {q.question}</p>
                <p className="mt-2 text-muted-foreground">A: {q.answer}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};