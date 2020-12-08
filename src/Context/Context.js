import React, { useState, createContext, useEffect } from 'react';
import { fetchDataByPath } from '../Helpers';

export const Context = createContext();

export const Provider = ({ children }) => {
  // = API DATA
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  // = PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  // = FILTERING
  const [filter, setFilter] = useState('');
  const [detail, setDetail] = useState('');
  // = FETCH DATA
  useEffect(() => {
    (async () => {
      setLoading(true);
      const [_products, _categories] = await Promise.all([
        fetchDataByPath('products'),
        fetchDataByPath('categories'),
      ]);
      setProducts(_products);
      setCategories(_categories);
      setLoading(false);
    })();
  }, []);
  // = PERSISTENT DATA
  useEffect(() => {
    let storage = localStorage.getItem('storage');
    if (storage) {
      storage = JSON.parse(storage);
      setDetail(storage.detail);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify({ detail }));
  }, [detail]);

  return (
    <Context.Provider
      value={{
        loading,
        products,
        categories,
        detail,
        setDetail,
        filter,
        setFilter,
        currentPage,
        setCurrentPage,
        productsPerPage,
        setProductsPerPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
