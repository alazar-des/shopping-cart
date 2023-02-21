import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/CartContext";

export const Navbar = (props) => {
  const shoopingCart = useContext(ShoppingCartContext);

  const open = () => {
    const menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("hidden");
  };
  const close = () => {
    const menu = document.querySelector(".navbar-menu");
    const backdrop = document.querySelector(".navbar-backdrop");
    backdrop.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center p-3"
            onClick={open}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <Link className="text-3xl font-bold leading-none" to="/">
          Logo
        </Link>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          {props.catagories
            ? props.catagories.map((catagory) => (
                <>
                  <li>
                    <Link
                      className="text-sm text-gray-400 hover:text-gray-500"
                      to={`/products/category/${catagory}`}
                    >
                      {catagory}
                    </Link>
                  </li>
                  <li className="text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </li>
                </>
              ))
            : null}
          <li>
            <Link className="text-sm text-gray-400 hover:text-gray-500" to="/">
              Shop All
            </Link>
          </li>
        </ul>
        {shoopingCart.cartItemsQuantity ? (
          <div className="mt-auto">
            <div className="relative p-1 border-2 border-gray-500 rounded-full">
              <Link to={"/cart"}>
                <svg
                  className="h-8 w-8 p-1 hover:text-gray-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    className=""
                  ></path>
                </svg>
              </Link>
              <div className="flex items-center justify-center w-5 h-5 text-xs absolute bottom-6 left-7 bg-slate-900 text-white rounded-full">
                {shoopingCart.cartItemsQuantity}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/">
              Logo
            </Link>
            <button className="navbar-close" onClick={close}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <>
                {props.catagories
                  ? props.catagories.map((catagory) => (
                      <li className="mb-1">
                        <Link
                          className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                          to={`/products/category/${catagory}`}
                        >
                          {catagory}
                        </Link>
                      </li>
                    ))
                  : null}
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/"
                  >
                    Shop All
                  </Link>
                </li>
              </>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
