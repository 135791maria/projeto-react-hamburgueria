import styled from "styled-components";


export const Container = styled.div`
background-image:url("https://th.bing.com/th/id/OIP.gVMNr1Z4VMKV7FR0N4aRcQHaHa?pid=ImgDet&w=474&h=474&rs=1");
display:flex;
flex-direction:column;
align-items:center;
gap:40px;
height:100%;
min-height:100vh;

`;

export const Image = styled.img`
margin-top:30px;
position:absolute;
width:300px;
height:350px;

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



export const Orde = styled.li`
display:flex;
margin-top:20px;
justify-content:space-around;
align-items:center;
border:none;
width:342px;
height:100px;
background:#3a3a3a;
box-shadow:0px 9px 9px rgba(  0,0,0,0.25);
border-radius:13px;
outline:none;
padding-left:20px;
font-size:20px;
font-weight:normal;
font-style:normal;
line-height:28px;
color:#ffffff;
margin-bottom:30px;

 p{
font-style:normal;
font-weight:bold;
font-size:20px;
line-height:24px;
cursor:pointer;
 }

 button{
background:none;
border:none;
cursor:pointer;

 }

img{
width:20px;
}

`;
