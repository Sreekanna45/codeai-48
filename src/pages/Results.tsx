import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getExamResults } from "@/data/programmingLanguages";

const Results = () => {
  const navigate = useNavigate();
  const results = getExamResults();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary">Exam Results History</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Back to Home
          </Button>
        </div>
        
        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md border border-border"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-foreground">
                  {result.language} Exam
                </h2>
                <span className="text-primary font-bold">
                  Score: {result.score}/{result.totalQuestions}
                </span>
              </div>
              <p className="text-muted-foreground">
                Date: {new Date(result.date).toLocaleString()}
              </p>
            </div>
          ))}
          
          {results.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No exam results found. Take an exam to see your results here!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;