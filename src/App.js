import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";
import CarrinhoContextProvider from "./hooks/CarrinhoContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
        <ToastContainer />
      <CarrinhoContextProvider>
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;
