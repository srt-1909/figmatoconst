import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';

export default function Header1() {
  return (
    <div className="flex items-center justify-between px-6 py-4 w-full bg-white border-b">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <button>
          <ChevronLeft size={20} />
        </button>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-500">
          <span className="text-black">Deal Overview</span>
          <span className="hover:text-black cursor-pointer">Workshop</span>
          <span className="hover:text-black cursor-pointer">Pipeline</span>
          <span className="hover:text-black cursor-pointer">Settings</span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-1 w-[240px]">
        <FaUserCircle size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Ask me anything!"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section - Underwriting Info */}
      <div className="flex flex-col items-end text-sm">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-[#1c1c4e] flex items-center justify-center text-white text-xs font-semibold">
            {/* Placeholder for Logo/Icon */}
            <span>⛵</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">STARBOARD</span>
        </div>
        <div className="mt-1">
          <div className="text-xs font-semibold">Underwriting Model</div>
          <select className="mt-1 text-xs bg-gray-100 px-2 py-1 rounded focus:outline-none">
            <option>Industrial.Template.v2.4.xlsx</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
}
