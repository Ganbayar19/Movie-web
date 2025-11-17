"use client";
import { ChevronDown, Search, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopBar = () => {
  return (
    <div className="w-full bg-white py-3 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-semibold text-[#4338CA]">Movie-Z</h1>
        <div className="flex items-center gap-1 cursor-pointer px-3 py-3 border rounded-lg hover:bg-gray-50">
          <span className="text-sm text-[#18181B]">Genre</span>
          <ChevronDown size={16} />
        </div>
      </div>
      <div className="flex gap-2 w-[379px] items-center justify-center">
        <input type="text" placeholder="search..." className="w-full" />
        <Button variant="outline" className="px-3">
          <Search size={18} />
        </Button>
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer">
          <Moon size={18} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};



export const Footer = () => {
  <div className="fixed bottom-0 left-0 w-full bg-[#4338CA] text-white">
    <div className="max-w-7xl mx-auto px-6 py-8 flex-col md:flex-row justify-between gap-6 items-start">
      <div>
        <h1 className="font-semibold text-lg">Movie Z</h1>
        <p className="text-sm mt-2">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="text-sm">
        <div className="font-semibold mb-2">Contact Information</div>
        <div>Email:support@movieZ.com</div>
        <div>Phone:+976 (11) 123-4567</div>
      </div>
      <div className="text-sm">
        <div className="font-semibold mb-2">Follow us </div>
        <div>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>Twitter</a>
        </div>
      </div>
    </div>
  </div>;
};
