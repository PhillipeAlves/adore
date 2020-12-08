import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { clearTitle } from '../../Helpers';
import { Page } from '../../Components';

export const TableBody = () => {
  const { setDetail } = useContext(Context);
  const { currentProducts: products } = Page();
  const history = useHistory();

  const getProduct = (product) => {
    setDetail(product);
    history.push('/detail');
  };

  return products.map((product) => {
    const { id, name, sku } = product;
    return (
      <tbody key={id}>
        <tr onClick={() => getProduct(product)}>
          <th>{id}</th>
          <th>{clearTitle(name, sku)}</th>
          <th>{sku}</th>
        </tr>
      </tbody>
    );
  });
};
