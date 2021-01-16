const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      // const totalCount = Object.keys(newItems).reduce(
      //   (sum, key) => newItems[key].items.length + sum,
      //   0
      // );
      // const totalPrice = Object.keys(newItems).reduce(
      //   (sum, key) => newItems[key].totalPrice + sum,
      //   0
      // );
      // const totalCount = totalSum(newItems, "items.length");
      // const totalPrice = totalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalCount: action.payload,
      };
    case "REMOVE_CART_ITEM":
      const newCartItems = {
        ...state.items,
      };
      const currentTotalPrice = newCartItems[action.payload].totalPrice;
      const currentTotalCount = newCartItems[action.payload].items.length;
      delete newCartItems[action.payload];
      return {
        ...state,
        items: newCartItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    case "CLEAR_CART":
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    default:
      return state;
  }
};

export default cart;
