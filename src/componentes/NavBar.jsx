import { Container, Nav, Navbar } from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin";


function NavBar(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>

          </Nav>
          
         </Container>
      </Navbar>
      <div style={{ marginTop: "100px" }}>{props.children}</div>
    </Container>
  );
}

export default NavBar;
