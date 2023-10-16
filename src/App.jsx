import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import { useReducer, createContext } from "react";
import { reducer, defaultState } from "./utils/helper";

export const MainContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <MainContext.Provider
        value={{
          dispatch,
          cart: state.cart,
          isCartOpen: state.isCartOpen,
          cartTotal: state.cartTotal,
          isMenuOpen: state.isMenuOpen,
          isGalleryOpen: state.isGalleryOpen,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Product />}></Route>
        </Routes>
      </MainContext.Provider>
    </>
  );
};

export default App;
