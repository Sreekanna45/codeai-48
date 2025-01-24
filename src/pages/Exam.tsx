import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { saveExamResult } from '../data/programmingLanguages';
import { Card } from "@/components/ui/card";

const Exam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentExam, setCurrentExam] = useState<any>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const examData = localStorage.getItem('currentExam');
    if (!examData) {
      navigate('/');
      return;
    }
    setCurrentExam(JSON.parse(examData));
    setSelectedAnswers(new Array(10).fill(''));
  }, [navigate]);

  if (!currentExam) return null;

  const handleAnswerSelect = (answer: string, questionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (selectedAnswers.includes('')) {
      toast({
        title: "Please answer all questions",
        variant: "destructive",
      });
      return;
    }

    const score = selectedAnswers.filter(
      (answer, index) => answer === currentExam.questions[index].correctAnswer
    ).length;

    setScore(score);
    setShowResults(true);

    // Save result
    saveExamResult({
      language: currentExam.language,
      score,
      totalQuestions: currentExam.questions.length,
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary">
            {currentExam.language} Exam
          </h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Exit Exam
          </Button>
        </div>

        {!showResults ? (
          <div className="space-y-6">
            {currentExam.questions.map((question: any, qIndex: number) => (
              <Card key={qIndex} className="p-6">
                <h2 className="text-lg font-medium text-foreground mb-4">
                  {qIndex + 1}. {question.question}
                </h2>
                <RadioGroup
                  value={selectedAnswers[qIndex]}
                  onValueChange={(value) => handleAnswerSelect(value, qIndex)}
                  className="space-y-3"
                >
                  {question.options.map((option: string, oIndex: number) => (
                    <div key={oIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q${qIndex}-o${oIndex}`} />
                      <label
                        htmlFor={`q${qIndex}-o${oIndex}`}
                        className="text-sm font-medium leading-none text-foreground"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </Card>
            ))}
            <Button
              className="w-full mt-6"
              onClick={handleSubmit}
            >
              Submit Exam
            </Button>
          </div>
        ) : (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              Exam Results
            </h2>
            <div className="text-center mb-6">
              <p className="text-xl">
                Your Score: <span className="text-primary font-bold">{score}/{currentExam.questions.length}</span>
              </p>
            </div>
            <div className="space-y-6">
              {currentExam.questions.map((question: any, index: number) => (
                <div key={index} className="p-4 rounded-lg border border-border">
                  <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Your answer: <span className={selectedAnswers[index] === question.correctAnswer ? "text-green-500" : "text-red-500"}>
                      {selectedAnswers[index]}
                    </span>
                  </p>
                  <p className="text-sm text-green-500">
                    Correct answer: {question.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={() => navigate("/")} variant="outline">
                Back to Home
              </Button>
              <Button onClick={() => navigate("/results")}>
                View All Results
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Exam;