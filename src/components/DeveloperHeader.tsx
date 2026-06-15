import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface DeveloperHeaderProps {
  name: string;
  logo: string;
  projectsCount: string;
  description: string;
  className?: string;
}

export function DeveloperHeader({
  name,
  logo,
  projectsCount,
  description,
  className
}: DeveloperHeaderProps) {
  return (
    <div className={cn("re__developer-header flex flex-col md:flex-row items-center gap-6 py-8 border-b border-border", className)}>
      <div className="re__developer-header-logo relative w-[100px] h-[100px] rounded-full border border-border overflow-hidden bg-white flex-shrink-0">
        <Image
          src={logo || '/images/vingroup-logo.png'}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>
      
      <div className="re__developer-header-info flex-1 text-center md:text-left">
        <h1 className="re__developer-header-title text-2xl font-bold text-foreground mb-1">
          {name}
        </h1>
        <div className="re__developer-header-count text-primary font-medium mb-3">
          {projectsCount} Dự án
        </div>
        <p className="re__developer-description text-muted-foreground text-[14px] leading-relaxed max-w-[800px]">
          {description}
        </p>
      </div>
    </div>
  );
}
