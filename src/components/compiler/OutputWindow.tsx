import React from 'react';

interface OutputWindowProps {
  output: string;
}

export const OutputWindow = ({ output }: OutputWindowProps) => {
  if (!output) return null;

  return (
    <div className="output-window mt-4">
      <h4 className="font-medium mb-2">Output:</h4>
      <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md border border-gray-200 text-black min-h-[100px] max-h-[300px] overflow-y-auto">
        {output}
      </pre>
    </div>
  );
};