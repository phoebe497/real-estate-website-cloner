import React from 'react';
import Link from 'next/link';
import { MapPin, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ProjectHeading = () => {
  return (
    <div 
      className={cn(
        "re__project-heading",
        "relative m-[0_0_24px] w-[1141px] font-sans"
      )}
    >
      <h1 
        className={cn(
          "re__project-name",
          "text-[32px] font-semibold font-heading leading-[40px] text-black"
        )}
      >
        Vinhomes Ocean Park Gia Lâm
      </h1>
      
      <div 
        className={cn(
          "re__project-address",
          "mt-2 text-[14px] text-[rgb(44,44,44)] flex items-center gap-2"
        )}
      >
        <MapPin size={16} />
        <span>Xã Đa Tốn, Kiêu Kỵ, Dương Xá và thị trấn Trâu Quỳ, Gia Lâm, Hà Nội.</span>
        <Link 
          href="#"
          className={cn(
            "re__link-se",
            "text-black no-underline hover:text-[#E03C31] font-medium ml-1"
          )}
        >
          Xem bản đồ
        </Link>
      </div>

      <div 
        className={cn(
          "re__project-sharing",
          "absolute top-0 right-0 px-4 py-2 border border-[rgb(229,229,229)] rounded-[4px] cursor-pointer flex items-center gap-2 bg-white hover:bg-[#F2F2F2] transition-colors duration-200"
        )}
      >
        <Share2 size={20} />
        <span className="text-[14px] font-medium">Chia sẻ</span>
      </div>
    </div>
  );
};

export default ProjectHeading;
