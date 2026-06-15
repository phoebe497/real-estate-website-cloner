import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { DeveloperHeader } from '@/components/DeveloperHeader';
import devData from '@/data/batdongsan.com.vn/developer.json';

export default function DeveloperPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-4">
          <DeveloperHeader 
            name={devData.name}
            logo={devData.logo}
            projectsCount={devData.projectsCount}
            description={devData.description}
          />

          <div className="py-8">
            <h2 className="text-xl font-bold mb-6">Các dự án của {devData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devData.projects.map((project, index) => (
                <div key={index} className="re__project-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="bg-secondary h-[180px] w-full flex items-center justify-center text-muted-foreground">
                    Project Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[16px] mb-1 line-clamp-1">{project.name}</h3>
                    <div className="text-[13px] text-muted-foreground mb-2">{project.location}</div>
                    <div className="text-[12px] font-medium text-primary uppercase">{project.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
