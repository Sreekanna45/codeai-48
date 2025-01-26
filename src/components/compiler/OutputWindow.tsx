import React from 'react';

interface OutputWindowProps {
  output: string;
}

export const OutputWindow = ({ output }: OutputWindowProps) => {
  if (!output) return null;

  return (
    <div className="output-window mt-4">
      <h4 className="font-medium mb-2">Output:</h4>
      <pre className="whitespace-pre-wrap bg-white p-4 rounded-md border text-black">
        {output}
      </pre>
    </div>
  );
};