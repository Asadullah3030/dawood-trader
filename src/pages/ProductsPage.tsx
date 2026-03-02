// src/pages/ProductsPage.tsx
import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../data/products';
import { useCategories } from '../hooks/useFirebaseData';
import SEO from '../components/SEO';

interface ProductsPageProps {
  onNavigate: (page: string, data?: any) => void;
  onViewProduct: (category: ProductCategory, productId: string) => void;
}

export function ProductsPage({ onNavigate, onViewProduct }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { categories, loading } = useCategories();

  const allProducts = useMemo(() => {
    const products: { product: any; category: ProductCategory }[] = [];
    categories.forEach((category) => {
      category.products.forEach((product) => {
        products.push({ product, category });
      });
    });
    return products;
  }, [categories]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(({ product, category }) => {
      const matchesSearch =
        searchQuery === '' ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || category.id === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProducts, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SEO
        title="All Products - DC Breakers, AC Breakers, Relay Protection, Distribution Boxes"
        description="Browse all electrical products at Dawood Trader. DC breakers, AC breakers, relay protection devices, distribution boxes & more. Best prices in Pakistan with free delivery!"
        keywords="buy DC breaker online, AC breaker price Pakistan, relay protection device, distribution box, electrical products, solar equipment, Dawood Trader products"
        url="/products"
        type="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'All Products', url: '/products' }
        ]}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">All Products</h1>
          <p className="text-emerald-100 text-sm md:text-base">Browse our complete range of electrical products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Search & Filter */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-sm md:text-base placeholder:text-gray-400"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <div className="relative min-w-[180px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all appearance-none bg-white cursor-pointer text-sm md:text-base font-medium text-gray-700"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-gray-500">
              {loading ? (
                <span className="text-gray-400">Loading...</span>
              ) : (
                <>Showing <span className="font-bold text-emerald-600">{filteredProducts.length}</span> products</>
              )}
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="text-sm text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer flex items-center gap-1">
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
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
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(({ product, category }) => (
              <ProductCard
                key={`${category.id}-${product.id}`}
                product={product}
                category={category}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-gray-500 font-medium">Koi product nahi mila</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
