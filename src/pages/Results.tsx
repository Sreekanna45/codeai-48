import React from 'react';
import { getExamResults } from '@/data/programmingLanguages';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Results = () => {
  const results = getExamResults();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Exam Results History</h1>
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