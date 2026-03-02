// src/pages/HomePage.tsx
import { useCategories } from '../hooks/useFirebaseData';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../data/products';
import SEO from '../components/SEO';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
  onViewProduct: (category: ProductCategory, productId: string) => void;
}

export function HomePage({ onNavigate, onViewProduct }: HomePageProps) {
  const { categories, loading } = useCategories();

  // Har category ka pehla product home page pe dikhao
  const homeProducts = categories
    .filter(cat => cat.products.length > 0)
    .map(cat => ({ ...cat.products[0], category: cat }))
    .slice(0, 6);

  const whyChooseUs = [
    { icon: '🏆', title: 'Genuine & Branded Products', description: 'We deal only in authentic, high-quality brands to ensure durability and safety.' },
    { icon: '📦', title: 'Wide Product Range', description: 'From voltage protection relays to electrical accessories, we provide a one-stop solution.' },
    { icon: '💡', title: 'Expert Guidance', description: 'Our team provides professional advice and technical support for product selection.' },
    { icon: '💰', title: 'Competitive Prices', description: 'Best market rates without compromising on quality, maximum value for your money.' },
    { icon: '⭐', title: 'Customer Satisfaction First', description: 'Your trust is our priority. Warranties, guarantees, and after-sales support.' },
    { icon: '🤝', title: '2 Years of Trust', description: 'Dawood Trader has built a reputation for honesty and long-term relationships.' }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Solar Products, Breakers & Electrical Equipment Pakistan"
        description="Dawood Trader - Pakistan's #1 supplier of solar panels, DC/AC breakers, relay protection, distribution boxes. Free delivery & 20% OFF!"
        keywords="solar products Pakistan, DC breaker, AC breaker, relay protection, distribution box, electrical equipment, Dawood Trader, Rahim Yar Khan"
        url="/"
        type="website"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            20% Discount on All Products!
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Pakistan's Trusted<br />
            <span className="text-yellow-400">Electrical Products</span> Supplier
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            DC/AC Breakers, Relay Protection, Distribution Boxes & More — Quality Products, Best Prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('products')} className="cursor-pointer bg-white text-emerald-700 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/30 hover:scale-105 text-lg">
              Shop Now
            </button>
            <a href="https://wa.me/923061339140" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-4 rounded-2xl hover:bg-green-600 transition-all shadow-xl hover:scale-105 text-lg flex items-center justify-center gap-2">
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">Shop by Category</h2>
            <p className="text-gray-500">Browse our product categories</p>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-2xl p-4 animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onNavigate('category', cat)}
                  className="cursor-pointer group bg-gradient-to-br from-gray-50 to-emerald-50 hover:from-emerald-50 hover:to-teal-50 border-2 border-transparent hover:border-emerald-200 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-square mb-3 overflow-hidden rounded-xl bg-white shadow-sm">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-sm font-bold text-gray-700 group-hover:text-emerald-700 transition-colors line-clamp-2">{cat.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{cat.products.length} products</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1">Featured Products</h2>
              <p className="text-gray-500">Best selling items</p>
            </div>
            <button onClick={() => onNavigate('products')} className="cursor-pointer text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 text-sm">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
                  <div className="aspect-square bg-gray-200" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {homeProducts.map((item) => (
                <ProductCard
                  key={`${item.category.id}-${item.id}`}
                  product={item}
                  category={item.category}
                  onViewProduct={onViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">Why Choose Dawood Trader?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">About Dawood Trader</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to providing our customers with the best solutions to help them save money and reduce their energy bills.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our extensive range of products includes solar panels, inverters, batteries, and other essential accessories, all sourced from reputable manufacturers to ensure reliability and performance.
              </p>
              <button onClick={() => onNavigate('about')} className="cursor-pointer inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 text-base hover:gap-3 transition-all">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://ik.imagekit.io/dawoodtraders/About-us-imag.png?updatedAt=1759056897852" alt="About Dawood Trader" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-extrabold">2+</p>
                <p className="text-emerald-100 font-medium">Years of Trust</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-xl">
                <p className="text-xl font-extrabold">20%</p>
                <p className="text-yellow-100 text-sm font-medium">OFF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-5">Ready to Get Started?</h2>
          <p className="text-emerald-100 mb-10 max-w-2xl mx-auto">Contact us today to learn more about our services and how we can assist you in achieving your energy goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="cursor-pointer bg-white text-emerald-700 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl hover:scale-105">
              Contact Us
            </button>
            <a href="https://wa.me/923061339140" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
