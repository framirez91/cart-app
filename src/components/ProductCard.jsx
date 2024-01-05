export const ProductCard = ({handler,id,name,description,price}) => {

  const onAddProduct = (product) => {
    handler(product)
    
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: ${price}</p>
          <button className="btn btn-primary"
          onClick={()=> onAddProduct({id,name,description,price})}
          >Add to cart</button>
        </div>
      </div>
    </>
  );
};
