import { Container } from "react-bootstrap";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBarV2 from "../componentes/v2/NavBar2";
 
function Home() {
  return (
    
    
    <div>
      <NavBarV2/>
      <CarouselAnuncios/>
       
        <h1>HOME</h1>
        <ListaProdutos />
    </div>
  );
}

export { Home };
