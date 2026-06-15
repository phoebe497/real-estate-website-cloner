import React from 'react';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ListingCardProps {
  title: string;
  price: string;
  area: string;
  location: string;
  description: string;
  image: string;
  publishedDate?: string;
  className?: string;
}

export function ListingCard({
  title,
  price,
  area,
  location,
  description,
  image,
  publishedDate,
  className
}: ListingCardProps) {
  return (
    <div className={cn(
      "re__card-full-container flex flex-col md:flex-row border border-border rounded-lg overflow-hidden mb-4 transition-shadow hover:shadow-lg",
      className
    )}>
      {/* Image Section */}
      <div className="re__card-image relative w-full md:w-[200px] h-[150px] flex-shrink-0">
        <Image
          src={image || '/images/listing-placeholder.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="re__card-info flex-1 p-3 md:p-4 flex flex-col justify-between">
        <div>
          <h3 className="re__card-title text-[14px] font-bold leading-5 text-foreground uppercase mb-2 hover:text-primary transition-colors cursor-pointer line-clamp-2">
            {title}
          </h3>
          
          <div className="re__card-config flex items-center gap-4 mb-2">
            <span className="re__card-config-price text-[16px] font-bold text-primary">
              {price}
            </span>
            <span className="re__card-config-area text-[14px] text-muted-foreground">
              {area}
            </span>
          </div>

          <div className="re__card-location flex items-center gap-1 text-[13px] text-muted-foreground mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{location}</span>
          </div>

          <p className="re__card-description text-[14px] text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
        </div>

        <div className="re__card-published-info flex items-center justify-between mt-auto">
          <span className="re__card-published-info-published-at text-[12px] text-muted-foreground">
            {publishedDate}
          </span>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Heart className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
