// app/components/ProcessStep.jsx
import React from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-emerald-600 dark:bg-emerald-500 text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
