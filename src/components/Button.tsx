import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'w-full py-3 rounded-xl transition-all font-medium',
        variant === 'primary' && 'bg-[#c8e06c] hover:bg-[#bdd456] text-gray-900',
        variant === 'secondary' && 'bg-gray-100 hover:bg-gray-200 text-gray-900',
        variant === 'outline' && 'border border-gray-200 hover:bg-gray-50 text-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}