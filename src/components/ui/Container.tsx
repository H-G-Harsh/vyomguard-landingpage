import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-24 xl:px-32 ${className}`}>
      {children}
    </div>
  );
}

