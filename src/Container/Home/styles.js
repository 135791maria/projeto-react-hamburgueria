import styled from "styled-components";


export const Container = styled.div`
background-image:url("https://th.bing.com/th/id/OIP.gVMNr1Z4VMKV7FR0N4aRcQHaHa?pid=ImgDet&w=474&h=474&rs=1");
width:100%;
height:880px;
display:flex;
flex-direction:column;
align-items:center;
gap:40px;


`;

export const Image = styled.img`
margin-top:40px;
position:absolute;
width:300px;
height:250px;
`;


export const InputLabel = styled.p` 
letter-spacing:-0.408px;
font-style:normal;
font-weight:bold;
font-size:18px;
line-height:22px;
padding-left:20px;
color:white;

`;
export const Button = styled.button`
width:342px;
height:78px;
border-radius:14px;
border:none;
margin-top:50px;
background:#3a3a3a;
color:white;
font-size:25px;
font-weight:bold;
cursor: pointer;
&:hover{
opacity:0.5;

&:active{
color:yellowgreen;

}
}
`;



export const Input = styled.input`
border:none;
width:342px;
height:50px;
background:#3a3a3a;
box-shadow:0px 9px 9px rgba(  0,0,0,0.25);
border-radius:13px;
outline:none;
padding-left:20px;
font-size:20px;
font-weight:normal;
font-style:normal;
line-height:28px;
color:#000000;
margin-bottom:30px;
cursor:pointer;
`;


