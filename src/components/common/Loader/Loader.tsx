import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  fullScreen?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium',
  className = '',
  fullScreen = false,
}) => {
  // Size configurations
  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  // Container classes
  const containerClasses = [
    'flex',
    'justify-center',
    'items-center',
    'p-4',
    fullScreen ? [
      'fixed',
      'top-0',
      'left-0',
      'right-0',
      'bottom-0',
      'bg-white',
      'bg-opacity-80',
      'z-[9999]'
    ] : '',
    className
  ].flat().filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div 
        className={`
          inline-block 
          relative 
          ${sizeStyles[size]}
          border-2 
          border-blue-500 
          border-opacity-20 
          border-t-blue-500 
          rounded-full 
          animate-spin
        `}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;