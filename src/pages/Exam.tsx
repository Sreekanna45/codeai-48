import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { saveExamResult } from '../data/programmingLanguages';
import { Home } from "lucide-react";

interface ExamResults {
  score: number;
  answers: string[];
  correctAnswers: string[];
  questions: any[];
}

const Exam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentExam, setCurrentExam] = useState<any>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [examResults, setExamResults] = useState<ExamResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const examData = localStorage.getItem('currentExam');
    if (!examData) {
      navigate('/home');
      return;
    }
    const parsedExam = JSON.parse(examData);
    setCurrentExam(parsedExam);
    setSelectedAnswers(new Array(parsedExam.questions.length).fill(''));
    setIsLoading(false);
  }, [navigate]);

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleAnswerSelect = (answer: string) => {
    if (!currentExam) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentExam.currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleQuestionChange = (index: number) => {
    if (!currentExam) return;
    const updatedExam = {
      ...currentExam,
      currentQuestion: index,
    };
    setCurrentExam(updatedExam);
    localStorage.setItem('currentExam', JSON.stringify(updatedExam));
  };

  const handleSubmitExam = () => {
    if (!currentExam) return;
    if (selectedAnswers.some(answer => answer === '')) {
      toast({
        title: "Please answer all questions",
        variant: "destructive",
      });
      return;
    }

    const score = selectedAnswers.filter(
      (answer, index) => answer === currentExam.questions[index].correctAnswer
    ).length;

    const results: ExamResults = {
      score,
      answers: selectedAnswers,
      correctAnswers: currentExam.questions.map((q: any) => q.correctAnswer),
      questions: currentExam.questions,
    };

    saveExamResult({
      language: currentExam.language,
      score,
      totalQuestions: currentExam.questions.length,
      date: new Date().toISOString(),
    });

    setExamResults(results);
    setShowResults(true);
    localStorage.removeItem('currentExam');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleHomeClick}
              className="hover:bg-secondary rounded-lg transition-colors"
            >
              <Home className="h-6 w-6 text-primary" />
            </Button>
          </div>
          <Card className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex justify-center items-center h-40">
              <p className="text-lg text-muted-foreground">Loading exam...</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentExam) {
    return null;
  }

  if (showResults && examResults) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleHomeClick}
              className="hover:bg-secondary rounded-lg transition-colors"
            >
              <Home className="h-6 w-6 text-primary" />
            </Button>
          </div>
          <Card className="bg-card p-6 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-primary">
              Exam Results - {currentExam.language}
            </h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Score: {examResults.score} out of {currentExam.questions.length}
              </h2>
            </div>
            <div className="space-y-6">
              {examResults.questions.map((question: any, index: number) => (
                <CardContent key={index} className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">
                    {index + 1}. {question.question}
                  </h3>
                  <p className="text-muted-foreground">Your answer: {examResults.answers[index]}</p>
                  <p className={`font-medium ${examResults.answers[index] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                    Correct answer: {question.correctAnswer}
                  </p>
                </CardContent>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <Button onClick={() => navigate('/home')}>Back to Home</Button>
              <Button onClick={() => navigate('/results')}>View All Results</Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleHomeClick}
            className="hover:bg-secondary rounded-lg transition-colors"
          >
            <Home className="h-6 w-6 text-primary" />
          </Button>
        </div>
        <Card className="bg-card p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-primary">
            {currentExam.language} Exam
          </h1>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Question {currentExam.currentQuestion + 1} of {currentExam.questions.length}
            </p>
          </div>
          
          <div className="mb-6 flex flex-wrap gap-2">
            {currentExam.questions.map((_: any, index: number) => (
              <Button
                key={index}
                variant={index === currentExam.currentQuestion ? "default" : "outline"}
                size="sm"
                onClick={() => handleQuestionChange(index)}
                className={selectedAnswers[index] ? "bg-secondary" : ""}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-medium text-foreground">
              {currentExam.questions[currentExam.currentQuestion].question}
            </h2>
            <RadioGroup
              value={selectedAnswers[currentExam.currentQuestion]}
              onValueChange={handleAnswerSelect}
              className="space-y-3"
            >
              {currentExam.questions[currentExam.currentQuestion].options.map((option: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <label
                    htmlFor={`option-${index}`}
                    className="text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => handleQuestionChange(Math.max(0, currentExam.currentQuestion - 1))}
                disabled={currentExam.currentQuestion === 0}
              >
                Previous
              </Button>
              {currentExam.currentQuestion === currentExam.questions.length - 1 ? (
                <Button onClick={handleSubmitExam}>Submit Exam</Button>
              ) : (
                <Button
                  onClick={() => handleQuestionChange(currentExam.currentQuestion + 1)}
                  disabled={currentExam.currentQuestion === currentExam.questions.length - 1}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Exam;