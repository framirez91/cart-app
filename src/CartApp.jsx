import { useItemsCart } from "./hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const {cartItems,handlerAddProductCart,handlerDeleteProductCart} = useItemsCart();

    
    return (
        <>
           <NavBar/>

            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteProductCart={handlerDeleteProductCart} 
                cartItems={cartItems} />

            </div>
        </>
    )
}