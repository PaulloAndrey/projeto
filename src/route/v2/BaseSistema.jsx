import NavBarV2 from "../../componentes/v2/NavBar2";

const { Container } = require("react-bootstrap");

function BaseSistema({ componente: Componente }) {
  return (
    <NavBarV2>
      <p>BASE SISTEMA</p>
      <Componente />
      **RODAPE***
    </NavBarV2>
  );
}

export { BaseSistema };
