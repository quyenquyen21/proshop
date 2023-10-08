export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
  //Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  //Calculate shipping price (If order is over 100$ then freen else will be 10$)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  //Calculate tax price (15%)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  //Calculate totals price
  state.totalProce =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
