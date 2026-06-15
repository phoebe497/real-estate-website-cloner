import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "IA25 Ciputra", image: "/images/20210624093510-c4e0.jpg" },
  { id: 2, title: "JSC 34", image: "/images/20210624093529-b62f.jpg" },
  { id: 3, title: "C13 Khuyến Lương", image: "/images/20210624093558-30f8.jpg" },
  { id: 4, title: "Sunshine Continental", image: "/images/20210624093655-678b.jpg" },
];

export const RelatedProjects = () => {
  return (
    <div className={cn("re__project-related bg-white py-10 w-full")}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Dự án liên quan</h2>
        <div className="re__related-list flex overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="re__card flex-shrink-0 w-[260px] mr-4 border border-[#E5E5E5] rounded-lg overflow-hidden bg-white"
            >
              <Link href={`/du-an/${project.id}`}>
                <div className="relative h-[180px] w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#2C2C2C] line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
