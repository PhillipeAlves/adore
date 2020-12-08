import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { isActive } from '../../Helpers';
import '../../Stylesheets/Filters.css';

export const Filters = () => {
  const { setFilter, filter } = useContext(Context);

  const categories = {
    All: '',
    'Redness and Rosacea': 2877,
    'Breakouts and Acne': 2886,
    'Special Treatments': 2890,
  };

  const createFilter = () => {
    return Object.entries(categories).map(([key, value]) => (
      <li
        key={value}
        className={isActive(filter, value)}
        onClick={() => setFilter(value)}
      >
        {key}
      </li>
    ));
  };

  return <ul className='filters'>{createFilter()}</ul>;
};
