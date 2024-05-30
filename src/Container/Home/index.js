import React, { useState, useRef, } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import logomarca from "../../assets/logomarca.png";

import H1 from  "../../Components/Title"
import ContainerItens from "../../Components/containerItens";


import {   
  Container,
  Image,
  InputLabel,
  Button,
  Input,


} from "./styles"

function App() { 
  const [order, setOrder] = useState([]);
  const history = useHistory()
  const pedido = useRef()
  const clientName = useRef()
 


  async function addNewOrde() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      pedido: pedido.current.value,
      clientName: clientName.current.value,
    });

    setOrder([...order, newOrder]);

    history.push("/Order")

  }





return (

  <Container>
    <Image alt="logo-image" src={logomarca} />
    <ContainerItens>

      <H1>Faça seu pedido</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={pedido} placeholder="Pedido" />

      <InputLabel>Cliente</InputLabel>
      <Input ref={clientName} placeholder="clientName" />

      <Button onClick={addNewOrde}>pedido</Button>

    </ContainerItens>

  </Container>

)

}
export default App