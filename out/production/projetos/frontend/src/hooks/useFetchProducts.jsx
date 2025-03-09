// src/hooks/useFetchProducts.js
import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { products, loading, error };
}
