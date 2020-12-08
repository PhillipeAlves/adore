import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import ReactHtmlParser from 'react-html-parser';
import { getCategories } from '../../Helpers';

export const ProductDetail = () => {
  const { detail } = useContext(Context);

  const getDetails = ({ name, categories, sku, price, description }) => {
    const results = (
      <>
        <h1>{name}</h1>
        <p>{getCategories(categories)}</p>
        <p>Sku: {sku}</p>
        <p>Price: ${price}</p>
        {ReactHtmlParser(description)}
      </>
    );
    return results;
  };

  return (
    <div className='product-detail'>{detail ? getDetails(detail) : ''}</div>
  );
};
