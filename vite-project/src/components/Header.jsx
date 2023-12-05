import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const [cartProducts, setCartProducts] = useState(allProducts || []);

  useEffect(() => {
    setCartProducts(allProducts || []);
  }, [allProducts]);

  const onCleanCart = () => {
    setAllProducts([]);
    setCartProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <h1>
        <Link to="/">Tienda de Consolas</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {cartProducts && cartProducts.length ? (
            <>
              <div className="row-product">
                {cartProducts.map((product) => (
                  <div className="cart-product" key={product._id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <img width="50px" src={product.img} alt={product.name} />
                      <p className="titulo-producto-carrito">{product.name}</p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>

              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
