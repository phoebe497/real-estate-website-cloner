'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

import Link from 'next/link'

const ProjectOverview = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const metrics = [
    { label: 'Diện tích', value: '420 ha' },
    { label: 'Số tòa', value: '66' },
    { label: 'Chủ đầu tư', value: 'Tập đoàn Vingroup', href: '/chu-dau-tu-tap-doan-vingroup' },
    { label: 'Pháp lý', value: 'Sổ hồng sở hữu lâu dài' },
  ]

  return (
    <div className="re__project-main-left w-full">
      <div className="re__project-main-number mb-6 grid grid-cols-2 gap-[16px] rounded-[8px] bg-[#FAFAFA] p-[24px]">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-[12px] uppercase text-[#999]">{metric.label}</div>
            {metric.href ? (
              <Link href={metric.href} className="text-[16px] font-semibold text-[#2C2C2C] hover:text-primary transition-colors cursor-pointer">
                {metric.value}
              </Link>
            ) : (
              <div className="text-[16px] font-semibold text-[#2C2C2C]">{metric.value}</div>
            )}
          </div>
        ))}
      </div>

      <div className="re__project-main-content">
        <div
          className={cn(
            'overflow-hidden text-[14px] leading-[24px] text-[#2C2C2C] transition-all duration-300',
            !isExpanded ? 'max-h-[300px]' : 'max-h-none'
          )}
        >
          <p className="mb-4">
            Dự án Vinhomes Ocean Park là đại đô thị do chủ đầu tư Vingroup triển khai trên địa bàn huyện Gia Lâm, Hà Nội với quỹ đất lên tới 420ha. Quy mô dự án gồm 66 tòa chung cư cao 23 - 26 tầng và 2300 căn biệt thự và shophouse.
          </p>
          <p className="mb-4">
            Khu đô thị Vinhomes Ocean Park Gia Lâm được quy hoạch theo mô hình đô thị Singapore, mang đến cho cư dân một môi trường sống lý tưởng cùng những đại tiện ích và cảnh quan quy mô tầm cỡ như: biển hồ nước mặn nhân tạo đầu tiên ở Việt Nam rộng 6.1 ha, hồ lớn trung tâm rộng 24.5 ha, công viên gym ngoài trời với hàng trăm máy tập, công viên BBQ rộng lớn với 117 ha không gian cây xanh xung quanh.
          </p>
          
          <h3 className="mb-2 text-[18px] font-semibold">Vị Trí</h3>
          <p className="mb-4">
            Dự án Vinhomes Ocean Park tọa lạc trên địa phận các xã Dương Xá, Đa Tốn, Kiêu Kỵ, thuộc huyện Gia Lâm, TP. Hà Nội, một trong những vị trí đắc địa của trung tâm huyện Gia Lâm. Tuy không phải là trung tâm thành phố nhưng khu vực này có hệ thống giao thông thuận tiện, nằm gần một số tuyến đường trọng điểm như Ngọc Lâm, Xuân Quan, Nguyễn Văn Cừ nên việc di chuyển vào nội đô rất dễ dàng.
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li>Phía Đông Bắc: Đường quy hoạch rộng 40m</li>
            <li>Phía Đông Nam: Khu dân cư hiện có xã Kiêu Kỵ</li>
            <li>Phía Tây Bắc: Quốc lộ quy hoạch rộng 40m - tuyến đường Đông Dư - Dương Xá</li>
            <li>Phía Tây Nam: Quốc lộ 5B - cao tốc Hà Nội - Hải Phòng</li>
          </ul>

          <h3 className="mb-2 text-[18px] font-semibold">Quy Hoạch</h3>
          <p className="mb-4">
            Vinhomes Ocean Park Gia Lâm được chia thành 2 phân khu chức năng chính gồm Khu chung cư cao tầng và Khu thấp tầng.
          </p>
          <p className="mb-4">
            Khu chung cư: 66 tòa căn hộ, cao từ 26-31 tầng.<br />
            Khu thấp tầng: khoảng 3.000 căn biệt thự, shophouse, shop thương mại dịch vụ và liền kề
          </p>
          <p className="mb-4">
            Khu chung cư cao tầng gồm các phân khu: The Sapphire, The Ocean View, The Metropolitan, Masteri Waterfront
          </p>
          <p className="mb-4">
            <strong>The Sapphire:</strong> là phân khu đầu tiên được bàn giao với 27 toà, gồm 2 tiểu khu nhỏ: Sapphire 1 và Sapphire 2
          </p>
          <p className="mb-4">
            <strong>The Ocean View:</strong> tương ứng với 3 phong cách khác nhau gồm:<br />
            + The Zenpark: 4 tòa căn hộ cao cấp Nhật Bản, đã hoàn thiện và bàn giao.<br />
            + The Pavillion: mang phong cách ốc đảo nghỉ dưỡng Singapore.
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-[14px] font-medium text-[#E03C31] hover:underline"
        >
          {isExpanded ? 'Thu gọn' : 'Xem thêm'}
        </button>
      </div>
    </div>
  )
}

export default ProjectOverview
