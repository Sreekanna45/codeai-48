import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { saveExamResult } from '@/data/programmingLanguages';

interface ExamQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface ExamState {
  language: string;
  questions: ExamQuestion[];
  currentQuestion: number;
  answers: string[];
}

const Exam = () => {
  const [examState, setExamState] = useState<ExamState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedExam = localStorage.getItem('currentExam');
    if (!storedExam) {
      navigate('/');
      return;
    }
    setExamState(JSON.parse(storedExam));
  }, [navigate]);

  const handleAnswerSubmit = () => {
    if (!examState || !selectedAnswer) return;

    const newAnswers = [...examState.answers];
    newAnswers[examState.currentQuestion] = selectedAnswer;

    if (examState.currentQuestion === examState.questions.length - 1) {
      // Calculate score
      const correctAnswers = newAnswers.filter(
        (answer, index) => answer === examState.questions[index].correctAnswer
      );
      const score = (correctAnswers.length / examState.questions.length) * 100;

      // Save result
      saveExamResult({
        language: examState.language,
        score,
        totalQuestions: examState.questions.length,
        date: new Date().toISOString(),
      });

      // Show completion message
      toast({
        title: "Exam Completed!",
        description: `Your score: ${score}%`,
      });

      // Clear exam state and redirect
      localStorage.removeItem('currentExam');
      navigate('/');
      return;
    }

    // Move to next question
    setExamState({
      ...examState,
      currentQuestion: examState.currentQuestion + 1,
      answers: newAnswers,
    });
    setSelectedAnswer('');
  };

  if (!examState) return null;

  const currentQuestion = examState.questions[examState.currentQuestion];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md border border-border">
          <h1 className="text-2xl font-bold text-primary mb-4">
            {examState.language} Exam
          </h1>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Question {examState.currentQuestion + 1} of {examState.questions.length}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg">{currentQuestion.question}</p>
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
              className="space-y-2"
            >
              {currentQuestion.options.map((option, index) => (
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
          </div>
          <Button
            className="w-full mt-6"
            onClick={handleAnswerSubmit}
            disabled={!selectedAnswer}
          >
            {examState.currentQuestion === examState.questions.length - 1
              ? "Finish Exam"
              : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exam;