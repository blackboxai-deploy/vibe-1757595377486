"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  alt: string;
  origin: string;
  roastLevel: string;
}

interface ProductShowcaseProps {
  onAddToCart: (productId: number) => void;
}

export default function ProductShowcase({ onAddToCart }: ProductShowcaseProps) {
  const products: Product[] = [
    {
      id: 1,
      name: "Ethiopian Highlands",
      description: "Bright and fruity with notes of blueberry and chocolate. Single-origin from the birthplace of coffee.",
      price: 24.99,
      rating: 4.9,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ac489a4-c9eb-498e-884d-a3ee0a7468b7.png",
      alt: "Premium Ethiopian coffee beans in elegant packaging, single origin from highlands",
      origin: "Ethiopia",
      roastLevel: "Medium"
    },
    {
      id: 2,
      name: "Colombian Supreme",
      description: "Rich and balanced with caramel sweetness and nutty undertones. Perfect for espresso or drip brewing.",
      price: 22.99,
      rating: 4.8,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa682de4-a135-4006-8a6a-1cc17b71db93.png",
      alt: "Colombian coffee beans, premium roasted with rich caramel notes, supreme quality",
      origin: "Colombia",
      roastLevel: "Medium-Dark"
    },
    {
      id: 3,
      name: "Brazilian Santos",
      description: "Smooth and creamy with low acidity. A crowd-pleaser that works beautifully in milk-based drinks.",
      price: 19.99,
      rating: 4.7,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a46e8b5c-9b18-4885-887f-415dcbd61713.png",
      alt: "Brazilian Santos coffee beans with smooth, creamy texture, perfect for lattes",
      origin: "Brazil",
      roastLevel: "Medium"
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-amber-500 text-lg">★</span>
        ))}
        {hasHalfStar && <span className="text-amber-500 text-lg">☆</span>}
        <span className="ml-2 text-stone-600 text-sm font-medium">({rating})</span>
      </div>
    );
  };

  return (
    <section id="products" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Premium Coffee Collection
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of single-origin coffees, 
            each with its own unique character and story.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group bg-white border-stone-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.roastLevel}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display' }}>
                    {product.name}
                  </CardTitle>
                  <span className="text-sm text-stone-500 font-medium">{product.origin}</span>
                </div>
                
                {renderStars(product.rating)}
                
                <CardDescription className="text-stone-600 mt-3 leading-relaxed">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="text-2xl font-bold text-amber-800">
                    ${product.price}
                  </div>
                  
                  <Button
                    onClick={() => onAddToCart(product.id)}
                    className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 font-semibold transition-colors duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}