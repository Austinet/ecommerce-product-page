import { useState, useContext } from "react";
import Header from "../components/Header";
import ModalBG from "../components/ModalBG";
import cartIcon from "../assets/white-cart.svg";
import { CloseIcon } from "../utils/icons";
import {
  BiMinus,
  BiPlus,
  BiSolidChevronRight,
  BiSolidChevronLeft,
} from "react-icons/bi";
import { product } from "../utils/data";
import { MainContext } from "../App";

const Product = () => {
  const { dispatch, isGalleryOpen } = useContext(MainContext);
  const [productImage, setProductImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(0);

  const setProductBG = (id) => {
    product.images = product.images.map((image) => {
      if (image.id === id) {
        setProductImage(image);
        return { ...image, active: true };
      } else {
        return { ...image, active: false };
      }
    });
  };

  const forwardBG = () => {
    if (productImage.id + 1 <= 4) {
      setProductBG(productImage.id + 1);
    } else {
      setProductBG(1);
    }
  };

  const backwardBG = () => {
    if (productImage.id - 1 >= 1) {
      setProductBG(productImage.id - 1);
    } else {
      setProductBG(4);
    }
  };

  return (
    <>
      <Header />

      {/* Gallery Section */}
      {isGalleryOpen && (
        <div className="hidden md:block">
          <ModalBG />
          <div className="absolute z-30 top-0 h-full w-full md:grid place-items-center">
            <div className="md:max-w-[450px] md:min-w-[300px] w-11/12 lg:gap-6 md:gap-[2rem] flex flex-col items-end">
              <div
                className="text-white hover:text-orange"
                onClick={() => dispatch({ type: "TOGGLE_GALLERY" })}
              >
                <CloseIcon />
              </div>
              <div className="relative">
                <img
                  src={productImage.image}
                  alt="Product Image"
                  className="md:rounded-lg"
                />
                <div className="absolute top-[45%] left-[-1.2rem] w-[108%] flex justify-between items-center">
                  <button
                    className="w-9 h-9 grid place-items-center rounded-full bg-white text-black"
                    onClick={backwardBG}
                  >
                    <BiSolidChevronLeft className="text-[1.35rem] inline hover:text-orange" />
                  </button>
                  <button
                    className="w-9 h-9 grid place-items-center rounded-full bg-white text-black"
                    onClick={forwardBG}
                  >
                    <BiSolidChevronRight className="text-[1.35rem]  inline hover:text-orange" />
                  </button>
                </div>
              </div>
              <ul className="px-[2rem] flex justify-between items-center gap-5 ">
                {product.images.map((image) => (
                  <li key={image.id}>
                    <button
                      onClick={() => setProductBG(image.id)}
                      className={`relative outline-none`}
                    >
                      <img
                        src={image.thumbnail}
                        alt="Product thumbnail"
                        className={`rounded-lg`}
                      />
                      <div
                        className={`absolute opacity-70 w-[100%] h-[100%] top-0 rounded-lg ${
                          image.active && "border-2 border-orange bg-paleOrange"
                        } hover:bg-paleOrange `}
                      ></div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Product Section */}
      <section>
        <div className="xl:max-w-[1080px] md:w-10/12 lg:my-[5rem] md:mt-[9rem] mt-[5rem] mb-[1.5rem] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-7 lg:gap-8">
          <div className="md:max-w-[430px] md:min-w-[300px] lg:gap-6 md:gap-[2rem] md:flex flex-col justify-between items-center">
            <div className="relative">
              <img
                src={productImage.image}
                alt="Product Image"
                className="md:rounded-lg"
                onClick={() => dispatch({ type: "TOGGLE_GALLERY" })}
              />
              <div className="md:hidden absolute top-[45%] px-[1.5rem] w-[100%] flex justify-between items-center">
                <button
                  className="w-9 h-9 grid place-items-center rounded-full bg-white text-black"
                  onClick={backwardBG}
                >
                  <BiSolidChevronLeft className="text-[1.35rem] inline hover:text-orange" />
                </button>
                <button
                  className="w-9 h-9 grid place-items-center rounded-full bg-white text-black"
                  onClick={forwardBG}
                >
                  <BiSolidChevronRight className="text-[1.35rem] inline hover:text-orange" />
                </button>
              </div>
            </div>
            <ul className="hidden md:flex justify-between items-center gap-3 ">
              {product.images.map((image) => (
                <li key={image.id}>
                  <button
                    onClick={() => setProductBG(image.id)}
                    className={`relative outline-none`}
                  >
                    <img
                      src={image.thumbnail}
                      alt="Product thumbnail"
                      className={`rounded-lg`}
                    />
                    <div
                      className={`absolute opacity-70 w-[100%] h-[100%] top-0 rounded-lg ${
                        image.active
                          ? "border-2 border-orange bg-paleOrange"
                          : ""
                      } hover:bg-paleOrange `}
                    ></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[470px] p-5 md:p-0">
            <h2 className="md:text-lg text-base font-bold md:mb-4 mb-2 text-orange uppercase">
              {"Sneaker Company"}
            </h2>
            <h1 className="lg:text-[3rem] text-[1.9rem] font-bold leading-[120%] lg:mb-8 mb-4 text-veryDarkBlue">
              {product.title}
            </h1>
            <p className="md:text-lg font-medium md:mb-5 mb-3 text-darkGrayishBlue">
              {product.description}
            </p>
            <div className="flex md:flex-col items-center md:items-start justify-between mb-4">
              <p className="flex items-center md:gap-6 gap-4">
                <span className="md:text-[2rem] text-[1.7rem] font-bold text-veryDarkBlue ">
                  ${product.price * product.discount}.00
                </span>
                <span className="bg-paleOrange md:text-lg text-base px-2 py-1 font-bold rounded-md text-orange">
                  {product.discount * 100}%
                </span>
              </p>
              <p className="font-semibold text-darkGrayishBlue linethrough">
                ${product.price}.00
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 ">
              <div className="md:w-[250px] w-full flex items-center justify-between gap-5 bg-lightGrayishBlue md:py-3 py-[0.65rem] px-4 rounded-md">
                <button
                  onClick={() =>
                    setQuantity(quantity >= 1 ? quantity - 1 : quantity)
                  }
                >
                  <BiMinus className="text-orange font-bold md:text-[1.3rem] text-lg hover:text-orange" />
                </button>
                <p className="font-semibold md:text-[1.3rem] text-lg">
                  {quantity}
                </p>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <BiPlus className="text-orange font-bold md:text-[1.3rem] text-lg hover:text-orange" />
                </button>
              </div>
              <button
                className="flex justify-center shadow-paleOrange shadow-lg gap-4 items-center w-full md:py-3 py-[0.65rem] bg-orange hover:opacity-90 outline-none text-white text-lg font-semibold rounded-md"
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: { ...product, quantity },
                  })
                }
              >
                <img src={cartIcon} alt="Cart" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
