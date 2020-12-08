import axios from 'axios';

export const fetchData = (setProducts, setCategories, setLoading) => {
  axios
    .all([
      axios.get(
        'https://www.adorebeauty.com.au/api/ecommerce/catalog/products'
      ),
      axios.get(
        'https://www.adorebeauty.com.au/api/ecommerce/catalog/categories'
      ),
    ])
    .then(
      axios.spread((products, categories) => {
        setProducts(products.data.data);
        setCategories(categories.data.data);
        setLoading(false);
      })
    );
};
