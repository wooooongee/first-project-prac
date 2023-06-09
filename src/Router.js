// Router.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { Nav } from "./Nav";
import "./Nav.scss"
import { Category } from "./pages/Category";
import { Vision } from "./pages/Vision";
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />}/>
        <Route path="/vision" element={<Vision />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
