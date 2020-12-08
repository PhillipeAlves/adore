export const clearTitle = (string, sku) => {
  const regex = new RegExp(`(${sku} - )`, 'gi');
  const title = string.replace(regex, '');
  return title;
};

export const getCategories = (categories) => {
  return categories
    .reduce((acc, categorie) => {
      acc.push(`Category ${categorie}`);
      return acc;
    }, [])
    .join(', ');
};

export const isActive = (state, value) => {
  if (state === value) return 'active';
};
