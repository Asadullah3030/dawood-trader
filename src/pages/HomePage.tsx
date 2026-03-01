/**
 * ============================================
 * HOME PAGE COMPONENT
 * ============================================
 * 
 * SEO IMPLEMENTATION:
 * - Dynamic meta tags via SEO component
 * - Optimized title with primary keywords
 * - Meta description under 160 characters
 * - Open Graph tags for social sharing
 * - Structured data for Organization
 * 
 * TARGET KEYWORDS:
 * - Dawood Trader
 * - Solar products Pakistan
 * - Electrical equipment
 * - DC breaker, AC breaker
 * - Free delivery
 */

import { ProductCard } from '../components/ProductCard';
import { homeProducts, allCategories, ProductCategory } from '../data/products';
import SEO from '../components/SEO';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
  onViewProduct: (category: ProductCategory, productId: string) => void;
}

export function HomePage({ onNavigate, onViewProduct }: HomePageProps) {
  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'Genuine & Branded Products',
      description: 'We deal only in authentic, high-quality brands to ensure durability and safety.'
    },
    {
      icon: '📦',
      title: 'Wide Product Range',
      description: 'From voltage protection relays to electrical accessories, we provide a one-stop solution.'
    },
    {
      icon: '💡',
      title: 'Expert Guidance',
      description: 'Our team provides professional advice and technical support for product selection.'
    },
    {
      icon: '💰',
      title: 'Competitive Prices',
      description: 'Best market rates without compromising on quality, maximum value for your money.'
    },
    {
      icon: '⭐',
      title: 'Customer Satisfaction First',
      description: 'Your trust is our priority. Warranties, guarantees, and after-sales support.'
    },
    {
      icon: '🤝',
      title: '2 Years of Trust',
      description: 'Dawood Trader has built a reputation for honesty and long-term relationships.'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ============================================ */}
      {/* SEO COMPONENT - Home Page Meta Tags */}
      {/* ============================================ */}
      <SEO
        title="Solar Products, Breakers & Electrical Equipment Pakistan"
        description="Dawood Trader - Pakistan's #1 supplier of solar panels, DC/AC breakers, relay protection, distribution boxes. Free delivery & 20% OFF! Call: 0306-1339140"
        keywords="Dawood Trader, solar products Pakistan, DC breaker, AC breaker, relay protection, distribution box, electrical equipment, solar panels, inverters, Rahim Yar Khan, free delivery, wholesale electronics"
        url="/"
        type="website"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              Solar & Electronics Supplier
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Stop Paying High Bills
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Start Saving with Solar!</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-medium">
              Save Money, Get Quality – Shop Solar & Electronics Now with{' '}
              <span className="font-bold text-yellow-300 text-2xl">20% OFF!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={() => onNavigate('products')}
                className="cursor-pointer bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-105 text-base"
              >
                🛒 Shop Now
              </button>
              <a
                href="https://wa.me/923061339140"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30 flex items-center justify-center gap-2 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Categories</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">Shop by Category</h2>
            <p className="text-gray-500 mt-3 text-base">Browse our wide range of electrical products</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate('category', category)}
                className="cursor-pointer group bg-white p-5 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm font-bold text-gray-700 text-center group-hover:text-emerald-600 transition-colors">{category.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🔥 Hot Deals</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">Featured Products</h2>
            <p className="text-gray-500 mt-3 text-base">Best selling products with great discounts</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {homeProducts.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                category={item.category}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-300/40 hover:shadow-emerald-400/50 hover:scale-105"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Why Us?</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">Why Choose Us</h2>
            <p className="text-gray-500 mt-3 text-base">At Dawood Trader, we offer comprehensive solutions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-7 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full">About Us</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-tight">Your Trusted Partner for Solar & Electronics</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                <strong className="text-emerald-600">Dawood Trader</strong> is your trusted partner for high-quality solar and electronic products. We are committed to providing our customers with the best solutions to help them save money and reduce their energy bills.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Our extensive range of products includes solar panels, inverters, batteries, and other essential accessories, all sourced from reputable manufacturers to ensure reliability and performance.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="cursor-pointer inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 text-base hover:gap-3 transition-all"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://ik.imagekit.io/dawoodtraders/About-us-imag.png?updatedAt=1759056897852"
                  alt="About Dawood Trader"
                  className="w-full h-full object-cover"
                />
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

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-5">Ready to Get Started?</h2>
          <p className="text-emerald-100 mb-10 max-w-2xl mx-auto text-lg">
            Contact us today to learn more about our services and how we can assist you in achieving your energy goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/923061339140"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/30 hover:scale-105"
            >
              Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
