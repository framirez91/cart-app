import React from 'react'
import { useEffect,useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCard } from './ProductCard';

export const CatalogView = ({handler}) => {
    const [products, setProducts] = useState([]);//estado inicial
    useEffect(() => {
    setProducts(getProducts());//pasa el estado inicial
    }, []);

  return (
    <>
     <div className="row">
            {products.map((prod)=>(
                <div className="col-4 my-2" key={prod.id}>
               <ProductCard 
               id={prod.id}
               name={prod.name} 
               description={prod.description} 
               price={prod.price}
               handler={handler}
               
               />
              </div>
            )) }         
        </div>
    </>
  )
}
