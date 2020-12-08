import axios from 'axios';

const API_BASE = 'https://www.adorebeauty.com.au/api/ecommerce/catalog';

export const fetchDataByPath = async (path) => {
  const response = await axios.get(`${API_BASE}/${path}`);
  return response.data.data;
};
