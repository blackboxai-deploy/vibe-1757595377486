export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Brew & Bean
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Crafting exceptional coffee experiences with passion, quality, and care since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#quiz" className="hover:text-amber-400 transition-colors">Coffee Quiz</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Coffee</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Ethiopian Highlands</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Colombian Supreme</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Brazilian Santos</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">View All Products</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>123 Coffee St, Bean City</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>hello@brewandbean.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕒</span>
                <span>Mon-Sun: 6AM-8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">
            © 2024 Brew & Bean. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}