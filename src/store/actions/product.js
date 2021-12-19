export const loadAllProducts = (state, payload) => {
  const { products } = payload;
  return { ...state, products };
};
