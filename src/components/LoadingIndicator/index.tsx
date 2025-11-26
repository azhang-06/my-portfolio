'use client';

interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingIndicator = ({ size = 'md', className = '' }: LoadingIndicatorProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-2',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-deepbrown border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingIndicator;

