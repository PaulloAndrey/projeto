import { Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../../componentes/ListaProdutos";
import { Home2 } from "../../pages/v2/Home2";
import { Home } from "../../pages/Home";

function MinhaRotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto" element={<ListaProdutos />} />
    </Routes>
  );
}

export { MinhaRotas };
