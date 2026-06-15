import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ProjectAlbum = () => {
  return (
    <div 
      className={cn(
        "re__project-album-container",
        "relative w-full md:w-[1141px] h-[250px] md:h-[362px] overflow-hidden"
      )}
    >
      <div 
        className={cn(
          "re__project-album",
          "grid grid-cols-1 md:grid-cols-[609px_264px_264px] md:grid-rows-[179px_179px] gap-[2px] w-full h-full"
        )}
      >
        {/* Main big image */}
        <div className="relative row-span-1 md:row-span-2 col-span-1">
          <Image
            src="/images/20250610160442-5cbb_wm.jpg"
            alt="Vinhomes Ocean Park Gia Lâm"
            fill
            sizes="(max-width: 768px) 100vw, 609px"
            className="object-cover"
            priority
          />
        </div>

        {/* Small images - Hidden on mobile */}
        <div className="relative hidden md:block">
          <Image
            src="/images/20250610160438-3330_wm.jpg"
            alt="Project Detail 1"
            fill
            sizes="264px"
            className="object-cover"
          />
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/images/20250610160435-5b09_wm.jpg"
            alt="Project Detail 2"
            fill
            sizes="264px"
            className="object-cover"
          />
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/images/20240712141326-1386_wm.jpg"
            alt="Project Detail 3"
            fill
            sizes="264px"
            className="object-cover"
          />
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/images/20240712122229-2d1a_wm.jpg"
            alt="Project Detail 4"
            fill
            sizes="264px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Tag Overlay */}
      <div 
        className={cn(
          "re__prj-tag-info",
          "absolute top-[16px] left-[16px] bg-[#07A35D] text-white px-[12px] py-[6px] rounded-[2px] text-[12px] font-medium leading-[16px]"
        )}
      >
        Đang mở bán
      </div>

      {/* Info Details Overlay */}
      <div 
        className={cn(
          "re__project-info-details",
          "absolute bottom-[16px] left-[16px] bg-[rgba(0,0,0,0.6)] text-white p-[12px] rounded-[4px]"
        )}
      >
        <span className="text-[14px] leading-[20px]">420 ha</span>
      </div>

      {/* Summary Overlay */}
      <div 
        className={cn(
          "re__project-album-summary",
          "absolute bottom-[16px] right-[16px] bg-[rgba(0,0,0,0.6)] text-white px-[12px] py-[6px] rounded-[16px] text-[14px] leading-[20px]"
        )}
      >
        <span>19</span>
      </div>
    </div>
  );
};

export default ProjectAlbum;
