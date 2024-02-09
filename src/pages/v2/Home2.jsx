import { Container } from "react-bootstrap";
import CarouselAnuncios from "../../componentes/CarouselAnuncios";
import { ListaProdutos } from "../../componentes/ListaProdutos";

function Home2() {
  return (
    <Container>
      <CarouselAnuncios />
      <ListaProdutos />
    </Container>
  );
}

export { Home2 };
