import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "25px",
      }}
    >
      <Link to="/" style={{ color: "black", background: "none" }}>
        <span className="logo">REDUX STORE</span>
      </Link>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/products">
          Products
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount" style={{ color: "#4caf50" }}>
          Cart items: {items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
