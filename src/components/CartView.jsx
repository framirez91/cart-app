import React from "react";
import { useState,useEffect } from "react";
import { calculateTotal } from "../services/productService";

export const CartView = ({ items,handlerRemoveToCart }) => {
  const [total, setTotal] = useState(0);
  const onRemove = (id) => {
    handlerRemoveToCart(id);
  }
  useEffect(() => {
    setTotal(calculateTotal(items),);
    sessionStorage.setItem("cart",JSON.stringify(items));
  }, [items]);//cuando cambie items se ejecuta el useEffect


  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((items) => (
            <tr key={items.product.id}>
              <td>{items.product.name}</td>
              <td>{items.product.price}</td>
              <td>{items.quantity}</td>
              <td>{items.quantity * items.product.price}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>onRemove(items.product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
