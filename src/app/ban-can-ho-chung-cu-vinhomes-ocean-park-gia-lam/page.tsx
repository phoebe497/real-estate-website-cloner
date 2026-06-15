import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FilterBar } from '@/components/FilterBar';
import { ListingCard } from '@/components/ListingCard';
import listingsData from '@/data/batdongsan.com.vn/apartments.json';

export default function ApartmentListingsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-secondary/30">
        <FilterBar />
        
        <div className="re__container-sm max-w-[1200px] mx-auto px-4 py-6">
          <div className="re__main-content-layout flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <div className="re__main-left flex-1">
              <h1 className="text-xl font-bold mb-4 uppercase">
                Bán căn hộ chung cư Vinhomes Ocean Park Gia Lâm
              </h1>
              <div className="text-sm text-muted-foreground mb-6">
                Hiện có {listingsData.length} tin rao bán
              </div>

              <div className="re__listing-list">
                {listingsData.map((listing, index) => (
                  <ListingCard 
                    key={index}
                    title={listing.title}
                    price={listing.price}
                    area={listing.area}
                    location={listing.location}
                    description={listing.description}
                    image={listing.image}
                    publishedDate={listing.publishedDate}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="re__main-right hidden lg:block w-[300px]">
              <div className="bg-background border border-border p-4 rounded-lg sticky top-[80px]">
                <h3 className="font-bold mb-3 border-b border-border pb-2">Lọc theo dự án</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-primary font-medium">Vinhomes Ocean Park (All)</li>
                  <li className="hover:text-primary cursor-pointer">The Sapphire</li>
                  <li className="hover:text-primary cursor-pointer">The Ruby</li>
                  <li className="hover:text-primary cursor-pointer">Masteri Waterfront</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
