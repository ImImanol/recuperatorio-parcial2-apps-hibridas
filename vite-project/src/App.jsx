import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import Registro from "./views/Registro";
import Perfil from "./views/Perfil";
import Login from "./views/Login";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <>
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          />
          <Route
            path="/registro"
            element={
              <Registro
                onRegister={(userData) => {
                  setAllProducts(userData.products);
                  setTotal(userData.total);
                  setCountProducts(userData.count);
                  setUserData(userData);
                }}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                onLogin={(userData) => {
                  setAllProducts(userData.products);
                  setTotal(userData.total);
                  setCountProducts(userData.count);
                  setUserData(userData);
                }}
              />
            }
          />
          <Route
            path="/perfil"
            element={
              <Perfil
                userData={userData}
                onLogout={() => {
                  setUserData(null);
                }}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
