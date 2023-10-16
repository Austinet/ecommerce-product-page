export const defaultState = {
  cart: [],
  cartTotal: 0,
  isCartOpen: false,
  isMenuOpen: false,
  isGalleryOpen: false,
};

export const reducer = (state, action) => {
  const incrementItem = (payload) => {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity + payload.quantity,
          };
        } else {
          return item;
        }
      }),
      cartTotal: state.cartTotal + payload.price * payload.quantity * payload.discount,
    };
  };

  const calcTotal = (cart) => {
    return cart.reduce(
      (total, items) => (total += items.quantity * items.price * items.discount),
      0
    );
  };

  switch (action.type) {
    case "ADD_ITEM": {
      if (state.cart.some((item) => item.id === action.payload.id)) {
        return incrementItem(action.payload);
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
          cartTotal:
            state.cartTotal + action.payload.price * action.payload.quantity * action.payload.discount,
        };
      }
    }

    case "REMOVE_ITEM": {
      let newCart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: newCart,
        cartTotal: calcTotal(newCart),
      };
    }
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };

    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

      case "TOGGLE_GALLERY":
        return {
          ...state,
          isGalleryOpen: !state.isGalleryOpen,
        };

    default:
      break;
  }
};
