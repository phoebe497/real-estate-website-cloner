import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Breadcrumb = () => {
  const items = [
    { label: 'Dự án', href: '#' },
    { label: 'Hà Nội', href: '#' },
    { label: 'Gia Lâm', href: '#' },
    { label: 'Căn hộ chung cư Vinhomes Ocean Park Gia Lâm', href: '#' },
  ];

  return (
    <div 
      className={cn(
        "re__project-breadcrumb",
        "m-[24px_70px_8px] w-[1140px] text-[14px] font-sans"
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link 
            href={item.href}
            className={cn(
              "re__link-se",
              "text-black no-underline hover:text-[#E03C31] hover:underline transition-colors duration-200"
            )}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <span className="mx-1 text-[rgb(153,153,153)]">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
