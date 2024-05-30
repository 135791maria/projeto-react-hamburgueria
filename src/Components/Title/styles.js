import styled from "styled-components"

export const H1 = styled.h1`
color:white;
font-style:normal;
font-weight:bold;
font-size:34px;
line-height:40px;
text-align:center;
margin-bottom:80px;
margin-top:250px;
${props => props.margin && `

margin-top:300px;


`}
`;