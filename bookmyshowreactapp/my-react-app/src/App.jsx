import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import GridBase from "./Components/Grid/GridBase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/grid" element={<GridBase />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
