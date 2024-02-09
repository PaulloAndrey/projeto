import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ListaProdutos } from "../ListaProdutos";
import { CarrinhoContext } from "../../hooks/CarrinhoContext";


function GerenciarLogin2() {

    const [token, setToken] = useState(null);
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const [emailUsuario, setEmailUsuario] = useState(null);
    
    const [numeroProdutoCarrinho, setNumeroProdutoCarrinho] = useState(0);
    const { listaProdutosCarrinho } = useContext(CarrinhoContext);

    useEffect(() => {
        const quantidadeProdutos = listaProdutosCarrinho.lenght;
        setNumeroProdutoCarrinho(quantidadeProdutos);
    }, [listaProdutosCarrinho]);


    useEffect(() => {
        pegarDadosLocalStorage();
    }, []);

    function pegarDadosLocalStorage() {
        const token = localStorage.getItem("token");
        const nomeUsuario = localStorage.getItem("nomeUsuario");
        const emailUsuario = localStorage.getItem("emailUsuario");
        setToken(token);
        setNomeUsuario(nomeUsuario);
        setEmailUsuario(emailUsuario);
    }

    function removerDadosLocalStorage() {
        localStorage.removeItem("token");
        localStorage.removeItem("nomeUsuario");
        localStorage.removeItem("emailUsario");
        pegarDadosLocalStorage();
      }

    if (!token) {
        return (
            <Row>
                <Col md={12}>
                    <a href="/Login">
                        <Button variant="primary">Login</Button>{" "}
                    </a>
                </Col>
            </Row>
        );
    }
    return (
        <Row>
            <Col md={7}>
                <l className="fa fa-user"> {nomeUsuario}</l>
                <l className="fa fa-at"> {emailUsuario}</l>
            </Col>
            <Col md={2}>
                <Button variant="danger" onClick={() => removerDadosLocalStorage()}>Sair</Button>
            </Col>
        </Row>
    );

}
export { GerenciarLogin2 };