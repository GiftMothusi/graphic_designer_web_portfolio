import React from 'react';
import { cn } from '@/utils/cn';

interface TextBannerProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  withDivider?: boolean;
}

const TextBanner = ({ 
  text, 
  size = 'large',
  className,
  withDivider = false 
}: TextBannerProps) => {
  const sizeClasses = {
    small: 'text-[80px] md:text-[100px]',
    medium: 'text-[120px] md:text-[150px]',
    large: 'text-[160px] md:text-[200px]'
  };

  return (
    <div className={cn(
      'w-full min-h-[50vh] flex flex-col items-center justify-center bg-white relative overflow-hidden',
      className
    )}>
      <h1 className={cn(
        'font-bold text-center leading-none tracking-tighter',
        sizeClasses[size],
        'transition-all duration-500 ease-in-out'
      )}>
        {text}
      </h1>
      
      {withDivider && (
        <div className="w-24 h-1 bg-black mt-8 mb-4 rounded-full" />
      )}
    </div>
  );
};

export default TextBanner;