/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Login from "./pages/shared/Login";
import Products from "./pages/Customer/Product";
import Navbar from "./Components/shared/navbar";
import { AuthContext } from "./hooks/UserContext";
import Cart from "./pages/Customer/Cart";
import Footer from "./Components/shared/Footer";
import ProductForm from "./Components/Admin/addProductForm";

function App() {
  const { authenticationData } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={authenticationData ? <Products /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />{" "}
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
