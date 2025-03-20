import React, { useContext, useEffect, useState } from "react";
import "./Cloths.css"; // Import the updated CSS file
import { CartContext } from "../context/CartContext";

const Cloths = () => {
  const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext); // Using only addToCart
  

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        // Filtering Electronics category & limiting to 5 products
        const clothProducts = data
          .filter((product) => product.category?.name === "Clothes").slice(0,8);
        setProducts(clothProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1>Electronics Products</h1>
      <div className="grid-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="card">
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[0]}
                  alt={product.title || "Product"}
                />
              )}
              <span className="category">
                {product.category?.name || "Unknown"}
              </span>
              <h2>{product.title || "No Name"}</h2>
              <p>${product.price || "N/A"}</p>
              <div className="add-btn" onClick={() => addToCart(product)}></div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Cloths;
