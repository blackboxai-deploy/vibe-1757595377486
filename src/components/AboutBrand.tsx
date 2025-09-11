import { Card, CardContent } from "./ui/card";

export default function AboutBrand() {
  const features = [
    {
      icon: "☕",
      title: "Premium Quality",
      description: "We source our beans directly from sustainable farms, ensuring the highest quality and ethical practices. Each batch is carefully roasted to perfection."
    },
    {
      icon: "🏠",
      title: "Welcoming Atmosphere",
      description: "Our warm, inviting space is designed for connection and comfort. Whether you're working, meeting friends, or enjoying a quiet moment, we've created the perfect environment."
    },
    {
      icon: "👤",
      title: "Personalized Service",
      description: "Every customer is unique, and so are their coffee preferences. Our team takes time to understand your taste and recommend the perfect coffee experience for you."
    },
    {
      icon: "🎓",
      title: "Expert Baristas",
      description: "Our professionally trained baristas are passionate about coffee craftsmanship. With years of experience and ongoing training, they ensure every cup meets our exacting standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
            The Brew & Bean Difference
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            More than just a coffee shop, we're a community dedicated to crafting exceptional experiences. 
            Every cup tells a story of passion, quality, and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-stone-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
                Our Story
              </h3>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Founded with a simple belief that great coffee brings people together, Brew & Bean started 
                  as a dream to create something special in our community. We began by traveling to coffee 
                  farms around the world, building relationships with growers who share our commitment to quality.
                </p>
                <p>
                  Today, we're proud to serve coffee that not only tastes exceptional but also supports 
                  sustainable farming practices and fair trade. Every cup you enjoy contributes to a better 
                  future for coffee communities worldwide.
                </p>
                <p>
                  Our journey continues to evolve, but our core values remain unchanged: exceptional quality, 
                  genuine hospitality, and a commitment to making every visit memorable.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52fb6747-21c0-4044-9773-9e2ac8373931.png"
                alt="Coffee shop owner and barista team smiling behind counter with warm, welcoming atmosphere"
                className="rounded-xl shadow-lg w-full"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-800">5+</div>
                    <div className="text-sm text-stone-600">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-800">10K+</div>
                    <div className="text-sm text-stone-600">Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-800">15</div>
                    <div className="text-sm text-stone-600">Origins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}