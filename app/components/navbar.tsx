"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">SkillsCapital</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5">
            {/* Dropdown Example */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-xs font-medium">
                SAP Talent Cloud
                <ChevronDown strokeWidth={3} className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-xs font-medium">
                Enterprise Talent Cloud
                <ChevronDown strokeWidth={3} className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-xs font-medium">
                AI-Powered Vetting
                <ChevronDown strokeWidth={3} className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-xs font-medium">
                Tech Talent Solutions
                <ChevronDown strokeWidth={3} className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-xs font-medium">
                About Us
                <ChevronDown strokeWidth={3} className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <button className="flex items-center cursor-pointer text-sm border text-black font-medium px-4 py-2 rounded-full">
              Find Talent
              <div className="bg-yellow-400 rounded-full p-1 ml-2">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                SAP Talent Cloud
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Enterprise Talent Cloud
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                AI-Powered Vetting
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Tech Talent Solutions
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                About Us
              </a>
              <button className="flex items-center cursor-pointer text-sm border text-black font-medium px-4 py-2 rounded-full">
                Find Talent
                <div className="bg-yellow-400 rounded-full p-1 ml-2">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
