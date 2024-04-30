import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const Productspage = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
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
  return (
    <div className="productsWrapper " style={{ marginTop: "5rem" }}>
      {products.map((product) => (
        <div class="card" key={product.index}>
          <img src={product.image} alt="" />
          <div>
            <div>{product.title}</div>
            <div>
              <span style={{ color: "red" }}>Price:</span> {product.price}
            </div>
          </div>
          <button onClick={() => handleAdd(product)} class="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productspage;
