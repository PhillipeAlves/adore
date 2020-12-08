import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { normalizeData } from '../../Helpers';

export const Page = () => {
  const {
    products,
    currentPage,
    setCurrentPage,
    productsPerPage,
    filter,
    setProductsPerPage,
  } = useContext(Context);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { currentProducts, totalProducts, pageNumbers } = normalizeData(
    filter,
    products,
    currentPage,
    productsPerPage
  );

  return {
    paginate,
    currentPage,
    totalProducts,
    currentProducts,
    productsPerPage,
    setProductsPerPage,
    pageNumbers,
  };
};
