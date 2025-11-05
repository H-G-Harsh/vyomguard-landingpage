import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export default function Card({ children, hoverable = true, className = '' }: CardProps) {
  const hoverStyles = hoverable
    ? 'hover:border-accent hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20'
    : '';

  return (
    <div
      className={`bg-background-secondary border border-foreground-secondary/20 rounded-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
