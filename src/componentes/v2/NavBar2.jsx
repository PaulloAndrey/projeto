import { Container, Nav, Navbar } from "react-bootstrap";
import { GerenciarLogin2 } from "../v2/GerenciarLogin";


function NavBarV2(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/carrinho">Carrinho</Nav.Link>

          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
               <GerenciarLogin2 /> 
            </Navbar.Text>
          </Navbar.Collapse>
        
 


        </Container>
      </Navbar>
      <div style={{ marginTop: "100px" }}>{props.children}</div>
    </Container>
  );
}

export default NavBarV2;
