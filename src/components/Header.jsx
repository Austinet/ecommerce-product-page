import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import ModalBG from "./ModalBG";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import cartIcon from "../assets/icon-cart.svg";
import { CloseIcon, MenuIcon } from "../utils/icons";
import { MainContext } from "../App";

const navLinks = [
  {
    name: "Collections",
    href: "/",
  },
  {
    name: "Men",
    href: "/",
  },
  {
    name: "Women",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];

const Header = () => {
  const { dispatch, isCartOpen, isMenuOpen, cart } = useContext(MainContext);

  return (
    <header className="lg:static fixed w-full top-0 z-20 bg-white shadow-md md:shadow-none">
      <div className="lg:w-10/12 w-11/12 mx-auto md:py-0 py-7 md:border-b">
        <nav className="flex justify-between items-center ">
          <div className="flex justify-between items-center lg:gap-12 gap-4">
            <button
              className="outline-none md:hidden pt-1"
              onClick={() => dispatch({ type: "TOGGLE_MENU" })}
            >
              <MenuIcon />
            </button>
            <Link to={"/"}>
              <img src={logo} alt="Sneakers logo" />
            </Link>
            {isMenuOpen && <ModalBG />}
            <ul
              className={`md:static absolute top-0 md:h-auto h-[100vh] md:w-auto w-[67vw] bg-white opacity-100 z-20 px-6  md:py-0 py-9 shadow-md md:shadow-none  flex md:justify-between flex-col md:flex-row md:items-center lg:gap-7 gap-4
              transition-all delay-200 ease-in-out ${
                isMenuOpen ? "left-0" : "left-[-45rem]"
              }`}
            >
              <button
                className="md:hidden outline-none mb-6"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                <CloseIcon />
              </button>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="inline-block md:py-8 text-lg text-veryDarkBlue md:text-darkGrayishBlue  font-semibold hover:text-veryDarkBlue hover:border-b-2 border-b-orange"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center lg:gap-12 gap-5">
            <button
              className="outline-none relative pt-1"
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
            >
              <img src={cartIcon} alt="Cart" />
              {cart.length > 0 && (
                <p className="absolute top-[-0.7rem] right-[-0.7rem] md:top-[-0.9rem] md:right-[-0.9rem] bg-orange text-white text-sm md:text-base text-center font-semibold md:w-[1.5rem] md:h-[1.5rem] w-[1.2rem] h-[1.2rem] rounded-full">
                  {cart[0].quantity}
                </p>
              )}
            </button>
            <img
              src={avatar}
              alt="User avatar"
              className="md:w-10 md:h-10 w-7 h-7 rounded-full hover:border-2 border-orange"
            />
          </div>
        </nav>
        {isCartOpen && <Cart />}
      </div>
    </header>
  );
};

export default Header;
