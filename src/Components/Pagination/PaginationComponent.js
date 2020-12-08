import React from 'react';
import { Page } from '..';
import '../../Stylesheets/Pagination.css';
import Pagination from '@material-ui/lab/Pagination';

export const PaginationComponent = () => {
  const { paginate, currentPage, pageNumbers } = Page();

  return (
    <Pagination
      className='pagination'
      count={pageNumbers}
      page={currentPage}
      onChange={(e, value) => paginate(value)}
    />
  );
};
