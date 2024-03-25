import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products"); // Now uses the proxy
        const data = await response.json();
        const simplifiedData = data.products.map((product) => ({
          brand: product.brand,
          price: product.price,
        }));
        setProducts(simplifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Products:</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            Brand: {product.brand}, Price: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
