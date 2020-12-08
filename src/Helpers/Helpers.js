export const clearTitle = (string, sku) => {
  const regex = new RegExp(`(${sku} - )`, 'gi');
  const title = string.replace(regex, '');
  return title;
};

export const getCategories = (categories) => {
  return categories.map((category) => `Category ${category}`).join(', ');
};

export const isActive = (state, value) => {
  if (state === value) return 'active';
};
