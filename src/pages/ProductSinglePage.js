import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../store/productSlice";
import "../css/SingleProductPage.css";
import { add } from "../store/cartSlice";
const ProductSinglePage = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  return (
    <>
      <div className="product-single-page">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          {/* quantity */}
          <div className="quantity-toggle">
            <button className="quantity-button" onClick={() => decreaseQty()}>
              -
            </button>
            <span className="quantity-value" id="quantityValue">
              {quantity}
            </span>
            <button className="quantity-button" onClick={() => increaseQty()}>
              +
            </button>
          </div>
          {/* quantity */}
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSinglePage;
