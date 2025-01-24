import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getExamResults } from '@/data/programmingLanguages';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Results = () => {
  const results = getExamResults();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleHomeClick}
            className="hover:bg-secondary rounded-lg transition-colors"
          >
            <Home className="h-6 w-6 text-primary" />
          </Button>
          <h1 className="text-3xl font-bold text-primary">Exam Results History</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">{result.language}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Score: {result.score}/{result.totalQuestions}</p>
                <p className="text-sm text-muted-foreground">
                  Date: {new Date(result.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        {results.length === 0 && (
          <p className="text-center text-muted-foreground">No exam results yet.</p>
        )}
      </div>
    </div>
  );
};

export default Results;