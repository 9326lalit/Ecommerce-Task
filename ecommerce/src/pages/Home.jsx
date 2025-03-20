import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext"; // Ensure correct import
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext); // Using only addToCart

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchTerm === ""
  );

  return (
    <div className="container">
      <h1>E-commerce Store</h1>
      <input
        type="text"
        placeholder="Search a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
              <button className="add-btn" onClick={() => addToCart(product)}>
                
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
