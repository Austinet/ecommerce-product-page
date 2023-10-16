import { useContext } from "react";
import deleteIcon from "../assets/icon-delete.svg";
import { MainContext } from "../App";

const Cart = () => {
  const { dispatch, cart, cartTotal } = useContext(MainContext);

  const removeProduct = (product) => {
    if (confirm(`Remove ${product.title} from Cart?`)) {
      dispatch({ type: "REMOVE_ITEM", payload: product });
    }
  };

  return (
    <section className="w-11/12 sm:w-[390px] lg:right-10 right-4 absolute top-[6rem] z-10 bg-white shadow-lg rounded-md">
      <div className="flex justify-between items-center mb-6 py-4 md:px-5 px-4 border-b">
        <h2 className="md:text-[1.4rem] text-[1.2rem] leading-[130%] font-semibold">
          Cart
        </h2>
      </div>
      <div className="flex flex-col md:gap-10 gap-4 justify-center md:px-5 px-4">
        {cart.length < 1 ? (
          <p className="text-center font-medium py-9">Your cart is empty.</p>
        ) : (
          cart.map((product) => {
            return (
              <div
                key={product.id}
                className="flex gap-3 items-center justify-between"
              >
                <div className="w-1/5 h-full">
                  <img
                    src={product.images[0].image}
                    alt={product.description}
                    className="w-full h-full rounded-[0.5rem]"
                  />{" "}
                </div>
                <div className="w-4/5 text-darkGrayishBlue">
                  <h3 className=" md:text-lg leading-[130%] md:font-semibold font-medium">
                    {product.title}
                  </h3>
                  <p className="text-lg font-medium">
                    <span>${product.price * product.discount}</span>{" "}
                    <span>x {product.quantity}</span>{" "}
                    <span className="font-semibold text-veryDarkBlue md:text-[1.3rem] text-[1.1rem] leading-[130%]">
                      ${cartTotal}.00
                    </span>
                  </p>
                </div>
                <button onClick={() => removeProduct(product)}>
                  <img src={deleteIcon} alt="Delete" className="md:w-5" />
                </button>
              </div>
            );
          })
        )}
      </div>
      <div className="md:px-5 px-4 py-6">
        {cart.length >= 1 && (
          <button className="w-full md:py-3 py-2 bg-orange hover:opacity-90 outline-none text-white text-lg font-semibold rounded-md">
            Checkout
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
