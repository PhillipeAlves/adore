import React, { useState, createContext, useEffect } from 'react';
import { fetchData } from '../Helpers';

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

  useEffect(() => {
    let storage = sessionStorage.getItem('storage');
    storage = JSON.parse(storage);
    setDetail(storage.detail);
    setLoading(true);
    fetchData(setProducts, setCategories, setLoading);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('storage', JSON.stringify({ detail }));
  });

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
