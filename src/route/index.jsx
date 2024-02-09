import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produto";
import {Login} from "../pages/Login";
import { Carrinho } from "../pages/Carrinho";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>

      </Routes>
    </BrowserRouter>
  );
}
