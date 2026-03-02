// src/hooks/useFirebaseData.ts
// Website ke liye Firebase se data fetch karne ka hook

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lab/firebase';
import { ProductCategory, Product } from '../data/products';

// Firebase se data fetch karke ProductCategory format mein convert karo
export function useCategories() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Categories fetch karo
        const catSnap = await getDocs(
          query(collection(db, 'categories'), orderBy('createdAt', 'asc'))
        );

        // Products fetch karo
        const prodSnap = await getDocs(
          query(collection(db, 'products'), orderBy('createdAt', 'asc'))
        );

        const products = prodSnap.docs.map(d => ({
          id: d.id,
          ...(d.data() as Omit<Product, 'id'> & { categoryId: string }),
        }));

        // Categories ke andar products inject karo
        const cats: ProductCategory[] = catSnap.docs.map(d => {
          const catData = d.data();
          const catProducts = products
            .filter(p => p.categoryId === d.id)
            .map(({ categoryId, ...rest }) => rest as Product);

          return {
            id: d.id,
            name: catData.name,
            slug: catData.slug,
            image: catData.image,
            products: catProducts,
          };
        });

        setCategories(cats);
      } catch (err) {
        console.error('Firebase fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { categories, loading };
}
