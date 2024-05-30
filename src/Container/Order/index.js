import React, { useState,  useEffect } from "react";
import {useHistory} from "react-router-dom";

import axios from "axios";
import Img from "../../assets/image.png"
import lixeira from "../../assets/lixeira.png";

import H1 from "../../Components/Title";
import ContainerItens from "../../Components/containerItens";

import {
  Container,
  Image,
  Button,
  Orde,
} from "./styles"

function Order() {
  const [order, setOrder] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fechtOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/order")

      setOrder(newOrder)

    }
    fechtOrder()

  }, []);

  async function deleteOrde(ordeId) {
    await axios.delete(`http://localhost:3001/order/${ordeId}`)
    const newOrder = order.filter((orde) => orde.id !== ordeId)
    setOrder(newOrder);
  }

function goBackPage(){
history.push("/");

}
  return (

    <Container>
      <Image alt="logo" src={Img} />
      <ContainerItens heigth={true}>

        <H1 margin={true}>Pedido</H1>
        
        <ul>
          {order.map((orde) => (
            <Orde key={orde.id}>
              <div>
              <p>{orde.pedido}</p> 
              
              <p>{orde.clientName}</p>
              </div>
              <button onclick={  () => deleteOrde(orde.id)}> 
              <img src={lixeira} alt="lata-de-lixo" /> </button>
            </Orde>
          ))};

        </ul>
        
        <Button onClick={goBackPage}>Voltar</Button>

      </ContainerItens>

    </Container>

  )

}
export default Order