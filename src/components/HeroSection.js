import React from "react";
import {motion as m} from "framer-motion";
const HeroSection = () => {
  return (
    <div
      style={{
        background: "lightgray",
        height: "100vh",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="hero-bg"
    >
      <div>
        <div style={{ fontSize: "30px" }}>React Redux Ecommerce Store</div>
        <p style={{ textAlign: "center" }}>where you can find anything </p>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              padding: "14px 45px",
              border: "none",
              background: "#4CAF50",
              borderRadius: "100px",
              fontSize: "15px",
              color: "white",
            }}
          >
            <a
              href="#productsid"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Find Products
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
