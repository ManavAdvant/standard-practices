import React from 'react';
import { cn } from '@/utils/time';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Spinning Circle Loader
export const SpinnerLoader: React.FC<LoaderProps> = ({
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
        sizeClasses[size],
        className,
      )}
    />
  );
};

// Dots Loader
export const DotsLoader: React.FC<LoaderProps> = ({
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-2 w-2',
    lg: 'h-3 w-3',
  };

  return (
    <div className={cn('flex space-x-1', className)}>
      <div
        className={cn(
          'bg-blue-600 rounded-full animate-bounce',
          sizeClasses[size],
        )}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={cn(
          'bg-blue-600 rounded-full animate-bounce',
          sizeClasses[size],
        )}
        style={{ animationDelay: '150ms' }}
      />
      <div
        className={cn(
          'bg-blue-600 rounded-full animate-bounce',
          sizeClasses[size],
        )}
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
};

// Pulse Loader
export const PulseLoader: React.FC<LoaderProps> = ({
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div
      className={cn(
        'bg-blue-600 rounded-full animate-pulse',
        sizeClasses[size],
        className,
      )}
    />
  );
};

// Skeleton Loader
export const SkeletonLoader: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 3, className }) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded animate-pulse"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

// Progress Bar Loader
export const ProgressLoader: React.FC<{
  progress?: number;
  className?: string;
}> = ({ progress = 0, className }) => {
  return (
    <div className={cn('w-full bg-gray-200 rounded-full h-2', className)}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Loading Screen Component
export const LoadingScreen: React.FC<{
  message?: string;
  className?: string;
}> = ({ message = 'Loading...', className }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50',
        className,
      )}
    >
      <SpinnerLoader size="lg" />
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </div>
  );
};

// Button Loading State
export const ButtonLoader: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <SpinnerLoader size="sm" />
      <span>Loading...</span>
    </div>
  );
};
