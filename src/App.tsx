import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { ProductCategory, allCategories } from './data/products';

// ============================================
// URL <-> PAGE STATE MAPPING
// ============================================

interface PageState {
  page: string;
  data?: any;
}

/**
 * URL se PageState parse karo
 */
function parseUrl(): PageState {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return { page: 'home' };

  const first = segments[0];

  switch (first) {
    case 'products': {
      if (segments.length === 1) return { page: 'products' };

      // /products/:categoryId
      const categoryId = segments[1];
      const category = allCategories.find(c => c.id === categoryId);
      if (!category) return { page: 'products' };

      if (segments.length === 2) {
        // /products/:categoryId  → Category page
        return { page: 'category', data: category };
      }

      // /products/:categoryId/:productId → Product detail
      const productId = segments[2];
      return {
        page: 'product',
        data: { category, productId }
      };
    }
    case 'about':
      return { page: 'about' };
    case 'contact':
      return { page: 'contact' };
    case 'thankyou':
      return { page: 'thankyou' };
    default:
      return { page: 'home' };
  }
}

/**
 * PageState ko URL path mein convert karo
 */
function getUrlForPage(page: string, data?: any): string {
  switch (page) {
    case 'home':
      return '/';
    case 'products':
      return '/products';
    case 'category':
      return `/products/${(data as ProductCategory)?.id ?? ''}`;
    case 'product': {
      const { category, productId } = data as { category: ProductCategory; productId: string };
      return `/products/${category.id}/${productId}`;
    }
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'thankyou':
      return '/thankyou';
    default:
      return '/';
  }
}

// ============================================
// APP COMPONENT
// ============================================

export function App() {
  const [pageState, setPageState] = useState<PageState>(() => parseUrl());

  // ---- URL change hone par (browser back/forward) state update karo ----
  useEffect(() => {
    const onPopState = () => {
      setPageState(parseUrl());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // ---- Navigate function ----
  const handleNavigate = useCallback((page: string, data?: any) => {
    const url = getUrlForPage(page, data);
    window.history.pushState({ page, data }, '', url);
    setPageState({ page, data });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ---- Product view shortcut ----
  const handleViewProduct = useCallback(
    (category: ProductCategory, productId: string) => {
      handleNavigate('product', { category, productId });
    },
    [handleNavigate]
  );

  // ---- Page render ----
  const renderPage = () => {
    switch (pageState.page) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
      case 'products':
        return (
          <ProductsPage
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
      case 'category':
        return (
          <CategoryPage
            category={pageState.data}
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
      case 'product':
        return (
          <ProductDetailPage
            category={pageState.data.category}
            selectedProductId={pageState.data.productId}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'thankyou':
        return <ThankYouPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
    }
  };

  const showHeader = pageState.page !== 'thankyou';
  const showFooter = pageState.page !== 'thankyou';

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && (
        <Header onNavigate={handleNavigate} currentPage={pageState.page} />
      )}
      <main>{renderPage()}</main>
      {showFooter && <Footer onNavigate={handleNavigate} />}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923061339140"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}