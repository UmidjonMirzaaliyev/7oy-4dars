import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Products from "./pages/Product"
import Checkout from "./pages/Checkout"
import Orders from "./pages/Orders"
import ErrorPage from "./pages/ErrorPage"
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        {
          token && <>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>
          </>
        }
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
