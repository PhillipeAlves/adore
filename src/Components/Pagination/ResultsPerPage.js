import React from 'react';
import { Page } from './Page';
import '../../Stylesheets/Pagination.css';

export const ResultsPerPage = () => {
  const { productsPerPage, setProductsPerPage } = Page();

  return (
    <div className='results-per-page'>
      <p>Results per page</p>
      <select
        value={productsPerPage}
        onChange={(e) => setProductsPerPage(e.target.value)}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </div>
  );
};
