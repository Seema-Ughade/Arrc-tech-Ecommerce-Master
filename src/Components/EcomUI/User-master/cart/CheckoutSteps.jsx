import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  { id: 1, name: 'Address' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Payment' }
];

export default function CheckoutSteps({ currentStep }) {
  return (
    <div className="mb-12 flex items-center justify-center">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  currentStep >= step.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.id}
              </div>
              <span
                className={`ml-2 ${
                  currentStep >= step.id ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="mx-4 h-[2px] w-16 bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

