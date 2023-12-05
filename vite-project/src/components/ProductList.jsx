import React, { useState, useEffect } from "react";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hacer una solicitud al servidor para obtener todos los productos
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const onAddProduct = (product) => {
    const existingProduct = allProducts.find(
      (item) => item._id === product._id
    );

    if (existingProduct) {
      const updatedProducts = allProducts.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }

    setCountProducts(countProducts + 1);
    setTotal(total + product.price);
  };

  return (
    <div className="container-items">
      {products.map((product) => (
        <div className="item" key={product._id}>
          <figure>
            <img
              className="product-image"
              src={product.img}
              alt={product.name}
            />
          </figure>
          <div className="info-product">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => onAddProduct(product)}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
