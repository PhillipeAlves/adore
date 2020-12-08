import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import {
  Filters,
  Loading,
  ProductsTable,
  ResultsPerPage,
  PaginationComponent,
} from '../Components';
import '../Stylesheets/ListView.css';

export const ListView = () => {
  const { loading } = useContext(Context);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ResultsPerPage />
      <Filters />
      <ProductsTable />
      <PaginationComponent />
    </>
  );
};
