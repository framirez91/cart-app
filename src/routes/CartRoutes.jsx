import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({
  handlerAddProductCart,
  handlerDeleteProductCart,
  cartItems,
}) => {
  return (
    <Routes>
      <Route
        path="/catalogo"
        element={<CatalogView handler={handlerAddProductCart} />}
      />

      <Route
        path="/cart"
        element={
          cartItems?.length <= 0 ? (
            <div className="alert alert-info w-50" role="alert">
              {" "}
              No hay productos en el carro de compra
            </div>
          ) : (
            <div className="my-4 w-50">
              <CartView
                items={cartItems}
                handlerDelete={handlerDeleteProductCart}
              />
            </div>
          )
        }
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/" element={<Navigate to="/catalogo" />} />
    </Routes>
  );
};
