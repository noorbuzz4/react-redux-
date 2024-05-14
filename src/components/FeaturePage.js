import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FeaturePage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchProducts();
  }, []);
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    //     <div>
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <ul>
    //       {filteredProducts.map((product) => (
    //         <li key={product.id}>
    //           <h2>{product.title}</h2>
    //           <p>{product.description}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          height: "35px",
          paddingLeft: "25px",
          borderRadius: "100px",
          background: "transparent",
        }}
      />
      <ul>
        {filteredProducts.length > 0 && searchTerm !== "" ? (
          filteredProducts.map((product) => (
            <Link to={`/product/${product?.id}`}>
              <li key={product.id}>
                <img src={product.image}></img>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </li>
            </Link>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Searching....</p>
        )}
      </ul>
    </div>
  );
};

export default FeaturePage;
