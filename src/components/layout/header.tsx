import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm h-[72px] flex items-center">
      <div className={cn("container max-w-[1140px] mx-auto px-4 flex items-center justify-between")}>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[24px] font-bold text-[#E03C31] tracking-tight">
            Batdongsan.com.vn
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/mua-ban" className="text-sm font-medium hover:text-[#E03C31] transition-colors">
              Mua bán
            </Link>
            <Link href="/cho-thue" className="text-sm font-medium hover:text-[#E03C31] transition-colors">
              Cho thuê
            </Link>
            <Link href="/du-an" className="text-sm font-medium hover:text-[#E03C31] transition-colors">
              Dự án
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* Add more header elements like login/post ad if needed */}
        </div>
      </div>
    </header>
  );
}
