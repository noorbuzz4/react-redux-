import React from "react";
import Products from "../components/Products";
import HeroSection from "../components/HeroSection";
import FeaturedCard from "../components/FeaturedCard";
const Home = () => {
  return (
    <>
      <HeroSection />
      <h1
        className="heading"
        style={{
          textAlign: "center",
          marginTop: "5rem",
          textDecoration: "underline ",
        }}
      >
        Freatued <span style={{ color: "#4CAF50" }}>Products.</span>
      </h1>
      <FeaturedCard />
      <div>
        <h1
          className="heading"
          style={{
            textAlign: "center",
            marginTop: "5rem",
            textDecoration: "underline ",
          }}
        >
          Welcome to the{" "}
          <span style={{ color: "#4CAF50" }}>Redux toolkit store .</span>
        </h1>

        <section>
          <Products />
        </section>
      </div>
    </>
  );
};

export default Home;
