import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { saveExamResult } from '../data/programmingLanguages';

const Exam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentExam, setCurrentExam] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  useEffect(() => {
    const examData = localStorage.getItem('currentExam');
    if (!examData) {
      navigate('/');
      return;
    }
    setCurrentExam(JSON.parse(examData));
  }, [navigate]);

  if (!currentExam) return null;

  const currentQuestion = currentExam.questions[currentExam.currentQuestion];

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    const newAnswers = [...currentExam.answers, selectedAnswer];
    const newCurrentQuestion = currentExam.currentQuestion + 1;

    if (newCurrentQuestion >= currentExam.questions.length) {
      // Calculate score
      const score = newAnswers.filter(
        (answer: string, index: number) => answer === currentExam.questions[index].correctAnswer
      ).length;

      // Save result
      saveExamResult({
        language: currentExam.language,
        score,
        totalQuestions: currentExam.questions.length,
        date: new Date().toISOString(),
      });

      // Show completion message
      toast({
        title: "Exam Completed!",
        description: `You scored ${score} out of ${currentExam.questions.length}`,
      });

      // Clear exam data and return to home
      localStorage.removeItem('currentExam');
      navigate('/');
      return;
    }

    // Update exam state
    const updatedExam = {
      ...currentExam,
      currentQuestion: newCurrentQuestion,
      answers: newAnswers,
    };
    localStorage.setItem('currentExam', JSON.stringify(updatedExam));
    setCurrentExam(updatedExam);
    setSelectedAnswer("");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-primary">
            {currentExam.language} Exam
          </h1>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Question {currentExam.currentQuestion + 1} of {currentExam.questions.length}
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-foreground">
              {currentQuestion.question}
            </h2>
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
              className="space-y-3"
            >
              {currentQuestion.options.map((option: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <label
                    htmlFor={`option-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </RadioGroup>
            <Button
              className="w-full mt-6"
              onClick={handleSubmitAnswer}
            >
              {currentExam.currentQuestion === currentExam.questions.length - 1
                ? "Complete Exam"
                : "Next Question"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;