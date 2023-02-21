import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/CartContext";

export const Cart = () => {
  const shoppingCart = useContext(ShoppingCartContext);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex border-b pb-8">
            <h1 className="font-semibold w-4/5 text-2xl">Your Cart</h1>
            <h2 className="font-semibold w-1/5 text-center text-2xl">{`${shoppingCart.cartItemsQuantity} Items`}</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          {shoppingCart.cartItems.map((item) => (
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <img
                  className="h-24 object-cover"
                  src={item.product.image}
                  alt={item.product.title}
                />
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">
                    {item.product.title}
                  </span>
                  <button
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    onClick={() => shoppingCart.removeItem(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                  onClick={() =>
                    shoppingCart.decreaseItemQuantity(item.product)
                  }
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={shoppingCart.getItemQuantity(item.product.id)}
                  onChange={(e) =>
                    shoppingCart.onChangeItemQuantity(
                      item.product.id,
                      e.target.value
                    )
                  }
                />

                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                  onClick={() =>
                    shoppingCart.increaseItemQuantity(item.product)
                  }
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                {`$${item.product.price}`}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                {`$${
                  shoppingCart.getItemQuantity(item.product.id) *
                  item.product.price
                }`}
              </span>
            </div>
          ))}
          <div className="md:flex flex-row-reverse mt-4">
            <span className="w-1/5 text-center font-bold font-2xl">{`$${Math.round(shoppingCart.totalPrice * 100) / 100}`}</span>
            <span className="w-1/5 text-center font-bold font-2xl">
              Subtotal:
            </span>
          </div>
          <div className="md:flex flex-row-reverse mt-4 items-center">
            <div className="w-2/5">
              <button className="w-3/4 rounded-md uppercase bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Checkout
              </button>
            </div>
            <Link
              to="/"
              class="flex font-semibold text-slate-900 text-sm mt-10 w-full"
            >
              <svg
                class="fill-current mr-2 text-slate-900 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
