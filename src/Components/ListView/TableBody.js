import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { clearTitle } from '../../Helpers';
import { withRouter } from 'react-router-dom';
import { Page } from '../../Components';

const TableBody = ({ history }) => {
  const { setDetail } = useContext(Context);
  const { currentProducts: products } = Page();

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

export default withRouter(TableBody);
