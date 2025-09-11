"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";
import AboutBrand from "../components/AboutBrand";
import CoffeeQuiz from "../components/CoffeeQuiz";
import Footer from "../components/Footer";

export default function HomePage() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (productId: number) => {
    setCartItems(cartItems + 1);
    // Here you would typically add the product to a cart state
    // For now, we'll just increment the counter
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <main className="min-h-screen">
      <Navigation cartItems={cartItems} />
      <HeroSection />
      <ProductShowcase onAddToCart={handleAddToCart} />
      <AboutBrand />
      <CoffeeQuiz />
      <Footer />
    </main>
  );
}