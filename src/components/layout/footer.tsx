import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#F2F2F2] py-12 border-t">
      <div className={cn("container max-w-[1140px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8")}>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">About</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="text-sm text-gray-600 hover:text-[#E03C31]">About Us</Link></li>
            <li><Link href="/contact" className="text-sm text-gray-600 hover:text-[#E03C31]">Contact</Link></li>
            <li><Link href="/careers" className="text-sm text-gray-600 hover:text-[#E03C31]">Careers</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">Help</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/faq" className="text-sm text-gray-600 hover:text-[#E03C31]">FAQ</Link></li>
            <li><Link href="/support" className="text-sm text-gray-600 hover:text-[#E03C31]">Support</Link></li>
            <li><Link href="/guides" className="text-sm text-gray-600 hover:text-[#E03C31]">User Guides</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">Terms</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/terms" className="text-sm text-gray-600 hover:text-[#E03C31]">Terms of Use</Link></li>
            <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-[#E03C31]">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="text-sm text-gray-600 hover:text-[#E03C31]">Cookie Policy</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">Social</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="https://facebook.com" className="text-sm text-gray-600 hover:text-[#E03C31]">Facebook</Link></li>
            <li><Link href="https://youtube.com" className="text-sm text-gray-600 hover:text-[#E03C31]">YouTube</Link></li>
            <li><Link href="https://linkedin.com" className="text-sm text-gray-600 hover:text-[#E03C31]">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="container max-w-[1140px] mx-auto px-4 mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Batdongsan.com.vn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
