import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-900 via-stone-800 to-amber-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/abfd4f5e-50cf-4c13-8536-1b095b134c97.png" 
          alt="Cozy coffee shop interior with warm lighting and barista preparing coffee in premium atmosphere"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-stone-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            Craft Your Perfect 
            <span className="text-amber-200 block">Coffee Moment</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-stone-200 mb-8 leading-relaxed font-light">
            Experience the artistry of premium coffee, expertly crafted by passionate baristas. 
            From single-origin beans to personalized brewing methods, discover your ideal coffee journey 
            in our welcoming atmosphere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold border-2 border-transparent transition-all duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Premium Coffee
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find My Coffee
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-amber-200/20">
            <div className="flex items-center gap-2 text-amber-200">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <span className="text-2xl">☕</span>
              <span className="font-semibold">Premium Beans</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">Expert Baristas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stone-50 to-transparent"></div>
    </section>
  );
}