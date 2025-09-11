"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface NavigationProps {
  cartItems: number;
}

export default function Navigation({ cartItems }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-800" style={{ fontFamily: 'Playfair Display' }}>
              Brew & Bean
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#products" className="text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#about" className="text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#quiz" className="text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium transition-colors">
                Find My Coffee
              </a>
            </div>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              className="relative border-amber-800 text-amber-800 hover:bg-amber-50"
            >
              <span className="text-lg">🛒</span>
              <span className="ml-2">Cart</span>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-800 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItems}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-700"
              >
                <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
              <a href="#home" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#products" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">
                Products
              </a>
              <a href="#about" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#quiz" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">
                Find My Coffee
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}