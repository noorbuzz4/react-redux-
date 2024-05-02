import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div
      className="productsWrapper "
      style={{ marginTop: "5rem" }}
      id="productsid"
    >
      {products.map((product) => (
        <Link
          to={`/product/${product?.id}`}
          key={product?.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <img src={product.image} alt="" />
            <div>{product.title}</div>
            <div>
              <span style={{ color: "red" }}>Price: </span>
              {product.price}
            </div>
            <Link to={`/product/${product.id}`}>
              <button className="btn">View Details</button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
