import { Col, Row } from "react-bootstrap";
import { CardProduto } from "./CardProduto";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../_service/api";
import NavBar from "./NavBar";


function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    bsucarProduto();
  }, []);


  async function bsucarProduto(){
    try{
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (error) {
      mensagemErro("Erro para buscar os produtos.");
    }
  }

    function mensagemErro(mensagem = "Mensagem de errro"){
      toast.error(mensagem, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      //  transition: Bounce,
        
      });
    }

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h1>Lista de Produtos</h1>
        </Col>
        </Row>
      <Row>

        {produtos.map((produto, index) => {
          return (
            <Col className="m-2">
              <CardProduto
               idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
                descricao={produto.category}
                />
                </Col>
          );
          })}
          </Row>

          <Row>
        <CardProduto
          nome="Paulo"
          preco="5"
          linkImagem="https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          descricao="Hello world"
          />
      </Row>

    </>
  );
}

export { ListaProdutos };

