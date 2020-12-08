import React from 'react';
import { ProductDetail, GoBack } from '../Components';
import '../Stylesheets/DetailView.css';

export const DetailView = () => {
  return (
    <>
      <GoBack />
      <ProductDetail />
    </>
  );
};
