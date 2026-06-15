import React from 'react';
import { cn } from "@/lib/utils";

import Link from 'next/link';

export const ProjectSidebar = () => {
  return (
    <div className={cn("project-main-right w-full md:w-[363px] space-y-6")}>
      <div className="re__contact-form p-6 border border-[#E5E5E5] rounded-lg bg-white shadow-sm">
        <h3 className="text-[18px] font-semibold text-[#2C2C2C] mb-4">
          Nhận tư vấn
        </h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Họ và tên" 
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#E03C31] text-[14px]"
          />
          <input 
            type="tel" 
            placeholder="Số điện thoại" 
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#E03C31] text-[14px]"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#E03C31] text-[14px]"
          />
          <button 
            type="button"
            className="w-full p-3 bg-[#E03C31] text-white font-semibold rounded hover:bg-[#c9352b] transition-colors"
          >
            Gửi thông tin
          </button>
        </div>
      </div>

      <div className="re__quick-links p-6 border border-[#E5E5E5] rounded-lg bg-white shadow-sm">
        <h3 className="text-[18px] font-semibold text-[#2C2C2C] mb-4">
          Tin rao trong dự án
        </h3>
        <ul className="space-y-3">
          <li>
            <Link href="/ban-can-ho-chung-cu-vinhomes-ocean-park-gia-lam" className="text-[14px] text-[#2C2C2C] hover:text-[#E03C31] flex items-center justify-between group">
              <span>Bán căn hộ chung cư</span>
              <span className="text-[12px] bg-secondary px-2 py-0.5 rounded text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">Xem ngay</span>
            </Link>
          </li>
          <li>
            <Link href="/ban-nha-biet-thu-lien-ke-vinhomes-ocean-park-gia-lam" className="text-[14px] text-[#2C2C2C] hover:text-[#E03C31] flex items-center justify-between group">
              <span>Bán nhà biệt thự liền kề</span>
              <span className="text-[12px] bg-secondary px-2 py-0.5 rounded text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">Xem ngay</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectSidebar;
