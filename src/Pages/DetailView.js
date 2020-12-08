import React from 'react';
import GoBack from '../Components/Layout/GoBack';
import { ProductDetail } from '../Components';
import '../Stylesheets/DetailView.css';

export const DetailView = () => {
  return (
    <React.Fragment>
      <GoBack />
      <ProductDetail />
    </React.Fragment>
  );
};
