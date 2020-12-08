import React from 'react';
import { Page } from '..';
import Pagination from '@material-ui/lab/Pagination';
import '../../Stylesheets/Pagination.css';

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
