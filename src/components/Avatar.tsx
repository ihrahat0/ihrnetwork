import React from 'react';
import { cn } from '../utils/cn';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline';
  className?: string;
}

export function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  status, 
  className 
}: AvatarProps) {
  return (
    <div className="relative">
      <img 
        src={src} 
        alt={alt}
        className={cn(
          'rounded-full object-cover',
          size === 'sm' && 'w-8 h-8',
          size === 'md' && 'w-12 h-12',
          size === 'lg' && 'w-16 h-16',
          className
        )}
      />
      {status && (
        <div className={cn(
          'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white',
          status === 'online' ? 'bg-green-500' : 'bg-gray-400'
        )}></div>
      )}
    </div>
  );
}