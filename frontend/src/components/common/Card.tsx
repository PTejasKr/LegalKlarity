import React, { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hover';
}

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden';
  
  const variantClasses = {
    default: baseClasses,
    hover: `${baseClasses} hover:shadow-md transition`,
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
