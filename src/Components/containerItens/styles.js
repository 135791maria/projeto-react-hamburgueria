import styled from "styled-components"


export const ContainerItens = styled.div`
background: #020210;
background-size:cover;
border-radius:12px;
padding:50px 36px;
display:flex;
flex-direction:column;
margin-top:40px;
${props => props.heigth && `

height:100%;
min-height:calc(100vh - 170px);

`}

`;