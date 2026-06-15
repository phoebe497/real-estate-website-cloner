'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

import Link from 'next/link'

const navigationTabs = [
  { label: 'Bán & Cho thuê', href: '/ban-can-ho-chung-cu-vinhomes-ocean-park-gia-lam' },
  { label: 'Tổng quan', href: '#tong-quan' },
  { label: 'Mặt bằng dự án', href: '#mat-bang' },
  { label: 'Vị trí', href: '#vi-tri' },
  { label: 'Dự án liên quan', href: '#du-an-lien-quan' },
]

const ProjectNavigation = () => {
  const [activeTab, setActiveTab] = useState('Tổng quan')

  return (
    <div className="re__project-navigation sticky top-0 z-50 h-[84px] bg-[#FFF] shadow-[0_1px_0_0_#F2F2F2]">
      <div className="re__project-navigation__container mx-auto flex h-full w-[1140px] items-center">
        <ul className="flex list-none p-0 m-0 overflow-x-auto no-scrollbar">
          {navigationTabs.map((tab) => (
            <li key={tab.label} className="whitespace-nowrap">
              {tab.href.startsWith('/') ? (
                <Link
                  href={tab.href}
                  className={cn(
                    'inline-block px-0 py-[20px] mx-[16px] text-[14px] font-medium text-[#2C2C2C] hover:text-[#E03C31] transition-colors relative cursor-pointer',
                    activeTab === tab.label && 'text-[#E03C31] border-b-2 border-b-[#E03C31]'
                  )}
                >
                  {tab.label}
                </Link>
              ) : (
                <a
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(tab.label)
                  }}
                  className={cn(
                    'inline-block px-0 py-[20px] mx-[16px] text-[14px] font-medium text-[#2C2C2C] hover:text-[#E03C31] transition-colors relative cursor-pointer',
                    activeTab === tab.label && 'text-[#E03C31] border-b-2 border-b-[#E03C31]'
                  )}
                >
                  {tab.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectNavigation
