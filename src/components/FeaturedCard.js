import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const FeaturedCard = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  const filteredProducts = products.slice(10, 14); // only show 3 products

  return (
    <div className="productsWrapper " style={{ marginTop: "5rem" }}>
      {filteredProducts.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.title}</div>
          <div><span style={{color:"red", }}>Price: </span>{product.price}</div>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
