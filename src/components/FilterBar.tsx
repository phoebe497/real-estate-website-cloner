import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FilterBar() {
  const filters = [
    "Tất cả nhà đất",
    "Khu vực & Dự án",
    "Mức giá",
    "Diện tích"
  ];

  return (
    <div className="re__advanced-filter-modal-container bg-background border-b border-border p-4 sticky top-0 z-40">
      <div className="re__filter-group grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-[1200px] mx-auto">
        <div className="hidden lg:flex items-center border border-border rounded px-3 py-2 bg-secondary">
          <Search className="w-4 h-4 text-muted-foreground mr-2" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="bg-transparent border-none outline-none text-[14px] w-full"
          />
        </div>
        
        {filters.map((filter, index) => (
          <div 
            key={index}
            className="re__filter-item border border-border rounded flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-secondary transition-colors"
          >
            <span className="text-[14px] truncate">{filter}</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground ml-1 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
