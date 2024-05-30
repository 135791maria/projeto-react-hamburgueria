import React from "react";
import {ContainerItens as Container} from "./styles"

function containerItens({children,heigth}){
console.log(heigth)
return <Container heigth={heigth}>{children}</Container>




}
export default containerItens