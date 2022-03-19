export const toggleCart = () => ({ type: 'TOGGLE_CART' })
export const addToCart = (product) => ({ type: 'ADD_TO_CART', payload: product });
export const removeFromCart = (item) => ({ type: 'REMOVE_FROM_CART', payload: item });
export const modifyCartItemQty = (item) => ({ type: 'MODIFY_QUANTITY', payload: item });