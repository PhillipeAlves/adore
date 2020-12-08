export const normalizeData = (
  filter,
  products,
  currentPage,
  productsPerPage
) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  let totalProducts = products.length;
  if (filter) {
    currentProducts = products.filter((product) =>
      product.categories.includes(Number(filter))
    );
    totalProducts = currentProducts.length;
  }
  const pageNumbers = Math.ceil(totalProducts / productsPerPage);

  return { currentProducts, totalProducts, pageNumbers };
};
