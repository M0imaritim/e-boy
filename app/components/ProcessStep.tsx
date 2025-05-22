// ProcessStep.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connection Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-full ml-4 w-16 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 dark:from-emerald-700 dark:to-teal-700 z-0">
          <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 dark:text-emerald-400" />
        </div>
      )}

      {/* Step Number & Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <div className="text-center">
            <div className="text-2xl font-bold">{number}</div>
          </div>
        </div>
        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto -mt-2 relative z-10 group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
