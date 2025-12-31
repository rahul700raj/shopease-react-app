const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (limit = 30, skip = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Product not found');
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
    if (!response.ok) throw new Error('Search failed');
    return await response.json();
  } catch (error) {
    throw error;
  }
};
