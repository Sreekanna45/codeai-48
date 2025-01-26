import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CodeCompiler } from "@/components/CodeCompiler";

const CodeCompilerPage = () => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl font-bold text-white">Code Compiler</h1>
          <p className="text-muted-foreground mt-2">Write, compile, and run your code</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CodeCompiler />
        </div>
      </div>
    </div>
  );
};

export default CodeCompilerPage;