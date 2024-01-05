import React from "react";
import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";
import { useState } from "react";
const inititalCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(inititalCartItems);

  const handlerAddToCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // setCartItems([ //usando filter
      //   ...cartItems.filter((i)=> i.product.id !== product.id),
      //   {
      //     product: product,
      //     quantity: hasItem.quantity + 1,
      //   }
      // ])
      //usando map
      setCartItems([
        ...cartItems.map((i) =>
          i.product.id === product.id
            ? {
                product: product,
                quantity: hasItem.quantity + 1,
              }
            : i
        ),
      ]);
    } else {
      setCartItems([
        ...cartItems,
        {
          product: product,
          quantity: 1,
        },
      ]);
    }
  };

  const handlerRemoveToCart = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };

  return (
    <>
      <div className="cotainer m-3">
        <h3 className="m-3">Cart APP</h3>
        <CatalogView handler={handlerAddToCart} />
        {(cartItems.length === 0 && (
          <div className="alert alert-info">Empty Cart</div>
        )) || (
          <div className="m-3 my-4 w-50">
            <h3>Cart</h3>
            <CartView
              items={cartItems}
              handlerRemoveToCart={handlerRemoveToCart}
            />
          </div>
        )}
      </div>
    </>
  );
};
